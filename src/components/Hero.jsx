
const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>SHOP NOW</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
        <p>Also Avilable On</p>
        <div className="brand-icons">
           <img src="./images/flipkart.png" alt="Flikart"/>
           <img src="./images/amazon.png" alt="Amazon"/>
        </div>
      </div>
      
      </div>
      <div className="hero-image">
      <img src="./images/shoe_image.png" alt="Hero-Image"/>
      </div>
    </main>
  );
};

export default Hero;
