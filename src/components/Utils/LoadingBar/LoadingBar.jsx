const LoadingBar = () => {
  return (
    <div className="d-flex justify-content-center h-100 border border-3 rounded">
      <div className="d-flex align-items-center">
        <span><strong role="status">Cargando información...</strong><div className="spinner-grow mt-2" aria-hidden="true"></div></span>
      </div>
    </div>
  )
}

export default LoadingBar