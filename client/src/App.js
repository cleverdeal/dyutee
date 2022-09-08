import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Property from "./pages/property/Property";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Signin from "./pages/login/SignIn";
import SignOtp from "./pages/login/SignOtp"
import Signup from "./pages/signup/Signup";
import BrokerForm from "./pages/broker/BrokerForm"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/property" element={<List/>}/>
        <Route path="/hotels/:id" element={<Property/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/SignOtp" element={<SignOtp/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/BrokerForm" element={<BrokerForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
