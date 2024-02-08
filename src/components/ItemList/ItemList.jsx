import Item from "../Item/Item";

const ItemListContainer = ({ items }) => {

  return (
    <div className="container-fluid p-0">
      <div className="row">
        {items && items.map(i => <Item key={i.id} item={i} />)}
      </div>
    </div>
  )
}

export default ItemListContainer