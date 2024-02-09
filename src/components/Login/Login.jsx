import GoogleIcon from "../../assets/icon-google.svg"
import { googleProvider } from "../../services/firebase/firebaseConfig"
import { useSocialSignup } from "../../hooks/useSocialSignup"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
  
  
const Login = () => {
  const google = useSocialSignup(googleProvider)
  const { user } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if(user) {
      navigate(-1)
    }
  }, [user])

  return (
    <div className="container-fluid text-center align-middle h-100">
      <div className="row justify-content-between">
        <div className={`col col-12 border border-3 rounded mb-4 p-0`} style={{overflowY: "auto", minHeight: "75vh", maxHeight: "75vh", textAlign: "center", verticalAlign: "middle"}}>

        <div className="my-5 py-5">
            <span className="fs-2"><u>Elija una forma de iniciar sesión:</u></span>
          </div>

        <div className="container-fluid text-center align-middle pt-5">
          <div className="row justify-content-around">
            <div className={`col col-12 col-lg-4 text-start bg-body-tertiary border border-3 rounded text-center p-5`}>
              <button onClick={google.signInWithSocial}>
                <img src={GoogleIcon} alt="" />
                <span>Google</span>
              </button>
            </div>    
          </div>    
        </div>    

        </div>
      </div>
    </div>
  )
}

export default Login