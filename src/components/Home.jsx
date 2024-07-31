import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Header from './header/Header';

function Home() {

    const auth = getAuth();
    const navigate = useNavigate();
    
    console.log(auth.currentUser);

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/signin");
          }).catch((error) => {
            // An error happened.
            console.log(error.code);
          });
    }

    const handleSignUp = () => {
        navigate("/signup");
    }

    const handleSignIn = () => {
        navigate("/signin");
    }

    
  return (
      <div>
        <Header />
        {/* <div className="header flex justify-between">
            <div class="p-6 md:flex " id="menu">
                <nav>
                <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                    <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Home</a></li>
                    <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Products</a></li>
                    <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">About</a></li>
                </ul>
                </nav>
            </div>
            
            <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                <div class="auth flex items-center w-full md:w-full">
                            {auth.currentUser ? (
                    <button onClick={handleLogOut} className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Log Out</button>
                ) : (
                    <>
                <button onClick={handleSignIn} class="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
                <button onClick={handleSignUp} class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>
                    </>
                    )}
                </div>
            </div>
        </div> */}
        <main>
      </main>
    </div>
  )
}

export default Home