const CartWidget = ({ itemCount }) => {
  return (
    <button className="btn btn-outline-danger fw-bold" type="submit">
      <i className="bi bi-cart3 fst-normal"> {itemCount}</i>
    </button>
  )
}

export default CartWidget