import { useState } from 'react';
// import ItemCount from "../../Utils/ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  return (
    <div className="col-12 col-lg-4 mb-5 fs-6">
      <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`card h-100 text-center border border-3 rounded ${((isHovered) ? "border-warning" : "")}`}>
        <div className='d-flex card-header h-100 justify-content-center align-items-center fs-6'>{item.title}</div>
        {/* <div className="card-body">
            <p className="card-text"></p>
          </div> */}
        <div className='card-body p-5'>
          {/* <img src={item.thumbnail} className="img card-img-top rounded" alt="..." /> */}
          {/* <img src="https://placehold.co/400x400?font=lato" className="img-fluid rounded" alt="..." /> */}
          <img src={item.thumbnail} className="img-fluid rounded" alt="..." style={{ "minWidth": "70%" }} />
        </div>
        <div className='card-footer'>
          <p className="fs-2 text-center"><strong>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(item.price)}</strong></p>
        </div>
        <div className='card-footer'>
          {/* <ItemCount /> */}
          <Link to={`/coder-house-react/product/${item.id}`} className="border border-3 btn btn-outline-warning fw-bold w-100">Detalle <i className="bi bi-arrow-right-short"></i></Link>
        </div>
        {/* <div className='card-footer'>
            {item.type}
          </div> */}
      </div>
    </div >
  )
}

export default Item