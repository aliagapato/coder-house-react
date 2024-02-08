import { useEffect, useRef, useState } from "react"
import evaluatePercentMessage from '../../../Utils/evaluatePercentMessage'

const ItemCount = ({ product, initialValue = 0, updateProduct = null }) => {

  const msg = useRef(evaluatePercentMessage(product.stock, initialValue))
  const [quantity, setQuantity] = useState(initialValue)

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      let nextState = quantity + 1
      msg.current = evaluatePercentMessage(product.stock, nextState)
      setQuantity(nextState)
      updateProduct({id: product.id, name: product.name, img: product.img, price: product.price, stock: product.stock, quantity: nextState})
    }
  }

  const decrementQuantity = () => {
    if (quantity >= 1) {
      let nextState = quantity - 1
      msg.current = evaluatePercentMessage(product.stock, nextState)
      setQuantity(nextState)
      updateProduct({id: product.id, name: product.name, img: product.img, price: product.price, stock: product.stock, quantity: nextState})
    }
  }

  useEffect(() => {
    msg.current = evaluatePercentMessage(product.stock, initialValue)
  }, [])

  return (
    <div style={{ "fontSize": "smaller" }} className="container-fluid p-0">
      <div className="row justify-content-center ">
        <div className="col col-12 col-lg-5">
          <button disabled={quantity === 0} onClick={decrementQuantity} className="btn border border-3 btn-warning w-100">
            <span className="fw-bolder">-</span>
          </button>
        </div>
        <div className="col col-12 col-lg-2 text-center fw-bold">
          <h2>{quantity}</h2>
        </div>
        <div className="col col-12 col-lg-5">
          <button disabled={quantity === product.stock} onClick={incrementQuantity} className="btn border border-3 btn-warning w-100">
            <span className="fw-bolder">+</span>
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col ">
          <div disabled className={`border border-3 rounded p-2 mt-2 fw-bold w-100`}>{msg.current}</div>
        </div>
      </div>
    </div>
  )
}

export default ItemCount