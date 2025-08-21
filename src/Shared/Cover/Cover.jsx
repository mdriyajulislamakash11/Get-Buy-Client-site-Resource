

const Cover = ({ img, title, description }) => {
  return (
      <div
      className="hero bg-cover h-[600px] bg-fixed"
      style={{
        backgroundImage:
           `url('${img}')`,  
      }}
    >
      <div className="hero-overlay bg-opacity- "></div>
      <div className="hero-content text-neutral-content text-center border py-12  text-white bg-black bg-opacity-60">
        <div className="w-3/6 mx-auto">
          <h1 className="mb-5 text-5xl uppercase font-light">{title}</h1>
          <p className="mb-5 uppercase">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
