import Header from "./Header";
import {checkValidData} from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";

import {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {

  const [isSignInForm,setIsSignInForm]= useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  const navigate= useNavigate();
  const dispatch= useDispatch();

  const name= useRef(null);
  const email= useRef(null);
  const password= useRef(null);

const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
};


const handleButtonClick=()=>{
  //validate the form data
  const message=checkValidData(email.current.value,password.current.value);
  setErrorMessage(message);

  if(message) return;

  if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/D4D35AQFzBon0GqfvLg/profile-framedphoto-shrink_400_400/0/1645894009752?e=1704873600&v=beta&t=8YC6frOqbyJ9LORqS6DB1EhiKTnkNNcZF7Z3ztm0r7k"
    }).then(() => {
      const {uid,email,displayName,photoURL}=auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL})); 
      navigate("/browse");    
    }).catch((error) => {
      setErrorMessage(error.message);
    });
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage);
    
  });

  }
  else{

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("browse");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage);
  });

  }

};

  return (
    <div>
    <Header/>
    <div className="absolute">
    <img
     src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
    alt="logo"></img>
    </div>
    <form  onSubmit={(e)=>e.preventDefault()} className=" w-4/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
    <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
    {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-gray-700 opacity-75 rounded-lg"/>)}
     
      <input ref={email} type="text" placeholder="Email Address" className="p-4 my-2 w-full bg-gray-700 opacity-75 rounded-lg"/>
      <input ref={password} type="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-700 opacity-75 rounded-lg"/>
      <p className="text-red-500 font-bold p-2">{errorMessage}</p>
      <button className="p-4 my-4 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>

      <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign Up now.":"Already registered?Sign In Now."}</p>
    </form>
    </div>
  )
}

export default Login;
