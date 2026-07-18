export function formatPrice(amount, currencyCode = 'AUD') {
  const value = typeof amount === 'string' ? parseFloat(amount) : amount
  if (Number.isNaN(value)) return ''
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value)
}
