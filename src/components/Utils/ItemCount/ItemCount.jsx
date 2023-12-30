import { useState } from "react"

const ItemCount = () => {
  const [count, setCount] = useState(0)
  const decrement = () => setCount(count - 1)
  const increment = () => setCount(count + 1)

  return (
    <div className="container-fluid text-center my-3">
      <div className="row">
        <div className="col">
          <button onClick={decrement} className="btn btn-outline-danger">Decrementar</button>
        </div>
        <div className="col">
          <h1>{count}</h1>
        </div>
        <div className="col">
          <button onClick={increment} className="btn btn-outline-success">incrementar</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount