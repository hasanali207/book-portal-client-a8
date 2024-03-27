import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;