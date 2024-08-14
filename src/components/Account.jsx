import React from 'react'
import Header from './header/Header'
import Signup from './Signup'
import MyProfile from './MyProfile'

function Account() {
  return (
    <>
        <Header />
        <div className='flex justify-center bg-[#f1ebe7] h-[100vh] py-32'>
            <Signup />
        </div>
    </>
  )
}

export default Account