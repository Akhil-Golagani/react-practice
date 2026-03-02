import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    //console.log(resData);

const { name, cuisines = [], avgRating, deliveryTime, cloudinaryImageId } = resData?.info || {};
  
  return (
        <div data-testid="resCard" className="m-4 p-4 w-48 h-60 bg-pink-100 rounded-lg hover:border-1 border-blue-500">
            <img alt="res-logo" className="w-40 h-24 rounded-lg" src={CDN_URL+cloudinaryImageId?.replace("Image preview","")}></img>
            <h3 className="font-bold py-1 text-blue-500">{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h6>{deliveryTime}</h6>
        </div>
    )
}

// Higher Order Component 

export const withVegLabel = (RestaurantCard) => {
   return (props)=>{
        return (
            <div test-id="resCard">
                <label className="absolute text-white bg-green-500 ml-4 w-auto p-1 rounded-lg">Vegetarian</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;