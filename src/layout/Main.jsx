import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Banner from '../pages/Home/Banner/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <div>
                <Banner></Banner>
                <Chefs></Chefs>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;