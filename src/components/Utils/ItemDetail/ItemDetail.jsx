import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductsById } from "../../../assets/mocks/AsyncProducts"
import ItemCount from "../ItemCount/ItemCount"
import EmptyState from "../EmptyState/EmptyState"
import LoadingBar from "../LoadingBar/LoadingBar"
import RandomInt from "../../../Utils/RandomInt"

const ItemDetail = () => {
  let { productId } = useParams()
  let [isLoading, setIsLoading] = useState(false)
  let [isError, setIsError] = useState(false)
  let [isFound, setIsFound] = useState(true)
  let [product, setProduct] = useState([])
  const [stock, setStock] = useState(RandomInt(10))
  if(stock == 0) setStock(1)

  useEffect(() => {
    const fetchData = async () => {

      setIsLoading(true)

      try {

        let res = await getProductsById(productId)

        if (!res) {
          setIsError(true)
          throw new Error('Ocurrio un error al cargar detalle del producto')
        }

        (res.length > 0) ? setProduct(res[0]) : setIsFound(false)

      } catch (error) {

        setIsError(true)
        throw new Error(error)

      } finally {

        setTimeout(() => { setIsLoading(false) }, 250)

      }
    }

    fetchData()
  }, [productId])

  if (!isFound) {
    return <EmptyState msg="Producto no encontrado..." />
  }

  if ((isLoading) | (productId === undefined)) {
    return (
      <LoadingBar />
    )
  }

  if (isError) {
    return (
      <>
        <span>Error cargando detalle del producto</span>
      </>
    )
  }

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row bg-body-tertiary border border-3 rounded text-center mx-0 mb-3 p-5 text-truncated">
          <div className="col">
            {product.title}
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 mb-3 text-center justify-content-center">
            <div className="card border border-3 rounded p-5">
              <img src={product.thumbnail} className="img rounded mx-auto" alt="..." style={{ "minWidth": "80%" }} />
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <div className="card border border-3 rounded p-5 h-100">
              <p className="fs-2 text-start"><strong>Precio: </strong>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(product.price)}</p>
              <p className="fs-2 text-start"><strong>Stock: </strong>{stock}</p>
              <div className="container-fluid px-0">
                <div className="row bg-body-tertiary border border-3 rounded text-center mx-0 mb-3 p-5 text-truncated">
                  <div className="col-12">
                    {<ItemCount initialValue={0} stock={stock}/>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {JSON.stringify(product, null, 4)} */}
    </>
  )
}

export default ItemDetail