import "./navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo"><h1>HotelQuest</h1></span>
        <div className="navItems">
          <Link to="/login">  <button className="navButton">Login</button></Link>
          <Link to="/register"><button className="navButton">Register</button></Link>
        
          
        </div>
      </div>
    </div>
  )
}

export default Navbar