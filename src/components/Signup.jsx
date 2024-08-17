import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState({
    allError: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    passwordLength: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};

    if (!name && !email && !password) {
      errors.allError = 'All fields are required';
    }

    if (!name) {
      errors.name = 'Enter your name';
    }

    if (!email) {
      errors.email = 'Enter your email';
    }

    if (!password) {
      errors.password = 'Enter your password';
    } else if (password.length < 6) {
      errors.passwordLength = 'Password must be at least 6 characters long';
    }

    if (Object.keys(errors).length > 0) {
      setErr(errors);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          // Update the user's display name
          updateProfile(user, {
            displayName: name,
          })
            .then(() => {
              // Store user data with updated displayName and phone
              const userData = {
                ...user,
                phoneNumber: phone // Add phone number to user data
              };
              localStorage.setItem('user', JSON.stringify(userData));
              setErr({
                allError: '',
                name: '',
                email: '',
                phone: '',
                password: '',
                passwordLength: '',
              });
              navigate('/');
            })
            .catch((error) => {
              console.error('Error updating profile:', error);
            });
        })
        .catch((error) => {
          console.error(error.code);
          if (error.code === 'auth/email-already-in-use') {
            setErr({ email: 'Email already in use' });
          }
        });
    }
  };

  return (
    <>
      <div className="px-6 lg:px-8 w-[30rem]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">CREATE AN ACCOUNT</h2>
          <p className="py-2">We never save credit card information.</p>
          <p>Registering makes checkout fast and easy and saves your order information in your account.</p>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">NAME</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="string"
                  className="block w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
              {err.name && <p className="text-red-600 !mt-0">{err.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">EMAIL</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
              {err.email && <p className="text-red-600 !mt-0">{err.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">PHONE  (optional)</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">PASSWORD</label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
              {err.password && <p className="text-red-600 !mt-0">{err.password}</p>}
              {err.passwordLength && <p className="text-red-600 !mt-0">{err.passwordLength}</p>}
              {err.allError && <p className="text-red-600 !mt-0">{err.allError}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-5 py-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#f1ebe7] hover:text-black hover:border-2 hover:border-black"
              >
                REGISTRAR
              </button>
            </div>
          </form>
          <Link to="/signin" className="block mt-6 text-center text-sm text-gray-600 hover:text-gray-900">
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
