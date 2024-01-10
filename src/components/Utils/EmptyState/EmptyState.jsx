const EmptyState = ({ msg }) => {
  return (
    // <div className="container-fluid p-0 mt-2 bg-warning" style={{"minHeight": "75vh"}}>
    //   <div className="row">
    //     <div className="col-12">
    //       <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    //         <div className="progress-bar progress-bar-striped progress-bar-animated w-100 align-middle"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="d-flex justify-content-center h-100 border border-3 rounded">
      <div className="d-flex align-items-center">
        <span><strong role="status">{msg}</strong></span>
      </div>
    </div>
  )
}

export default EmptyState