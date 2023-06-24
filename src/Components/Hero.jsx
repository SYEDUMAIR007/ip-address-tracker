import React,{ useState } from 'react'
import SearchBar from './SearchBar'
import Display from './Display'
import Map from './Map'
const Hero = () => {
  const[info,setinfo]=useState({
    ipAddress:"",
    location:"",
    timeZone:"",
    isp:"",
    lat:"",
    long:"",
    region:"",
    postalCode:""
});
  return (
  <div>
    <div className="background flex items-center flex-col">
        <h1 className='my-9 text-white font-semibold text-2xl'>IP Address Tracker</h1>
        <SearchBar info={info}
                    setinfo={setinfo}/>
    </div>
    <div>
      <Display info={info}/>
      <Map info={info}/>
      </div>
    </div>
  )
}

export default Hero