import { useEffect, useState } from 'react'
import { fetchCollection, fetchProduct } from '../utils/shopify.js'

export function useProductsByHandles(handles) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    Promise.all(handles.map((h) => fetchProduct(h)))
      .then((data) => active && setProducts(data.filter(Boolean)))
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [handles.join(',')])

  return { products, loading }
}

export function useCollection(handle) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    fetchCollection(handle)
      .then((data) => active && setProducts(data))
      .catch((err) => active && setError(err))
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [handle])

  return { products, loading, error }
}

export function useProduct(handle) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    fetchProduct(handle)
      .then((data) => active && setProduct(data))
      .catch((err) => active && setError(err))
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [handle])

  return { product, loading, error }
}
