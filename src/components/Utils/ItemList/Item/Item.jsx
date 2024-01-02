import { useState } from 'react';
import ItemCount from '../../../../components/Utils/ItemCount/ItemCount'

const Item = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(!isHovered)
  }


  return (
    <div className="col-12 col-lg-4 mb-5">
      <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`card h-100 text-center border border-3 rounded ${((isHovered) ? "border-warning" : "")}`}>
        <div className='card-header h-100 align-middle fs-5'>{item.title}</div>
        <div className="card-body">
          <p className="card-text"></p>
        </div>
        <div className='card-body'>
          {/* <img src={item.image} style={{ "maxWidth": "100%", "maxHeight": "80%", "objectFit": "scale-down" }} className="img card-img-top rounded" alt="..." /> */}
          <img src={item.image} className="img card-img-top rounded" alt="..." />
        </div>
        <div className='card-footer'>
          <ItemCount />
        </div>
        <div className='card-footer'>
          {item.type}
        </div>
      </div>
    </div >
  )
}

export default Item