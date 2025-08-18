import Banner from "../../components/Banner";
import PopularCategory from "../popular-Category/PopularCategory";


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner />
            <PopularCategory />
        </div>
    );
};

export default Home;