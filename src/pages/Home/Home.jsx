import Banner from "../../components/Banner";
import PickNShop from "../PickN-Shop/PickNShop";
import PopularCategory from "../popular-Category/PopularCategory";
import PopularProduct from "../Popular-Product/PopularProduct";


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner />
            <PopularCategory />
            <PickNShop />
            <PopularProduct />
        </div>
    );
};

export default Home;