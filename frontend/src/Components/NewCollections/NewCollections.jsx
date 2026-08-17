import "./NewCollections.css"
import new_collection from '../Assets/new_collections'
import Item from "../Items/Item"
const NewCollections = () => {
  return (
    <div className="new_collections">
      <h1>New collections</h1>
      <hr />
      <div className="collections">
        <div className="collections_wrapper">
          {new_collection.map((item,i)=>{
                        return <Item className={item} key={i} id={item.id} name = {item.name} image={item.image} new_price = {item.new_price} old_price = {item.old_price}/>

        })}
        </div>
        
      </div>
    </div>
  )
}

export default NewCollections
