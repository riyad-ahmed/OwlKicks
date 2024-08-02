import React from 'react'

function MenuList() {
  return (
    <ul
    className='lg:!flex lg:ml-8 max-lg:w-full lg:space-x-4 max-lg:space-y-2 max-lg:my-4'>
    <li className='max-lg:border-b max-lg:py-2 px-3'><a href='add'
      className='text-[#FFA726] hover:text-[#FFA726] text-[15px] block font-semibold'>New</a></li>
    <li className='max-lg:border-b max-lg:py-2 px-3'><a href='add'
      className='text-black hover:text-[#FFA726] text-[15px] block font-semibold'>Men</a></li>
    <li className='max-lg:border-b max-lg:py-2 px-3'><a href='add'
      className='text-black hover:text-[#FFA726] text-[15px] block font-semibold'>Women</a></li>
    <li className='max-lg:border-b max-lg:py-2 px-3'><a href='add'
      className='text-black hover:text-[#FFA726] text-[15px] block font-semibold'>Kids</a></li>
    <li className='max-lg:border-b max-lg:py-2 px-3'><a href='add'
      className='text-black hover:text-[#FFA726] text-[15px] block font-semibold'>Shops</a></li>
  </ul>
  )
}

export default MenuList