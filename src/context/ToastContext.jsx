import { createContext} from "react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

export const ToastContext = createContext({
    launchToast: () => {},
    launchToastPromise: () => {}
})

export const ToastContextProvider = ({ children }) => {
    const launchToast = (msg, type) => {
      let func = null
      let options = {delay: 250}
      switch (type) {
        case 'info':
          func = toast.info
          break;
        case 'success':
          func = toast.success
          break;
        case 'warning':
          func = toast.warning
          break;
        case 'error':
          func = toast.error
          break;
        default:
          func = toast
          break;
      }
      func(msg, options) // delay solo para efecto "guardando" XD
    } 
    const launchToastPromise = async (promise, msg) => await toast.promise(promise, msg, {delay: 250})

    return (
      <ToastContext.Provider value={{
        launchToast,
        launchToastPromise
      }}>
        <ToastContainer 
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        { children }
      </ToastContext.Provider>
    )
}