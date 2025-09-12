import React, { createContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar/Navbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
 export const valueContext = createContext();
const Roots = () => {
    // const a = 10;
    const loveFun = ()=>{
        console.log("Love Function");
    }
    // For Sign Up 
    const handleSignUp  = (email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
    }
    const contextValues = {
        handleSignUp
    }
    return (
        <div>
            <Navbar></Navbar>
            <valueContext.Provider value={handleSignUp}>
                <Outlet></Outlet>
            </valueContext.Provider>
        </div>
    );
};
export default Roots;