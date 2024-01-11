import CartWidget from "../Utils/CartWidget/CartWidget"

const NavBar = ({ itemCount }) => {
  return (
    <nav className="navbar navbar-expand-lg p-0 m-0">
      <div className={"container-fluid border border-3 rounded p-2"}>
        <a className="navbar-brand ms-2 " href="/coder-house-react/">
          <i className="bi bi-book fs-2"></i>
          <span className="ms-4 fs-2">Lumos Store</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-12 col-lg-4 m-0 p-0 my-4 my-lg-0">
                <form role="search" action="/coder-house-react/" method="GET">
                  <div className="container-fluid">
                    <div className="row p-0">
                      <div className="col-10 col-lg-11 p-0">
                        <input className="form-control pe-4 border-warning" type="search" placeholder="Buscar" aria-label="Search" />
                      </div>
                      <div className="col-2 col-lg-1 px-2">
                        <button className="btn btn-warning" type="submit"><i className="bi bi-search"></i></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-12 col-lg-1 p-0 px-lg-4">
                <CartWidget itemCount={itemCount} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar