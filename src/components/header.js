import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { addUserName, removeUserName } from "../utils/userNameSlice";


const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userName=useSelector(store=>store.userName.username)
    const [User,setUser]=useState(false);
    const onlineStatus=useOnlineStatus();
    const cartItems=useSelector(store=>store.cart.items);
    // console.log(cartItems)
    // console.log({loggedInUser});

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              setUser(true);
              const {uid,email,displayName} = user;
              console.log(user);
              dispatch(addUser({uid:uid,email:email,displayName:displayName})); 
              navigate("/");
            //   console.log("signed in")
              dispatch(addUserName(email))
            } 
            else {
              // User is signed out
              setUser(false);
              dispatch(removeUser());  
              navigate("/"); 
              dispatch(removeUserName());
            }
          });
    },[]);



    return (
        <div className="flex items-center justify-between bg- shadow-lg h-24 fixed top-0 w-[100%] bg-white z-[1]">
            <div className="w-[160px] h-16 p-4 m-4 ml-[40px] bg-white flex justify-center items-center rounded-xl border-2 border-orange-500">
                <h1 className="text-3xl font-bold text-orange-500" >YumRush</h1>
            </div>
            <div className="w-[50px] h-[100%] flex-shrink-0"></div>
            <div className="lg:w-[750px] md:w-[600px] flex items-center justify-between lg:mr-[80px] md:mr-[40px] text-[18px] text-gray-700 cursor-pointer collapse md:visible">

                    <span className=""><Link to="/">Home</Link></span>
                    <span className=""><Link to="/About">About Us</Link></span>
                    <span className="relative">
                      <Link to="/Cart">
                        Cart
                      </Link>
                      <div className="absolute bg-orange-500 w-[20px] h-[20px] rounded-full text-white flex items-center justify-center text-sm right-[-15px] top-[-8px]">
                        {cartItems.length}
                      </div>
                    </span> 
                    <span className="">{onlineStatus? <span className="text-green-700" >Online ●</span> : <span className="text-red-700" >Offline ●</span> }</span>
                    {User?
                        <span className="">
                        <button className="px-4 py-2 bg-gray-300 rounded-lg transition-colors duration-[100ms] hover:bg-gray-200 text-[16px]"><Link to="/Login"  onClick={handleSignOut}>Sign Out</Link></button></span>
                    :
                        <span className="">
                        <button className="px-4 py-2 bg-gray-300 rounded-lg transition-colors duration-[100ms] hover:bg-gray-200 text-[16px]"><Link to="/Login">Sign In</Link></button></span>}
                    {/* <li className="hidden md:inline-block md:px-4 md:cursor-pointer">{userName}</li> */}
                
            </div>
        </div>
    )
}

export default Header;