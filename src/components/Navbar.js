import "../styles/navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
       <div className="nav-left">
        <img src={logo} alt="Olive logo" className="logo" />

      <div className="nav-links">
        <span>Solutions ▾</span>
        <span>Features</span>
        <span>Pricing</span>
        <span>Blog ▾</span>
        <span>Restaurants</span>
        <span>Food ▾</span>
      </div>
      </div>

      <div className="nav-right">
        <span>Sign in</span>
        <button className="btn">Get Olive ➝</button>
      </div>
    </div>
  );
}

export default Navbar;