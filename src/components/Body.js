import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

    const listOfRestaurants = [{
        info: {
            id: "70469",
            name: "Hotel Prabha Veg Restaurant",
            cuisines: ["Biryani","Chinese","South Indian","Tandoor","Lebanese"],
            cloudinaryImageId: "gtvtfctgsvoopjgg4xkb",
            avgRating: "4.7",
            deliveryTime: "35"
        }
    }];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() =>{
                    console.log("Button Clicked");
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container"> 
                {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;