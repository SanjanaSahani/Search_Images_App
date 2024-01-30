import React from 'react'

 const Header = ({ children }) => {
  return (
    <>
      <div className='bg-gray-900 flex text-center py-10'>
        <div className='max-w-md mx-auto w-full'>
          <h1 className='text-white txt-centre text-4xl font-bold mb-5'> Find Images</h1>
          {children}
        </div>
      </div>
    </>
  )
}

export default Header