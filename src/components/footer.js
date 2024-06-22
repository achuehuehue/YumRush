import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { addUserName, removeUserName } from "../utils/userNameSlice";

const Footer = () => {

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
        <div className="md:collapse sm:visible fixed w-[100%] h-[100px] bg-white bottom-0 flex items-center justify-evenly">
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
        </div>
    );
}

export default Footer;