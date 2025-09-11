import React, { createContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar/Navbar';
 export const valueContext = createContext();
const Roots = () => {
    const a = 10;
    return (
        <div>
            <Navbar></Navbar>
            <valueContext.Provider value={a}>
                <Outlet></Outlet>
            </valueContext.Provider>

        </div>
    );
};

export default Roots;