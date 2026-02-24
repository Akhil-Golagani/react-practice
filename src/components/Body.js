import RestaurantCard, {withVegLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const[filteredRestaurants, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardVeg = withVegLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]); 

    const fetchData = async () => {
        const data = await fetch(
            "https://namastedev.com/api/v1/listRestaurants"
        );

        const json = await data.json();

        const restaurants =
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        const withoutSpice = restaurants.filter(
            (res) => !res?.info?.name?.toLowerCase().includes("kingdom")
        );

        console.log(withoutSpice);

        setListOfRestaurants(withoutSpice);
        setFilteredRestaurant(withoutSpice);
    }

    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus);

    if(onlineStatus === false)
    {
        return(<h1>Looks like your internet is down.</h1>)    
    }

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className="search p-4 m-4">
                    <input type="text" placeholder="Enter restaurant name" className="border border-solid border-black shadow-lg rounded-lg h-10" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="m-2 p-2 bg-blue-300 rounded-lg" onClick={()=>{

                         //if (!searchText.trim()) return;

                            console.log(searchText);
                            console.log(listOfRestaurants);

                            const filteredRestaurants = listOfRestaurants.filter(
                                (res)=>res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(filteredRestaurants);
                        }
                    }>Search</button>
                </div>
                <div className="search p-4 m-4 flex items-center">
                    <button className="px-4 py-2 bg-blue-300 rounded-lg" 
                    onClick={() =>{
                        console.log("Button Clicked");
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setFilteredRestaurant(filteredList);
                    }}
                    >Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap w-auto"> 
                {filteredRestaurants.map((restaurant) => (
                    <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                        {restaurant.info.veg ? (<RestaurantCardVeg resData={restaurant}/> )
                        : (<RestaurantCard resData={restaurant}/>)}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;