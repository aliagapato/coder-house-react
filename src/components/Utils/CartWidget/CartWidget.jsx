import useCartContext from "../../../hooks/useCartContext"

const CartWidget = () => {
  const { totalQuantity } = useCartContext()
  return (
    <button className="btn btn-danger fw-bold mb-2 mb-lg-0 w-100" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartViewOffCanvas" aria-controls="cartViewOffCanvas">
      <i className="bi bi-cart3 fst-normal"> { totalQuantity }</i>
    </button>
  )
}

export default CartWidget