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
            <Banner></Banner>
            <Chefs></Chefs>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;