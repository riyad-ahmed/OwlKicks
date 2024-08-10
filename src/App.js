import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Account from "./components/Account";
import MyProfile from "./components/MyProfile";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/account" element={<Account />} />
      <Route path="/MyProfile" element={<MyProfile/>} />
    </Routes>
    </>
  );
}

export default App;
