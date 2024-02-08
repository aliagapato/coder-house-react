import SideBarList from './SideBarList/SideBarList'
import SideBarPlaceHolder from './SideBarPlaceHolder'
import { useAsync } from '../../hooks/useAsync'
import { getCategories } from '../../services/firebase/firestore/categories'

const SideBar = () => {
  const { data, error, loading } = useAsync(getCategories, [])
  if (loading) return <SideBarPlaceHolder />
  if (error) return <span>Error cargando categorias</span>
  return <SideBarList categories={data} />
}

export default SideBar