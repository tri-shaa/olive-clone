import "../styles/hero.css";
import phone from "../assets/phnbg.png";

function Hero() {
  return (
    <div className="hero">
        <div className="trusted">
            <div className="avatars">
                <img src="https://i.pravatar.cc/40?img=1" alt="" />
                <img src="https://i.pravatar.cc/40?img=2" alt="" />
                <img src="https://i.pravatar.cc/40?img=3" alt="" />
                <img src="https://i.pravatar.cc/40?img=4" alt="" />
            </div>
            <span>Trusted by thousands of healthy families</span>
        </div>
      
      <div className="hero-content">
        <h1>
          The Safest Way to <br /> Shop for Groceries
        </h1>

        <p>
          Use the Olive Food Scanner App to Instantly 
          Eliminate Harmful Ingredients from Your Family's Diet and Get
          Expert-Backed Food Insights
        </p>

        <div className="hero-buttons">
          <button className="btn">Download for iOS</button>
          <span className="link">Join the Olive Community →</span>
        </div>

        <div className="phone">
            <img src={phone} alt="phone"></img>
        </div>
  </div>
  </div>
  );
}

export default Hero;