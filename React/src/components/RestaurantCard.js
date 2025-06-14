import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,

    avgRating,
    sla,
  } = resData.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-md hover:bg-gray-300">
      <img
        className="rounded-md w-56 h-56"
        src={CDN_URL + cloudinaryImageId}
        alt="res-image"
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard;
