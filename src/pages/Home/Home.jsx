import Banner from "../../components/Banner";
import FutureProduct from "../Future-Product/FutureProduct";
import PickNShop from "../PickN-Shop/PickNShop";
import PopularCategory from "../popular-Category/PopularCategory";
import PopularProduct from "../Popular-Product/PopularProduct";
import ShoudTry from "../ShoudTry/ShoudTry";


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner />
            <PopularCategory />
            <PickNShop />
            <PopularProduct />
            <ShoudTry />
            <FutureProduct />
        </div>
    );
};

export default Home;