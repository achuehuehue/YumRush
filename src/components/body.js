import RestaurantCard from "./restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import mockData from "./swiggyAPI";


const Body=()=>{
    const [listOfRestaurant, setlistOfRestaurant]=useState([]);
    const [searchText,setsearchText]=useState("");
    
    useEffect(()=>{
        fetchData();
       
    },[]);

    const fetchData=()=>{
        // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const json=await data.json();
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(mockData)
        setlistOfRestaurant(mockData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
        
        <div className="bg-orange-100 h-[100%] w-[100%]">
            <div className="m-4 flex justify-center w-[90%] mx-auto relative max-w-[800px]">
                <input type="text" className="px-2 mt-32 border border-solid border-gray-400 rounded-lg w-[100%] h-[40px]" value={searchText} 
                    onChange={(e)=>{
                    setsearchText(e.target.value);
                }}>
                </input>
                <button className="px-4 py-2 mt-32 transistion-colors duration-[300ms] bg-orange-400 text-white rounded-lg rounded-tl-none rounded-bl-none hover:opacity-85 absolute right-0"
                    onClick={()=>{
                    const filteredname=listOfRestaurant.filter((x)=>{
                    return x.info.name.includes(String(searchText));
                    })
                    setlistOfRestaurant(filteredname);
                 }}>Search</button>
            </div>
            <div className="w-[100%] flex justify-center mb-4">
            <button className="bg-green-300 transistion-colors duration-200 rounded-lg hover:bg-green-400 p-2" 
                    onClick={()=>{
                    const filteredList=listOfRestaurant.filter((x)=> x?.info?.avgRating>4.5
                    )
                    // console.log(filteredList)
                    setlistOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            
            {listOfRestaurant?.length?
                (<div className="flex flex-wrap justify-center items-center mb-[100px] md:mb-0 lg:mb-0">
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