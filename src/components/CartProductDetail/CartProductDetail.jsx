import formatCurrency from "../../Utils/formatCurrency"
import useCartContext from "../../hooks/useCartContext"

const CartProductDetail = ({product, lastIndex}) => {
  const {updateProduct} = useCartContext()

  const incrementQuantity = () => {
    if (product.quantity < product.stock) {
      let nextValue = product.quantity + 1
      updateProduct({id: product.id, name: product.name, img: product.img, price: product.price, quantity: nextValue})
    }
  }
  
  const decrementQuantity = () => {
    if (product.quantity >= 1) {
      let nextValue = product.quantity - 1
      updateProduct({id: product.id, name: product.name, img: product.img, price: product.price, quantity: nextValue})
    }
  }

  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col col-3">
            <div className="">
              <img src={product.img} className="img-fluid rounded" alt="..." style={{ "maxWidth": "70%" }} />
            </div>
          </div>
          <div className="col col-9 ps-0 pe-4">
            <div className="container px-0 h-100">
              <div className="row h-100 d-flex align-items-center">
                <div className="col col-2">
                  <button type="button" disabled={product.quantity === 0} onClick={decrementQuantity} className="btn btn-warning w-100 fs-5">-</button>
                </div>
                <div className="col col-4">
                  <div className=""><b>Cantidad:</b></div>
                  <div className=""><b>Unidad&nbsp;&nbsp;:</b></div>
                  <div className=""><b>Total&nbsp;&nbsp;&nbsp;:</b></div>
                </div>
                <div className="col col-4 text-start">
                  <div className="">{product.quantity}</div>
                  <div className="">{formatCurrency(product.price)}</div>
                  <div className="">{formatCurrency(product.price*product.quantity)}</div>
                </div>
                <div className="col col-2">
                  <button type="button" disabled={product.quantity === product.stock} onClick={incrementQuantity} className="btn btn-warning w-100 fs-5">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {lastIndex ? ('') : (<hr className="hr" />)}
    </>
  )
}

export default CartProductDetail