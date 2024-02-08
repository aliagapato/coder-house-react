import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'
import CartProductsView from '../CartProductsView/CartProductsView'

const Main = () => {
  
  return (
    <main className="container-fluid mt-4 p-0" style={{"minHeight": "80vh"}}>
      <div className="row m-0 p-0">
        <div className="col col-12 col-lg-2 m-0 p-0">
          <button className="btn btn-outline-warning d-lg-none mb-4 w-100 fs-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#categoriesOffCanvas" aria-controls="categoriesOffCanvas">Categorias</button>
          <div className="offcanvas-lg offcanvas-start" tabIndex="-1" data-bs-scroll="true" id="categoriesOffCanvas" aria-labelledby="categoriesOffCanvasLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="categoriesOffCanvasLabel">Categorias</h5>
              <button type="button" className="btn-close border-3 border" data-bs-dismiss="offcanvas" data-bs-target="#categoriesOffCanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <SideBar />
            </div>
          </div>
          <CartProductsView />
        </div>
        <div className="col col-12 col-lg-10 m-0 p-0 pb-0 ps-lg-0 ps-lg-4 fs-4">
          <Content />
        </div>
      </div>
    </main>
  )
}

export default Main