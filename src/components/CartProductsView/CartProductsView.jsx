import { useEffect } from "react"
import formatCurrency from "../../Utils/formatCurrency"
import useCartContext from "../../hooks/useCartContext"
import CartProductDetail from "../CartProductDetail/CartProductDetail"
import { Link, useNavigate } from 'react-router-dom'

const CartProductsView = () => {
  const {cart, clearCart, getProductTotalPrice} = useCartContext()
  const totalProductsPrice = getProductTotalPrice()
  const navigate = useNavigate()
  
  useEffect(() => {
    document.getElementById('cartViewOffCanvas').addEventListener('hidden.bs.offcanvas', () => navigate(0))
    return document.getElementById('cartViewOffCanvas').removeEventListener('hidden.bs.offcanvas', () => navigate(0))
  }, [])

  return (
    <div className="offcanvas offcanvas-end" style={{width: '500px'}}tabIndex="-1" data-bs-scroll="true" id="cartViewOffCanvas" aria-labelledby="cartViewOffCanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title fs-3" id="offcanvasResponsiveLabel">Carrito de compras</h5>
        <button id="closeCartViewOffCanvas" type="button" className="btn-close border-3 border" data-bs-dismiss="offcanvas" data-bs-target="#cartViewOffCanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body px-0">
        {(cart.length !== 0 ? cart.map((p, index) => <CartProductDetail key={p.id} product={p} lastIndex={((index+1) === cart.length)}/>) : <span className="fs-3">Sin productos aún 💔</span>)}
      </div>
      <div className="offcanvas-footer pb-3">
        <div className="container-fluid fs-5">
          <div className="row py-4 text-center">
            <div className="col fs-3">Total carrito:</div>
            <div className="col fs-3"><b>{formatCurrency(totalProductsPrice)}</b></div>
          </div>
          <div className="row">
            <div className="col">
              <button onClick={clearCart} className="btn btn-danger fs-3">Eliminar <i className="bi bi-trash-fill fst-normal"></i></button>
            </div>
            <div className="col">
              <Link to={`${cart.length !== 0 ? '/checkout' : '#'}`} className="btn btn-success fs-3">Comprar <i className="bi bi-cart3 fst-normal"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProductsView