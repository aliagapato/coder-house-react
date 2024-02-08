import useCartContext from "../../hooks/useCartContext"
import CartProductDetail from "../CartProductDetail/CartProductDetail"
import formatCurrency from "../../Utils/formatCurrency"
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const Checkout = () => {
  const { cart, getProductTotalPrice, buyCart } = useCartContext()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  const handleClickForm = async e => {
    e.preventDefault()
    document.getElementById("btnBuy").style.pointerEvents = 'none'
    const date = new Date()
    const order = {
      buyer: { 
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value
      },
      cart: cart,
      createdAt: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      shipping: {
        address: document.getElementById("address").value,
        type: document.querySelector('input[name="shippingType"]:checked').value
      },
      total: getProductTotalPrice()
    }
    await buyCart(order)
      .then(data => setTimeout(() => {
        setTimeout(() => {
          navigate(`/order/${data.orderId}`)
        }, 500)
        
      }, 1750))
      .catch(() => document.getElementById("btnBuy").style.pointerEvents = 'auto')
  }

  useEffect(() => {
    document.getElementById("closeCartViewOffCanvas").click()
  }, [])

  return (
    <div className="container-fluid text-center align-middle h-100">
      <div className="row justify-content-between">
        <div className={`col col-12 col-lg-${(cart.length === 0) ? '12' : '7'} border border-3 rounded mb-4 p-0`} style={{overflowY: "auto", minHeight: "65vh", maxHeight: "65vh"}}>
            {(cart.length !== 0 ? cart.map((p, index) => <CartProductDetail key={p.id} product={p} lastIndex={((index+1) === cart.length)}/>) : <span className="fs-3">Sin productos aún 💔</span>)}
        </div>
        <div className={`col col-12 col-lg-4 border border-3 rounded mb-4 p-4 fs-6 ${(cart.length === 0) ? 'd-none' : ''}`}>
          <form>
            <div className="form-floating mb-4 fs-3" id="title">
              <span htmlFor="title"><u>Datos personales</u></span>
            </div>
            <div className="form-floating mb-4">
              <input type="email" className="form-control" id="email" name="email" placeholder="correo@empresa.com" required value={email} onChange={e => setEmail(e.target.value)}/>
              <label htmlFor="email">Correo electrónico</label>
            </div>
            <div className="form-floating mb-4">
              <input type="text" className="form-control" id="name" name="name" placeholder="Tu nombre y apellido" required value={name} onChange={e => setName(e.target.value)}/>
              <label htmlFor="name">Tu nombre y apellido</label>
            </div>
            <div className="form-floating mb-4">
              <input  min={1} type="number" className="form-control" id="phone" name="phone" placeholder="Telefono" required value={phone} onChange={e => setPhone(e.target.value)}/>
              <label htmlFor="phone">Telefono</label>
            </div>
            <div className="form-floating mb-4">
              <input type="text" className="form-control" id="address" name="address" placeholder="Dirección" required value={address} onChange={e => setAddress(e.target.value)}/>
              <label htmlFor="address">Dirección</label>
            </div>
            <div className="form-check form-check-inline mb-4">
              <input className="form-check-input" type="radio" name="shippingType" id="inlineRadio1" value="despacho" defaultChecked />
              <label className="form-check-label" htmlFor="inlineRadio1">Despacho gratuito</label>
            </div>
            <div className="form-check form-check-inline mb-4">
              <input className="form-check-input" type="radio" name="shippingType" id="inlineRadio2" value="retiro" />
              <label className="form-check-label" htmlFor="inlineRadio2">Retiro en tienda</label>
            </div>
            <div className="fs-4 mb-4 container-fluid">
              <div className="row">
                <div className="col col-12 col-lg-3 text-start">Total:</div>
                <div id="total" className="col col-12 col-lg-7 text-start">{formatCurrency(getProductTotalPrice())}</div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className={`col col-12 col-lg-${(cart.length === 0) ? '12' : '7'} p-0 m-0 mb-4 text-center`}>
          <Link to="/" className="btn btn-warning w-100"><h2>Seguir comprando 😂</h2></Link>
        </div>
        <div className={`col col-12 col-lg-4 p-0 m-0 mb-4 text-center ${(cart.length === 0) ? 'd-none' : ''}`}>
          <button id="btnBuy" onClick={handleClickForm} disabled={!((email.includes('@') && name && phone))} className="btn btn-success w-100"><h2>{(email.includes('@') && name && phone) ? ('Finalizar compra! 🤘') : ('Completa tus datos 👩‍💻')}</h2></button>
        </div>
      </div>
    </div>
  )
}

export default Checkout