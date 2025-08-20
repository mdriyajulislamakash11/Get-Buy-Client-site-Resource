import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import orderPage from "../../assets/oure menu page/Sports & Outdoors.webp";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useProduct from "../../hook/useProduct";
import OrderCard from "./OrderCard";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = [
    "Electronics",
    "Fashion & Apparel",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Sports & Outdoors",
    "Books & Stationery",
    "Toys & Games",
    "Health & Wellness",
    "Automotive",
    "Groceries",
  ];

  // params থেকে category নেওয়া
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category); // space & special char ঠিক করতে
  console.log("Decoded Category:", decodedCategory);

  // category index বের করা
  const initialIndex = categories.indexOf(decodedCategory);
  const [tabIndex, setTabIndex] = useState(initialIndex === -1 ? 0 : initialIndex);

  // products load করা
  const [product] = useProduct();

  const Electronics = product.filter((item) => item.category === "Electronics");
  const Fashion = product.filter((item) => item.category === "Fashion & Apparel");
  const Home = product.filter((item) => item.category === "Home & Kitchen");
  const Beauty = product.filter((item) => item.category === "Beauty & Personal Care");
  const Sports = product.filter((item) => item.category === "Sports & Outdoors");
  const Books = product.filter((item) => item.category === "Books & Stationery");
  const Toys = product.filter((item) => item.category === "Toys & Games");
  const Health = product.filter((item) => item.category === "Health & Wellness");
  const Automotive = product.filter((item) => item.category === "Automotive");
  const Groceries = product.filter((item) => item.category === "Groceries");

  return (
    <>
      <Cover
        title="Our Products"
        description="Proactively utilize impactful functionalities whereas vertical e-tailers. Authoritatively plagiarize quality vortals before 24/365 human capital. Conveniently be"
        img={orderPage}
      />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        {/* Tabs list */}
        <TabList className="flex flex-wrap justify-center my-6 gap-2">
          {categories.map((cat, i) => (
            <Tab key={i}>{cat}</Tab>
          ))}
        </TabList>

        {/* Tab Panels */}
        <TabPanel><OrderCard items={Electronics} /></TabPanel>
        <TabPanel><OrderCard items={Fashion} /></TabPanel>
        <TabPanel><OrderCard items={Home} /></TabPanel>
        <TabPanel><OrderCard items={Beauty} /></TabPanel>
        <TabPanel><OrderCard items={Sports} /></TabPanel>
        <TabPanel><OrderCard items={Books} /></TabPanel>
        <TabPanel><OrderCard items={Toys} /></TabPanel>
        <TabPanel><OrderCard items={Health} /></TabPanel>
        <TabPanel><OrderCard items={Automotive} /></TabPanel>
        <TabPanel><OrderCard items={Groceries} /></TabPanel>
      </Tabs>
    </>
  );
};

export default Order;
