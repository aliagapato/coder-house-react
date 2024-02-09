import { useParams } from "react-router-dom"
import ItemCount from "../Utils/ItemCount/ItemCount"
import EmptyState from "../Utils/EmptyState/EmptyState"
import LoadingBar from "../Utils/LoadingBar/LoadingBar"
import { getProductById } from "../../services/firebase/firestore/products"
import formatCurrency from "../../Utils/formatCurrency"
import BackButton from "../Utils/BackButton/BackButton"
import { useAsync } from "../../hooks/useAsync"
import useContextCart from "../../hooks/useCartContext"

const ItemDetail = () => {
  let { productId } = useParams()
  const { updateProduct, getProductQuantity} = useContextCart()
  const { data, error, loading } = useAsync(() => getProductById(productId), {error: false}, [productId])
  if (data.error) return <EmptyState msg="Producto no encontrado..." />
  if (error) return <span>Error cargando detalle del producto</span>
  const initialValue = getProductQuantity(productId)

  return (loading) ? <LoadingBar /> : (
    <div className="container-fluid px-0">
      <div className="container-fluid px-0">
        <div className="row text-center justify-content-between mx-0 mb-3">
          <div className="col col-12 col-lg-1 ps-0 pe-0 ps-lg-0 pe-lg-2 mb-3 mb-lg-0">
            <BackButton label="Atras" />
          </div>
          <div className="col col-12 col-lg-11 border border-3 rounded bg-body-tertiary text-truncated">
            {data.name}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6 mb-3 text-center justify-content-center">
          <div className="card border border-3 rounded p-5">
            <img
              src={data.img}
              className="img rounded mx-auto"
              alt="..."
              style={{ minWidth: "80%" }}
            />
          </div>
        </div>
        <div className="col-12 col-lg-6 mb-3">
          <div className="card border border-3 rounded p-5 h-100 justify-content-center">
            <p className="fs-2 text-start bg-body-tertiary border border-3 rounded p-2">
              <strong>Precio: </strong>{formatCurrency(data.price)}
            </p>
            <p className="fs-2 text-start bg-body-tertiary border border-3 rounded p-2">
              <strong>Stock&nbsp;:&nbsp;</strong>{data.stock}
            </p>
            <p className="fs-2 text-start bg-body-tertiary border border-3 rounded p-2">
              <strong>SubTotal&nbsp;:&nbsp;</strong>{formatCurrency(getProductQuantity(productId)*data.price)}
            </p>
            <div className="container-fluid px-0">
              <div className="row bg-body-tertiary border border-3 rounded text-center mx-0 mb-3 p-5 text-truncated">
                <div className="col-12">
                  {<ItemCount product={data} initialValue={initialValue} updateProduct={updateProduct}/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
