import RestaurantCard from "./restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body=()=>{
    const [listOfRestaurant, setlistOfRestaurant]=useState([]);
    const [searchText,setsearchText]=useState("");
    
    useEffect(()=>{
        fetchData();
       
    },[]);

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   
    const onlineStatus=useOnlineStatus();
    if(!onlineStatus){
        return (
            <h1>Looks like you're offline.Please check your internet connection!!! </h1>
        )
       
    }
    // console.log(listOfRestaurant)
    
    // if(listOfRestaurant.length===0){
    //     return <Shimmer></Shimmer>
    // }

    return (
        
        <div className="">
            <div className="m-4 p-4 ">
                <input type="text" className="px-2 border border-solid border-black rounded" value={searchText} 
                    onChange={(e)=>{
                    setsearchText(e.target.value);
                }}>
                </input>
                <button className="px-4 py-2 bg-green-200 rounded m-4 hover:opacity-40"
                    onClick={()=>{
                    const filteredname=listOfRestaurant.filter((x)=>{
                    return x.info.name.includes(String(searchText));
                    })
                    setlistOfRestaurant(filteredname);
                 }}>Search</button>
                
                <button className="bg-gray-300 rounded-lg hover:opacity-55 p-4 m-4" 
                    onClick={()=>{
                    const filteredList=listOfRestaurant.filter((x)=> x?.info?.avgRating>4.0
                    )
                    // console.log(filteredList)
                    setlistOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            {listOfRestaurant?.length?
                (<div className="flex flex-wrap justify-center items-center">
                {listOfRestaurant?.map((restaurant)=>(
                <Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id} >
                    <RestaurantCard resData={restaurant}></RestaurantCard>
                </Link>
                ))}
                </div>) :
                <Shimmer></Shimmer>}
        </div>
    )
}

export default Body;