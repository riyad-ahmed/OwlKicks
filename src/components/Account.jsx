import React from 'react'
import Header from './header/Header'
import Signin from './Signin'
import Signup from './Signup'

function Account() {
  return (
    <>
        <Header />
        <div className='flex justify-center gap-3 bg-[#f1ebe7] h-[100vh] py-24'>
            <Signin />
            <Signup />
        </div>
    </>
  )
}

export default Account