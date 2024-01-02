import Item from "./Item/Item"

const ItemListContainer = ({ data, showExampleData = false }) => {

  let item = null
  let image = 'image'
  let title = 'name'

  switch (data[0].type) {
    case 'book':
      image = 'cover'
      title = 'title'
      break;

    case 'character':
      //
      break;

    case 'movie':
      image = 'poster'
      title = 'title'
      break;

    case 'potion':
      //
      break;

    case 'spell':
      break;
  }

  return (
    <>
      <div className="container p-0">
        <div className="row">
          {data.map(d => {
            {
              if (d.attributes[image]) {
                item = {
                  id: d.id,
                  type: d.type,
                  link: d.links.self,
                  image: d.attributes[image],
                  title: d.attributes[title]
                }
                return (
                  <Item key={d.id} item={item} />
                )
              }
            }
          })
          }
        </div>
        <div hidden={!showExampleData} className="row">
          <div className="col">
            <code style={{ 'whiteSpace': 'break-spaces' }}>{JSON.stringify(data[0], null, 4)}</code>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer