import LoadingBar from "../Utils/LoadingBar/LoadingBar";
import EmptyState from "../Utils/EmptyState/EmptyState";
import ItemList from "../../components/ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../services/firebase/firestore/products";
import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";

const ItemListContainer = () => {
  const { categoryId, searchValue = false} = useParams()
  const { data, error, loading } = useAsync(((categoryId) ? () => getProductsByCategory(categoryId) : () => getProducts(searchValue)), [], [categoryId, searchValue])
  if (loading) return <LoadingBar />
  if (error) return <span>Error cargando elementos</span>
  return (data.length === 0) ? <EmptyState msg={(categoryId) ? 'Esta categoria aun no contiene productos' : `No se han encontrado productos que contengan "${searchValue}" en su nombre...`}/> : <ItemList items={data} />
}

export default ItemListContainer