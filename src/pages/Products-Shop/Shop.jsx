import useProduct from "../../hook/useProduct";
import Cover from "../../Shared/Cover/Cover";
import pic1 from"../../assets/oure menu page/Our-order.avif"
import pic2 from"../../assets/oure menu page/Fashion.avif"
import pic3 from"../../assets/oure menu page/Jewelry.webp"
import pic4 from"../../assets/oure menu page/Home & Kitchen.jpg"
import pic5 from"../../assets/oure menu page/Beauty & Personal Care.jpg"
import pic6 from"../../assets/oure menu page/Sports & Outdoors.webp"
import pic7 from"../../assets/oure menu page/Books & Stationery.avif"
import pic8 from"../../assets/oure menu page/Toys & Games.webp"
import pic9 from"../../assets/oure menu page/Health & Wellness.jpg"
import pic10 from"../../assets/oure menu page/Groceries.jpg"
import pic11 from"../../assets/oure menu page/Beauty & Personal Care-1.jpg"
import SectionlTitle from "../Share/SectionTitle";
import ShopCategory from "./ShopCategory";


const Shop = () => {

    const [product] = useProduct();

    const Electronics = product.filter(item => item.category ===  "Electronics")
    const popular = product.filter(item => item.category ===  "Popular")
    const Fashion = product.filter(item => item.category ===  "Fashion & Apparel")
    const Home = product.filter(item => item.category ===  "Home & Kitchen")
    const Beauty = product.filter(item => item.category ===  "Beauty & Personal Care")
    const Sports = product.filter(item => item.category ===  "Sports & Outdoors")
    const Books = product.filter(item => item.category ===  "Books & Stationery")
    const Toys = product.filter(item => item.category ===  "Toys & Games")
    const Health = product.filter(item => item.category ===  "Health & Wellness")
    const Automotive = product.filter(item => item.category ===  "Automotive")
    const Groceries = product.filter(item => item.category ===  "Groceries")


    return (
        <div>
            <Cover title="Oure Products" description="Proactively utilize impactful functionalities whereas vertical e-tailers. Authoritatively plagiarize quality vortals before 24/365 human capital. Conveniently be" img={pic1}   />

            <SectionlTitle heading="TODAY'S OFFER" subHeading="Don't miss" /> 

            {/* Popular item */}
            <ShopCategory items={popular} />

            {/*  */}
            <ShopCategory items={Electronics} title="Electronics" coverImg={pic1} />
            {/*  */}
            <ShopCategory items={Fashion} title="Fashion & Apparel" coverImg={pic2} />
            {/*  */}
            <ShopCategory items={Home} title="Home & Kitchen" coverImg={pic4} />
            {/*  */}
            <ShopCategory items={Beauty} title="Beauty & Personal Care" coverImg={pic5} />
            {/*  */}
            <ShopCategory items={Sports} title= "Sports & Outdoors" coverImg={pic6} />
            {/*  */}
            <ShopCategory items={Books} title= "Books & Stationery" coverImg={pic7} />
            {/*  */}
            <ShopCategory items={Toys} title="Toys & Games" coverImg={pic8} />
            {/*  */}
            <ShopCategory items={Health} title= "Health & Wellness" coverImg={pic9} />
            {/*  */}
            <ShopCategory items={Automotive} title= "Automotive" coverImg={pic10} />
            {/*  */}
            <ShopCategory items={Groceries} title= "Groceries" coverImg={pic11} />

            
        </div>
    );
};

export default Shop;