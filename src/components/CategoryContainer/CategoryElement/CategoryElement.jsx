import classes from './CategoryElement.module.css'

const CategoryElement = ({ id, name, quantity, evento, activeItem }) => {

  return (
    <li onClick={evento} data-id={id} className={`d-flex justify-content-between border rounded mb-4 p-2 fs-5 ${classes.cursorPointer} ${((activeItem === id) ? "border-warning border-5" : "")}`}>
      <div onClick={evento} data-id={id}>{name}</div>
      <div onClick={evento} data-id={id} className={`badge fs-6 border ${(activeItem === id) ? "bg-warning text-black" : "border-warning text-warning"}`}>{quantity}</div>
    </li>
  )

}

export default CategoryElement