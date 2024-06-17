import { useEffect, useState } from "react";
import menu from "../components/menuAPI.js";



const useRestaurantMenu=(resId)=>{
    // console.log(resId)
    const [resInfo,setResInfo]=useState([]);
    useEffect(()=>{
        fetchInfo();
   },[]);
   const fetchInfo=()=>{ 
    //    menu.filter((item)=>{console.log(item.id==resId)})
       setResInfo(menu.filter((item)=>{ return item.id==resId}));
      //  console.log(resInfo[0]);
    //    console.log(menu);
   }

   return resInfo[0];
}

export default useRestaurantMenu;