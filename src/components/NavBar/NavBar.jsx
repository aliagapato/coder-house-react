import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({itemCount}) => {
  return (
    <nav className="navbar navbar-expand-lg p-0 m-0">
      <div className={"container border border-3 rounded p-2"}>
        <a className="navbar-brand m-0" href="#">
          <i className="bi bi-book fs-2"></i>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-black" aria-current="page" href="#">Lumos Store</a>
            </li>
          </ul>
          <form className="d-flex me-2 mb-2 mb-lg-0" role="search">
            <input className="form-control me-2 border-warning" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-warning" type="submit">
                <i className="bi bi-search"></i>
              </button>
          </form>
          <CartWidget itemCount={itemCount}/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar