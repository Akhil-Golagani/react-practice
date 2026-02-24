import {CDN_URL} from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    const {resData} = props;
    console.log(resData);

    const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId } = resData.info;
    return (
        <div className="res-card" style={styleCard}>
            <img alt="res-logo" className="img-logo" src={CDN_URL+cloudinaryImageId.replace("Image preview","")}></img>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h6>{deliveryTime}</h6>
        </div>
    )
}

export default RestaurantCard;