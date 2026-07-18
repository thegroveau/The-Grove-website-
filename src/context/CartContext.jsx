import { createContext, useEffect, useMemo, useState } from 'react'

export const CartContext = createContext(null)

const STORAGE_KEY = 'grove_cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, variant, quantity = 1) => {
    setItems((prev) => {
      const key = `${product.id}-${variant}`
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, quantity: i.quantity + quantity } : i))
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          handle: product.handle,
          title: product.title,
          price: product.price,
          variant,
          quantity,
        },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (key) => setItems((prev) => prev.filter((i) => i.key !== key))

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) return removeItem(key)
    setItems((prev) => prev.map((i) => (i.key === key ? { ...i, quantity } : i)))
  }

  const clearCart = () => setItems([])

  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items])

  const value = {
    items,
    count,
    subtotal,
    isOpen,
    setIsOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
