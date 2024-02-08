import { useState } from "react"
import CartWidget from "../Utils/CartWidget/CartWidget"
import { Link, useNavigate } from "react-router-dom"

const NavBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  const handleEnter = (e) => {
    if (e.key === "Enter") navigate((searchValue === '') ? '/' : `/search/${searchValue}`)
  }

  return (
    <nav className="navbar navbar-expand-lg p-0 m-0">
      <div className={"container-fluid border border-3 rounded p-2"}>
        <a className="navbar-brand ms-2 " href="/">
          <i className="bi bi-book fs-2"></i>
          <span className="ms-4 fs-2">Lumos Store</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-12 col-lg-4 m-0 p-0 my-4 my-lg-0">
                <div className="container-fluid">
                  <div className="row p-0">
                    <div className="col-10 col-lg-11 p-0">
                      <input className="form-control pe-4 border-warning" name="data" type="search" placeholder="Buscar" aria-label="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)} onKeyDown={handleEnter}/>
                    </div>
                    <div className="col-2 col-lg-1 px-2">
                      <Link to={(searchValue === '') ? '/' : `/search/${searchValue}`} className="btn btn-warning" type="submit"><i className="bi bi-search"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-1 p-0 px-lg-3">
                <CartWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar