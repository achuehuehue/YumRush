import { useEffect, useState } from "react";



const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchInfo();
   },[]);
   const fetchInfo= async()=>{
       const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
       const json=await data.json();
       setResInfo(json.data);
   }

   return resInfo;
}

export default useRestaurantMenu;