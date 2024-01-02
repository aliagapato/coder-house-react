const LoadingBar = () => {
  return (
    <div className="container-fluid p-0 mt-2">
      <div className="row">
        <div className="col-12">
          <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar progress-bar-striped progress-bar-animated w-100"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingBar