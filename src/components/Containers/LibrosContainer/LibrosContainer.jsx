const LibrosContainer = ({ data }) => {

  if (!data) {
    return (
      <>
        <div>Manipulando elementos</div>
      </>
    )
  }

  return (
    <>
      <div className="container mb-4">
        <div className="row">
          {data.data.slice(0, 5).map(h => {
            return (
              <div key={h.id} className="gx-5 col col-12 col-lg-4 border border-3 rounded">
                <p>id: {h.id}</p>
                <p>type: {h.type}</p>
              </div>
            )
          })}
        </div>
        <div className="row">
          <div className="col">
            <code style={{ 'whiteSpace': 'break-spaces' }}>{JSON.stringify(data.data[0], null, 4)}</code>
          </div>
        </div>
      </div>
    </>
  )
}

export default LibrosContainer