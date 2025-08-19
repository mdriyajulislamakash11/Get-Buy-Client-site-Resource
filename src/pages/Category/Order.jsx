import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import orderPage from "../../assets/oure menu page/Sports & Outdoors.webp";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useProduct from "../../hook/useProduct";
import OrderCard from "./OrderCard";

const Order = () => {
  const categories = [
    "Electronics",
    "Fashion",
    "Home",
    "Beauty",
    "Sports",
    "Books",
    "Toys",
    "Health",
    "Automotive",
    "Groceries",
  ];

  const initialIndex = 0;
  const [tabIndex, setTabIndex] = useState(initialIndex);

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

  console.log(Groceries)

  return (
    <>
      <Cover
        title="Our Products"
        description="Proactively utilize impactful functionalities whereas vertical e-tailers. Authoritatively plagiarize quality vortals before 24/365 human capital. Conveniently be"
        img={orderPage}
      />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex justify-center my-6">
          {categories.map((cat, i) => (
            <Tab key={i}>{cat}</Tab>
          ))}
        </TabList>

        <TabPanel>
          <OrderCard items={Electronics} />
        </TabPanel>
        <TabPanel>
          <OrderCard items={Fashion} />
        </TabPanel>
        <TabPanel>
          <OrderCard items={Home} />
        </TabPanel>
        
        <TabPanel>
          <OrderCard items={Beauty} />
        </TabPanel>
        
        <TabPanel>
          <OrderCard items={Sports} />
        </TabPanel>
        
        <TabPanel>
          <OrderCard items={Books} />
        </TabPanel>
        
        <TabPanel>
          <OrderCard items={Toys} />
        </TabPanel>
        
        <TabPanel>
          <OrderCard items={Health} />
        </TabPanel>

        <TabPanel>
          <OrderCard items={Automotive} />
        </TabPanel>
        <TabPanel>
          <OrderCard items={Groceries} />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Order;
