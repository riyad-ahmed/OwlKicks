import { Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Account from "./components/Account";
import MyProfile from "./components/MyProfile";
import Layout from "./Layout";

function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/MyProfile" element={<MyProfile/>} />
      </Routes>
    </Layout>
  );
}

export default App;
