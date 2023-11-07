import React, { useState } from "react";
import { useParams } from 'react-router'
import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../Hooks/UseMenu";
import OrderTab from "./OrderTab";
import { Helmet } from "react-helmet-async";

const OrderFood = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks' ];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drink = menu.filter((item) => item.category === "drinks");

  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Order Food</title>
        </Helmet>
      <Cover img={orderImg} title={"order food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='my-8'>
        <TabList className='flex justify-center items-center gap-4 mb-5'>
          
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desert</Tab>
          <Tab>Drink</Tab>
        </TabList>

        <TabPanel>
            <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
                <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
                <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
                <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
                <OrderTab items={drink}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
