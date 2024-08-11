import React from 'react'
import Header from './header/Header'
import { useState, useEffect } from 'react';

function MyProfile() {

  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
      const storedUser = localStorage.getItem('user');
      console.log(JSON.parse(storedUser));
      if (storedUser) {
          setUser(JSON.parse(storedUser));
      }

  }, []);

  if (!user) {
      return <p>Loading...</p>;
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        // Save the image to localStorage (optional)
        localStorage.setItem('profileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
     <>
        <Header />
        <div className='pt-24'>
            <div className="flex flex-col items-center p-6 bg-[#f1ebe7] min-h-screen">
              <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center mb-6">My Profile</h2>

                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 mb-4">
                    <img
                      src={profileImage || "https://via.placeholder.com/150"}
                      alt="Profile"
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <label className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded">
                    Change Profile Picture
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                </div>

                <div className="text-left mb-6">
                  <p className="text-lg"><strong>Name:</strong> {user.displayName || 'N/A'}</p>
                  <p className="text-lg"><strong>Email:</strong> {user.email}</p>
                </div>

                {/* Additional user information can go here */}
              </div>
            </div>
        </div>
     </>
  )
}

export default MyProfile