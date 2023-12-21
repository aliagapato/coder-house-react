import classes from './SideBarElement.module.css'
import RandomInt from '../../../Utils/RandomInt'

const SideBarElement = ({evento, id, category, activeItem}) => {
  
  console.log(id, name, activeItem);
  return (
    <li key={id} onClick={evento} data-id={category} className={"pointer d-flex justify-content-between border rounded mb-4 p-2 fs-5 "+classes.cursorPointer+((activeItem === category) ? " border-warning" : "")}>
      <div className="text-black">{category}</div>
      <div className={"badge fs-6 border "+((activeItem === category) ? "bg-warning": "border-warning text-warning")}>{RandomInt()}</div>
    </li>
  )

}

export default SideBarElement