import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'

const Main = () => {
  return (
    <main className="container-fluid mt-4 p-0">
      <div className="row m-0 p-0">
        <div className="col col-12 col-lg-2 m-0 p-0">
          <SideBar />
        </div>
        <div className="col col-12 col-lg-10 m-0 p-0 pb-4 ps-lg-0 ps-lg-4 fs-4">
          <Content />
        </div>
      </div>
    </main>
  )
}

export default Main