import React from 'react'

const Display = ({info}) => {
  return (
    <div className='display absolute top-40 left-8 sm:left-12 md:left-14 lg:ml-10 flex text-center flex-col bg-white mt-5 px-5 w-5/6 py-5 font-Rubik rounded-2xl md:flex-row align-center justify-between sm:py-11 sm:px-9 2xl:justify-around 2xl:ml-14'>
        <div className='md:text-left md:pr-5  '>
            <small className='text-gray-400 font-bold tracking-widest text-xs '>IP ADDRESS</small>
            <p className='font-bold text-xl'>{info.ipAddress}</p>
        </div>
        <span className='lg:border-r lg:border-gray-300'></span>
         <div className='mt-3 md:mt-0 md:text-left 2xl:mr-0'>
            <small className='text-gray-400 font-bold tracking-widest text-xs'>LOCATION</small>
            <p className='font-bold text-xl'>{`${info.location+" "+info.region+" "+info.postalCode}`}</p>
        </div>
        <span className='lg:border-r lg:border-gray-300'></span>
         <div className='mt-3 md:mt-0 md:text-left md:pr-5 2xl:mr-0'>
            <small className='text-gray-400 font-bold tracking-widest text-xs'>TIMEZONE</small>
            <p className='font-bold text-xl'>{info.timeZone}</p>
        </div>
        <span className='lg:border-r lg:border-gray-300'></span>
        <div className='my-2 md:mt-0 md:text-left md:pr-0 2xl:mr-0'>
            <small className='text-gray-400 font-bold tracking-widest text-xs'>ISP</small>
            <p className='font-bold text-xl'>{info.isp}</p>
        </div>
    </div>
  )
}
