import React from 'react';
import { NavLink } from 'react-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/firebase.config';
const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log("User created:", result.user);
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
    };
    return (
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md bg-gray-200 mt-4">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                <p className="text-sm dark:text-gray-600">Sign Up to access your account</p>
            </div>
            <form onSubmit={handleSubmit} noValidate className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Joe Ward" 
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="leroy@jenkins.com" 
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" 
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm block mb-2">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="*****" 
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" 
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <button 
                        type="submit" 
                        className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                    >
                        Sign Up
                    </button>
                    <p className="px-6 text-sm text-center dark:text-gray-600">
                        Already Have an account?{" "}
                        <NavLink to="/signin" className="hover:underline dark:text-violet-600">
                            Sign In
                        </NavLink>
                    </p>
                </div>
            </form>
        </div>
    );
};
export default SignUp;
