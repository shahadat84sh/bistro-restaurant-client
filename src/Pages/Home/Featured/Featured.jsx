import React from 'react';
import './featured.css'
import featured from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
            subHeading="check it out"
            Heading="from our menu"
            ></SectionTitle>
            <div className='flex justify-center items-center pb-20 pt-12 px-32 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>05, Aug, 2029</p>
                    <p className='uppercase'>Where can i get</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-3">View More </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;