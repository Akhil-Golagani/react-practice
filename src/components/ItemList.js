import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {

    return (
        <div>
            {items.map((item)=> (
                <div key={item.card.info.id} className="m-2 p-2 border-b-2 border-gray-200 text-left flex">
                    
                        <img src={CDN_URL+item.card.info.imageId} className="w-26"></img>
                        <div className="m-2">
                            <div className="py-2">
                                <span>{item.card.info.name}</span><br></br>
                                <span>₹{item.card.info.price/100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;