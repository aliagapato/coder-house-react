import PurchaseItem from "../PurchaseItem/PurchaseItem";

const PurchasesList = ({ purchases }) => {
  return (
    <div className="container-fluid text-center align-middle h-100">
      <div className="row justify-content-between">
        <div className="col col-12 border border-3 rounded mb-4 px-5 pt-2" style={{overflowY: "auto", textWrap: "wrap", minHeight: "75vh", maxHeight: "75vh"}}>
          <div className="mb-4">
            <span className="fs-2"><u>Compras realizadas:</u></span>
          </div>
          {purchases && purchases.map(p => <PurchaseItem key={p.id} purchase={p}/>)}
        </div>
      </div>
    </div>
  )
}

export default PurchasesList