import React from 'react';
import { Helmet } from "react-helmet-async";
import menuBg from '../../../../src/assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import UseMenu from '../../../Hooks/UseMenu';
import MenuCategory from './MenuCategory';
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Menu = ({itmes, coverImg, title}) => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuBg} title={'Our Menu'}></Cover>
            <SectionTitle subHeading={"Don't Miss"} Heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} img={dessertImg} title={"dessert"}></MenuCategory>
            <MenuCategory items={pizza} img={pizzaImg} title={"Pizza"}></MenuCategory>
            <MenuCategory items={salad} img={saladImg} title={"salad"}></MenuCategory>
            <MenuCategory items={soup} img={soupImg} title={"soup"}></MenuCategory>
        </div>
    );
};

export default Menu;