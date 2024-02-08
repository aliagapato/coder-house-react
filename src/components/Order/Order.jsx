import { Link, useParams } from "react-router-dom"
import { getOrderById } from "../../services/firebase/firestore/orders"
import { useAsync } from "../../hooks/useAsync"
import formatCurrency from "../../Utils/formatCurrency"
import EmptyState from "../Utils/EmptyState/EmptyState"
import LoadingBar from "../Utils/LoadingBar/LoadingBar"
import { useEffect } from "react"
import useCartContext from "../../hooks/useCartContext"

const Order = () => {
  // const [loading, setLoading] = useState(false)
  // const [data, setData] = useState({})
  // const [error, setError] = useState(false)
  // let { orderId } = useParams()
  // // const { data, error, loading } = useAsync(() => getOrderById(orderId), {error: false})
  // useEffect(() => {
  //   try {
  //     setLoading(true)
  //     const exec = async () => {
  //       const docRef = await doc(db, "orders", orderId)
  //       getDoc(docRef).then(docSnap => {
          
  //         console.log('=========================')
  //         console.log('docRef:', docRef)
  //         console.log('docSnap:', docSnap)
  //         console.log('docSnap.exists():', docSnap.exists())
  //         console.log('=========================')
          
  //         if (docSnap.exists()) {
  //           setData({
  //             id: orderId,
  //             ...docSnap.data()
  //           })
  //           console.log("Document data:", docSnap.data());
  //         } else {
  //           // docSnap.data() will be undefined in this case
  //           setData({error: true})
  //           console.log("No such document!");
  //         }
  //         setLoading(false)
  //       });
      
  //     }
  //     exec()
  //   } catch (error) {
  //     setLoading(false)
  //     setError(true)
  //   }
  // }, [orderId])
  let { orderId } = useParams()
  const { cart, clearCart } = useCartContext()
  const { data, error, loading } = useAsync(() => getOrderById(orderId), {error: false}, [orderId])
  
  useEffect(() => {
    if(cart.length > 0) clearCart(false)
  }, [])

  if (data.error) return <EmptyState msg="Orden de compra no encontrada..." />
  if (error) return <span>Error cargando detalle de orden de compra</span>
  if (loading) return <LoadingBar />

  return (
    <div className="container-fluid text-center align-middle h-100">
      <div className="row justify-content-between">
        <div className="col col-12 border border-3 rounded mb-4 px-5 pt-2" style={{overflowY: "auto", textWrap: "wrap", minHeight: "65vh", maxHeight: "65vh"}}>
          
          <div className="mb-4">
            <span className="fs-2"><u>Resumen de la compra:</u></span>
          </div>

          <div className="container-fluid m-0 p-0">

            <div className="row m-0 p-0 mb-5 fs-3">
              <div className="col col-12 col-lg-3 mb-4 m-lg-0 p-0 pt-2">
                <strong><u>Orden de compra:</u></strong>
              </div>
              <div className="col col-12 col-lg-9 m-0 p-0 pt-2 ps-4 fs-3 text-start bg-body-tertiary border border-3 rounded">
                <p><strong>Fecha</strong>: {data.createdAt}</p>
                <p><strong>N° de orden de compra</strong>: {data.id}</p>
                <p><strong>Total</strong>: {formatCurrency(data.total)}</p>
              </div>
            </div>

            <div className="row m-0 p-0 mb-5 fs-3">
              <div className="col col-12 col-lg-3 mb-4 m-lg-0 p-0 pt-2">
                <strong><u>Datos personales:</u></strong>
              </div>
              <div className="col col-12 col-lg-9 m-0 p-0 pt-2 ps-4 fs-3 text-start bg-body-tertiary border border-3 rounded">
                <p><strong>Nombre</strong>: {data.buyer && data.buyer.name}</p> 
                <p><strong>Correo</strong>: {data.buyer && data.buyer.email}</p>
                <p><strong>Telefono</strong>: {data.buyer && data.buyer.phone}</p>
              </div>
            </div>
            
            <div className="row m-0 p-0 mb-5 fs-3">
              <div className="col col-12 col-lg-3 mb-4 m-lg-0 p-0 pt-2">
                <strong><u>Datos despacho:</u></strong>
              </div>
              <div className="col col-12 col-lg-9 m-0 p-0 pt-2 ps-4 fs-3 text-start bg-body-tertiary border border-3 rounded">
                <p><strong>Tipo</strong>: {data.shipping && (data.shipping.type == 'despacho' ? 'Despacho gratuito': 'Retiro en tienda')}</p>
                <p><strong>Dirección</strong>: {data.shipping && (data.shipping.type == 'despacho' ? data.shipping.address: 'Av. Acme 404, Capa 8')}</p>
              </div>
            </div>

            <div className="row m-0 p-0 mb-5 fs-3">
              <div className="col col-12 col-lg-3 mb-4 m-lg-0 p-0 pt-2">
                <strong><u>Productos:</u></strong>
              </div>
              <div className="col col-12 col-lg-9 m-0 p-0 fs-3 text-start bg-body-tertiary border border-3 rounded">
                {data.cart && (
                  <table className="table table-dark table-striped table-hover table-bordered m-0 p-0 text-center">
                    <thead>
                      <tr>
                        <th scope="col">Preview</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">SubTotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.cart.map(p => { return (
                        <tr key={p.id}>
                          <th scope="row" style={{ textAlign: "center", verticalAlign: "middle"}}><img src={p.img} className="img-fluid rounded" alt="..." style={{ "maxWidth": "70%" }} /></th>
                          <td className="text-jusitfy">{p.name}</td>
                          <td>{formatCurrency(p.price)}</td>
                          <td>{p.quantity}</td>
                          <td>{formatCurrency(p.price*p.quantity)}</td>
                        </tr>
                      )})}
                      <tr>
                        <th scope="row" colSpan={4}>Total</th>
                        <td>{formatCurrency(data.total)}</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col col-12 col-lg-12 p-0 m-0 mb-4 text-center">
          <Link to="/" className="btn btn-warning w-100"><h2>Seguir comprando 😂</h2></Link>
        </div>
      </div>
    </div>
  )
}

export default Order
