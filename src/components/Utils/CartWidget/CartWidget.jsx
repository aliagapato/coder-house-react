const CartWidget = ({ itemCount }) => {
  return (
    <button className="btn btn-danger fw-bold mb-2 mb-lg-0 w-100" type="submit">
      <i className="bi bi-cart3 fst-normal"> {itemCount}</i>
    </button>
  )
}

export default CartWidget