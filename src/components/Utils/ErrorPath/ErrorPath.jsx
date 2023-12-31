import notFound from "/notFound.png"

const ErrorPath = () => {
  return (

    <div className="border border-3 rounded p-2">
      <div className="row">
        <div className="col col-12 col-lg-6">
          <img src={notFound} className="img-fluid" alt="notFound" />
        </div>
        <div className="col col-12 col-lg-6">
          <h1>Error 404</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>Oops! Lo sentimos, El buscador no pudo encontrar la pagina que buscas!</div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default ErrorPath