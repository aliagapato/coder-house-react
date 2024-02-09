import { useEffect } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import { getOrders } from "../../services/firebase/firestore/orders"
import PurchasesList from "../PurchasesList/PurchasesList"
import LoadingBar from "../Utils/LoadingBar/LoadingBar"
import EmptyState from "../Utils/EmptyState/EmptyState"

const Purchases = () => {
  const navigate = useNavigate()
  const { user } = useAuthContext()
  const { email } = useParams()
  useEffect(() => {
    if(!user) {
      navigate('/')
    } else {
      if((user.email != email)) {
        console.log('Email incorrecto', user.email, email)
        navigate('/')
      }
    }
  }, [user])

  const { data, error, loading } = useAsync(() => getOrders(email), [], [email])

  if (loading) return <LoadingBar />
  if (error) return <span>Error cargando compras realizadas</span>
  
  return (data.length === 0) ? <EmptyState msg={`No se han encontrado compras asociadas al correo "${email}"...`}/> : <PurchasesList purchases={data} />





}

export default Purchases