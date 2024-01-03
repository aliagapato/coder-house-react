import notFound from "/notFound.png"


const ErrorPath = () => {
  return (
    <div className="container-fluid border border-3 mb-4 rounded p-2 text-center align-middle">
      <div className="row justify-content-center">
        <div className="col-6">
          <img src={notFound} style={{ 'maxWidth': '50%', 'height': 'auto' }} alt="notFound" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <h1>Error 404</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div>Oops! Lo sentimos, Nuestro Seeker no pudo encontrar la pagina que buscas!</div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPath