import { PRODUCTS, getProductsByCollection, getProductByHandle } from '../data/products.js'

const DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN
const TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN

export const isShopifyConfigured = Boolean(DOMAIN && TOKEN)

const ENDPOINT = DOMAIN ? `https://${DOMAIN}/api/2024-01/graphql.json` : null

const GET_COLLECTION = `
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      title
      products(first: 20) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange { minVariantPrice { amount currencyCode } }
            images(first: 1) { edges { node { url altText } } }
            variants(first: 10) {
              edges {
                node { id title availableForSale price { amount currencyCode } }
              }
            }
          }
        }
      }
    }
  }
`

async function shopifyFetch(query, variables) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  })
  if (!res.ok) throw new Error(`Shopify request failed: ${res.status}`)
  const json = await res.json()
  if (json.errors) throw new Error(json.errors.map((e) => e.message).join(', '))
  return json.data
}

function normaliseLiveProduct(node, collectionHandle) {
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    collection: collectionHandle,
    price: parseFloat(node.priceRange.minVariantPrice.amount),
    currencyCode: node.priceRange.minVariantPrice.currencyCode,
    description: node.description,
    image: node.images.edges[0]?.node.url ?? null,
    variants: node.variants.edges.map((e) => e.node),
  }
}

// Falls back to the static Emrald Labs catalogue whenever Shopify env vars
// are not configured, so the site renders real product data before the
// store exists.
export async function fetchCollection(handle) {
  if (!isShopifyConfigured) {
    return getProductsByCollection(handle)
  }
  const data = await shopifyFetch(GET_COLLECTION, { handle })
  if (!data.collection) return []
  return data.collection.products.edges.map((e) => normaliseLiveProduct(e.node, handle))
}

export async function fetchProduct(handle) {
  if (!isShopifyConfigured) {
    return getProductByHandle(handle)
  }
  const data = await shopifyFetch(
    `query getProduct($handle: String!) {
      product(handle: $handle) {
        id title handle description
        priceRange { minVariantPrice { amount currencyCode } }
        images(first: 5) { edges { node { url altText } } }
        variants(first: 10) { edges { node { id title availableForSale price { amount currencyCode } } } }
      }
    }`,
    { handle },
  )
  if (!data.product) return null
  return normaliseLiveProduct(data.product, data.product.handle)
}

export function fetchAllProductsStatic() {
  return PRODUCTS
}
