import { useState, useEffect } from "react";
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordion from "./Accordion.js";
import ShimmerMenu from "./shimmerMenu.js";



const Menu=()=>{
   
    const {resId}=useParams();
    // console.log(resId);

    const resInfo=useRestaurantMenu(resId);
    console.log(resInfo)

    const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    console.log(categories)
    
    return (
        <div >
            
                {resInfo?
                
                    <div className="text-center">
                        <h1 className="font-bold text-2xl">Name of Restaurant : <span className="" >{resInfo?.data?.cards[2]?.card?.card?.info?.name}</span> </h1>
                        <h2 className=" text-2xl">Area : {resInfo?.data?.cards[2]?.card?.card?.info?.areaName}</h2>
                        <h2 className="text-2xl">Cuisines : {resInfo?.data?.cards[2]?.card?.card?.info?.cuisines.join(",")}</h2>
                        {categories?.map((category)=><Accordion data={category?.card?.card}/>)}
                    </div>
                 :
                    <div>
                        <ShimmerMenu></ShimmerMenu>
                    </div>
                 
                }
        </div>
    )
};
export default Menu;