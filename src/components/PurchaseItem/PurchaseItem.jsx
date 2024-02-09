import { Link } from "react-router-dom"
import formatCurrency from "../../Utils/formatCurrency"

const PurchaseItem = ({ purchase }) => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row m-0 p-0 mb-5 fs-3">
        <div className="col col-12 col-lg-3 mb-4 m-lg-0 p-0 pt-2">
          <strong><u>{purchase.createdAt}:</u></strong>
        </div>
        <div className="col col-12 col-lg-9 m-0 p-0 pt-2 pb-4 px-4 fs-3 text-start bg-body-tertiary border border-3 rounded">
          <p><strong>N° de orden de compra</strong>: {purchase.id}</p>
          <p><strong>Total</strong>: {formatCurrency(purchase.total)}</p>
          <p><strong>Cantidad de productos</strong>: {purchase.cart.reduce((acc, current) => acc + current.quantity, 0)}</p>
          <Link to={`/order/${purchase.id}`} className="btn btn-warning w-100 me-5 pe-5"><h2>Detalle de la compra</h2></Link>
        </div>
      </div>
    </div>
  )
}

export default PurchaseItem