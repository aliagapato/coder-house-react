import { useEffect, useRef, useState } from "react"
import evaluatePercentMessage from './../../../utils/EvaluatePercentMessage'

const ItemCount = ({ stock = 5, initialValue = 0 }) => {

  const [quantity, setQuantity] = useState(initialValue)
  const msg = useRef(evaluatePercentMessage(stock, initialValue))

  const add = () => {
    if (quantity < stock) {
      let nextState = quantity + 1
      setQuantity(nextState)
      msg.current = evaluatePercentMessage(stock, nextState)
    }
  }

  const remove = () => {
    if (quantity >= 1) {
      let nextState = quantity - 1
      setQuantity(nextState)
      msg.current = evaluatePercentMessage(stock, nextState)
    }
  }

  useEffect(() => {
    msg.current = evaluatePercentMessage(stock, quantity)
  }, [])

  return (
    <div style={{ "fontSize": "smaller" }} className="container-fluid p-0">
      <div className="row justify-content-center ">
        <div className="col col-12 col-lg-5">
          <button disabled={quantity === 0} onClick={remove} className="btn border border-3 btn-warning w-100">
            <span className="fw-bolder">-</span>
          </button>
        </div>
        <div className="col col-12 col-lg-2 text-center fw-bold">
          <h2>{quantity}</h2>
        </div>
        <div className="col col-12 col-lg-5">
          <button disabled={quantity === stock} onClick={add} className="btn border border-3 btn-warning w-100">
            <span className="fw-bolder">+</span>
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col ">
          <button disabled={quantity === 0} onClick={() => console.log(quantity)} className="border border-3 btn btn-danger fw-bold w-100" type="submit"><span>{msg.current}</span></button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount