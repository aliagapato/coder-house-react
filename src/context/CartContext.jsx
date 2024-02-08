import { useState, createContext, useEffect } from "react"
import useToastContext from "../hooks/useToastContext"
import { setOrder } from "../services/firebase/firestore/orders"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0,
    updateProduct: () => {},
    removeProduct: () => {},
    clearCart: () => {},
    getProductQuantity: () => {},
    getProductTotalQuantity: () => {}, 
    getProductTotalPrice: () => {},
    buyCart: () => {}
})

export const CartContextProvider = ({ children }) => {
    const { launchToast, launchToastPromise } = useToastContext()
    const [cart, setCart] = useState([])
    const totalQuantity = cart.reduce((acc, current) => acc + current.quantity, 0)
    const total = cart.reduce((acc, current) => acc + current.price, 0)
    const updateProduct = (product) => {
      let newCart = null
      let productIndex  = cart.findIndex(p => p.id === product.id)
      if(productIndex === -1) {
        newCart = [...cart, product]
        launchToast('Producto agregado', 'success')
      } else {
        if(product.quantity !== 0) {
          newCart = [...cart]
          newCart[productIndex].quantity = product.quantity
          launchToast('🚀 Cantidad modificada')
        } else {
          newCart = cart.filter(p => p.id !== product.id)
          launchToast('Producto eliminado', 'error')
        }
      }
      localStorage.setItem('cart', JSON.stringify(newCart))
      newCart.sort((a, b) => a.name - b.name)
      setCart(newCart)
    }
    const removeProduct = productId => {
      localStorage.removeItem('cart')
      setCart(cart.filter(p => p.id !== productId))
    }
    const clearCart = (msg = true) => {
      localStorage.clear()
      setCart([])
      if(msg) launchToast('Carrito de compras eliminado', 'success')
    }
    const getProductQuantity = productId => cart.filter(p => p.id === productId).reduce((acc, current) => acc + current.quantity, 0)
    const getProductTotalQuantity = () => cart.reduce((acc, current) => acc + current.quantity, 0)
    const getProductTotalPrice = () => cart.reduce((acc, current) => acc + current.price*current.quantity, 0)
    const buyCart = async (order) => {
      return await launchToastPromise(setOrder(order), {
        pending: 'Verificando stock y datos personales 👽',
        success: 'Compra exitosa 👌',
        error: 'Ocurrio un problema 🤯'
      })
    }
    
    useEffect(() => {
      const cart = JSON.parse(localStorage.getItem('cart'))
      if(cart) {
        setCart(cart)
      } else {
        localStorage.setItem('cart', JSON.stringify([]))
        setCart([])
      }
    }, [])

    return (
        <CartContext.Provider value={{ 
          cart,
          totalQuantity,
          total,
          updateProduct,
          removeProduct,
          clearCart,
          getProductQuantity,
          getProductTotalQuantity,
          getProductTotalPrice,
          buyCart
        }}>
            { children }
        </CartContext.Provider>
    )
}