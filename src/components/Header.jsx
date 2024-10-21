import React from 'react'

export default function Header() {
  return (
      <div className='w-full h-15 bg-blue-100 flex justify-between items-center p-5'>
          <p className=' text-2xl font-bold'>
              Organ Donation Dashboard
          </p>
          <button className='bg-[#4D44B5] h-10 w-28 rounded-full text-white'> LogOut</button>
      </div>
  )
}
