import { useState } from "react";
import coverOrderImg from "../../../assets/assets/shop/banner2.jpg";
import Cover from "../../Share/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "dessert");
  return (
    <div>
        <Helmet>
        <title>Bistro | Order
        </title>
      </Helmet>
      <Cover img={coverOrderImg} title={"order food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA </Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERT</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
