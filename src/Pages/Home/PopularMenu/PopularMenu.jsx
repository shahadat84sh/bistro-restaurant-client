import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { postcss } from 'autoprefixer';
import ItemCard from './ItemCard';
import UseMenu from '../../../Hooks/UseMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    const [menu] = UseMenu();
    const populars = menu.filter(popular => popular.category === 'popular')
    // const [menu, setMenu] = useState([])

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(item => item.category === "popular")
    //         setMenu(popularItems)
    //     } )
    // }, [])

    return (
        <section className='max-w-6xl mx-auto mb-8'>
            <SectionTitle
            subHeading="Check it out"
            Heading="from our menu"
            ></SectionTitle>
           <div className='grid md:grid-cols-2 gap-8'>
            {
                populars.map(item => <ItemCard
                key={item._id}
                item={item}
                ></ItemCard>)
            }
           </div>
          <div className='flex justify-center items-center mt-5'>
                <Link to='/order'><button className='capitalize'>View full menu</button></Link>
          </div>
        </section>
    );
};

export default PopularMenu;