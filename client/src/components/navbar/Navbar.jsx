import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import Cookies from "universal-cookie";


  


const Navbar = () => {
  const { user } = useContext(AuthContext);
  // const cookies = new Cookies();
  // const token = cookies.get("TOKEN");
  const navigate = useNavigate()
  const { loading, error, dispatch } = useContext(AuthContext);

  const logout = () => {

    dispatch({ type: "LOGOUT" });
    try {
     
      // dispatch({ type: "LOGOUT", payload: res.data.user });
      navigate("/")
    } catch (err) {
      // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
    // destroy the cookie
    // cookies.remove("TOKEN", { path: "/" });
    // // redirect user to the landing page
    // window.location.href = "/";
  }

 
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">CleverDeals</span>
        </Link>
        {user ? (<div className="navItem">
          <button>{user.username}</button>
        <button className="navButton" onClick={() => logout()}>Logout</button>
        </div>) : (
          <div className="navItems">
            <button className="navButton"> <Link to='/Signup' >Register</Link> </button>
            <button className="navButton"><Link to='/Signin' >Login</Link></button>
          </div>
        )}
        {/* <div className="navItem">
        <button className="navButton">Logout</button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
