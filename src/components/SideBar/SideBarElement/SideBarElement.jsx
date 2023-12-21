import { useState } from 'react'
import RandomInt from '../../../Utils/RandomInt'

const SideBarElement = ({ name, id }) => {
  const [activeCategory, setActiveCategory] = useState('border border-warning')
  const [activeBadge, setActiveBadge] = useState('bg-warning')
  // border border-warning text-warning
  
  return (
    <li key={id} className={"d-flex justify-content-between border rounded mb-4 p-2 fs-5 " + activeCategory}>
      <div className="text-black">{name}</div>
      <div className={"badge fs-6 " + activeBadge}>{RandomInt()}</div>
    </li>
  )

}

export default SideBarElement