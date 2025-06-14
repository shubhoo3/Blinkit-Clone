import React from 'react'
import notFoundImage from '../assets/nothing here yet.webp'
const NotFound = () => {
  return (
      <div className='flex flex-col items-center justify-center p-4 gap-2'>
          <img
              src={notFoundImage}
              alt='no data'
              className='w-36'
          />
          <p className='text-neutral-500'>No Data</p>
      </div>
  )
}

export default NotFound
