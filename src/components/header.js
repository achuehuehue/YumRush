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
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="w-[15%] p-4 m-4 bg-gradient-to-t from-red-300 flex justify-center items-center rounded-xl ">
                <h1 className="text-3xl font-bold text-red-700" >YumRush</h1>
            </div>
       
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4 cursor-pointer font-bold text-lg" >Online Status:{onlineStatus? <span className="text-green-700" >●</span> : <span className="text-red-700" >●</span> }</li>
                    <li className="px-4 cursor-pointer font-bold text-lg" ><Link to="/">Home</Link></li>
                    <li className="px-4 cursor-pointer font-bold text-lg" ><Link to="/About">About Us</Link></li>
                    <li className="px-4 cursor-pointer font-bold text-lg" ><Link to="/Contact" >Contact Us</Link></li>
                    <li className="px-4 cursor-pointer font-bold text-lg" ><Link to="/Cart">Cart ({cartItems.length} items)</Link></li>
                    {User?
                        <li className="px-4 cursor-pointer font-bold text-lg" >
                        <button className="bg-gray-300 px-4 rounded-lg"><Link to="/Login"  onClick={handleSignOut}>Sign Out</Link></button></li>
                    :
                        <li className="px-4 cursor-pointer font-bold text-lg" >
                        <button className="bg-gray-300 px-4 rounded-lg"><Link to="/Login">Sign In</Link></button></li>}
                <li>{userName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;