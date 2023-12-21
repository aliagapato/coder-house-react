import classes from './SideBarElement.module.css'
import RandomInt from '../../../Utils/RandomInt'


const SideBarElement = ({ id, name, evento, activeCategory, activeBadge }) => {
  
  return (
    <li key={id} onClick={evento} className={"pointer d-flex justify-content-between border rounded mb-4 p-2 fs-5 " + classes.cursorPointer + " " +activeCategory}>
      <div className="text-black">{name}</div>
      <div className={"badge fs-6 " + activeBadge}>{RandomInt()}</div>
    </li>
  )

}

export default SideBarElement