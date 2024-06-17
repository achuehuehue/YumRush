import React, { useRef, useState } from 'react'
import { CheckValidation } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Login = () => {
    const[isSignIn,setIsSignIn]=useState(true);
    const email=useRef(null);
    const name=useRef(null);
    const password=useRef(null);
    const[errorMessage,setErrorMessage]=useState(null);
    const handleSignIn=()=>{
        // console.log(email.current.value)
        const message=CheckValidation(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message!=null){
            //invalid 
            return;
        }
        if(!isSignIn){
            //sign up
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
         })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("No Such Email ID exists")
        // ..
        });

        }
        else{
            //sign in
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                 // ...
                })
             .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage("No Such User exists");
            });
        }
    }
    
        
    
    const toggleSignInForm=()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div className='flex justify-center  my-[7%]'>
        {isSignIn?
            <form onSubmit={(e)=>e.preventDefault()} className='w-1/2 p-12 bg-black rounded bg-opacity-80' >
                <h1 className='text-white p-2 m-2 text-2xl'>Sign In</h1>
                <input type="text" ref={email} placeholder="Email Address" className=' w-full p-2 m-2 bg-gray-700 text-white' ></input>
                <input type="password" ref={password} placeholder="Password" className='w-full p-2 m-2 bg-gray-700 text-white' ></input>
                <p className='text-white p-2 m-2'>{errorMessage}</p>
                <button className='bg-white rounded hover:opacity-40 p-2 m-2' onClick={handleSignIn}>Sign In</button>
                <p className='text-white p-2 m-2'>New to YumRush? <span className='underline cursor-pointer' onClick={toggleSignInForm}>
                    {isSignIn?
                        "Sign Up"
                        :
                        "Sign In"}
                    </span> now!!</p>
            </form>
        :
            <form onSubmit={(e)=>e.preventDefault()} className='w-1/2 p-12 bg-black rounded bg-opacity-80' >
                <h1 className='text-white p-2 m-2 text-2xl'>Sign Up</h1>
                <input type="text" placeholder="Full Name" ref={name} className=' w-full p-2 m-2 bg-gray-700 text-white' ></input>
                <input type="text" ref={email} placeholder="Email Address" className=' w-full p-2 m-2 bg-gray-700 text-white' ></input>
                <input type="password" ref={password} placeholder="Password" className='w-full p-2 m-2 bg-gray-700 text-white' ></input>
                <p className='text-white p-2 m-2'>{errorMessage}</p>
                <button className='bg-white rounded hover:opacity-40 p-2 m-2' onClick={handleSignIn}>Sign Up</button>
                <p className='text-white p-2 m-2'>New to YumRush? <span className='underline cursor-pointer' onClick={toggleSignInForm}>
                    {isSignIn?
                        "Sign Up"
                        :
                        "Sign In"}
                    </span> now!!</p>
            </form>
            
        }
        
    </div>
  )
}

export default Login;