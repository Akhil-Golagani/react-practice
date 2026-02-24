import { ChevronDownIcon } from "@heroicons/react/16/solid";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{

    //const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            <div className="w-1/2 shadow-lg bg-gray-100 p-6 m-auto mt-3 rounded-lg cursor-pointer" onClick={handleClick}>
                <div className="flex justify-between">
                    <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                    <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                </div>

                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;