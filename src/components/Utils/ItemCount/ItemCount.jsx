import { useEffect, useRef, useState } from "react"
import evaluatePercentMessage from './../../../utils/EvaluatePercentMessage'

const ItemCount = ({ stock, initialVulue, onAdd }) => {

  const [quantity, setQuantity] = useState(initialVulue)
  const msg = useRef(evaluatePercentMessage(stock, initialVulue))

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
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col col-lg-1">
          <button disabled={quantity === 0} onClick={remove} className="btn border border-3 btn-warning w-100">
            <span className="fs-3 fw-bolder">-</span>
          </button>
        </div>
        <div className="col col-12 col-lg-1 text-center pt-2 fw-bold">
          <h2>{quantity}</h2>
        </div>
        <div className="col col-lg-1">
          <button disabled={quantity === stock} onClick={add} className="btn border border-3 btn-warning w-100">
            <span className="fs-3 fw-bolder">+</span>
          </button>
        </div>
      </div>
      <div className="row mt-2 justify-content-center">
        <div className="col col-lg-3 justify-content-center">
          <button disabled={quantity === 0} onClick={onAdd(quantity)} className="border border-3 btn btn-danger fw-bold w-100" type="submit"><h4>{msg.current}</h4></button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount