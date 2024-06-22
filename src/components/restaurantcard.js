const RestaurantCard=(props)=>{
    const {resData}=props;
    return (
        <div className="m-4 p-4 w-[300px] h-[500px] shadow-lg bg-gray-100 hover:shadow-2xl hover:opacity-95 hover:bg-gray-200">
            <img className="rounded-xl w-[300px] h-[300px] object-cover" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData?.info?.cloudinaryImageId}></img>
            <h3 className="font-bold py-2">{resData?.info?.name}</h3>
            <h4>{resData?.info?.cuisines.join(", ")}</h4>
            <div className="flex items-center justify-center bg-green-500 font-bold text-white w-[35px] px-2 rounded-sm mb-[10px]">{resData?.info?.avgRating}</div>
            <h4>{resData?.info?.costForTwo}</h4>
            <h4>{resData?.info?.deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;