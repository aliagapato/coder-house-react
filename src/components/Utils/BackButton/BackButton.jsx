import { useNavigate } from "react-router-dom"

const BackButton = () => {
  const navigate = useNavigate()
  return <span onClick={() => navigate(-1)} className="btn btn-warning w-100"><b><i className="bi bi-arrow-left-short"></i></b></span>
}

export default BackButton