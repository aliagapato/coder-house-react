import Item from "../../Utils/Item/Item";

const ItemListContainer = ({ items, showExampleData = false }) => {

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          {items.map(i => {
              return (
                <Item key={i.id} item={i} />
              )
          })
          }
        </div>
        <div hidden={!showExampleData} className="row">
          <div className="col">
            <code style={{ 'whiteSpace': 'break-spaces' }}>{JSON.stringify(items[0], null, 4)}</code>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer