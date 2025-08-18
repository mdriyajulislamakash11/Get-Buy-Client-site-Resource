import pic2 from "../../assets/category-pic/pic3.jpg";

const PickNShop = () => {
  return (
    <div
      className="bg h-64 md:h-[400px] w-full flex justify-center items-center bg-fixed"
      style={{
        backgroundImage: `url(${pic2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


      <div className=" text-center w-3/6 mx-auto p-16 rounded text-white bg-black bg-opacity-40">
            <h2 className="text-4xl mb-6">PickN Shop</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laboriosam animi veritatis, impedit ipsum vero sunt cum aliquid labore id nemo quae, aperiam perferendis! Voluptates placeat quaerat nisi sed earum!</p>
      </div>


    </div>
  );
};

export default PickNShop;
