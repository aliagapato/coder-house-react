import { useState } from 'react';
import { Link } from 'react-router-dom';
import formatCurrency from '../../Utils/formatCurrency';

const Item = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => setIsHovered(!isHovered)
  return (
    <div className="col-12 col-lg-4 mb-5 fs-6">
      <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`card h-100 text-center border border-3 rounded ${((isHovered) ? "border-warning" : "")}`}>
        <div className='d-flex card-header h-100 justify-content-center align-items-center fs-4'>{item.name}</div>
        <div className='card-body p-5'>
          <img src={item.img} className="img-fluid rounded" alt="..." style={{ "minWidth": "70%" }} />
        </div>
        <div className='card-footer'>
          <p className="fs-2 text-center"><strong>{formatCurrency(item.price)}</strong></p>
        </div>
        <div className='card-footer'>
          {
            item.stock === 0 
            ? (<button disabled className="border border-3 btn btn-warning fw-bold w-100 fs-4">Sin stock</button>)
            : (<Link to={`/product/${item.id}`} className="border border-3 btn btn-warning fw-bold w-100 fs-4">Detalle <i className="bi bi-arrow-right-short"></i></Link>)
          }
        </div>
      </div>
    </div >
  )
}

export default Item