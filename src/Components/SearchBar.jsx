import React, { useEffect } from 'react';
import {arrow} from "../assets";
const SearchBar = ({ info, setinfo }) => {
  const apiKey = 'at_QGtWF3HVdBHln19VCJRMpgky82cfB'
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${info.ipAddress}`;

const fetchIpinfo=()=>{
  const fetchData = async () => {
    const res = await fetch(url);
    const json = await res.json();
     setinfo((prevInfo) => ({
      ...prevInfo,
      ipAddress: prevInfo.ipAddress === '' ? json.ip : prevInfo.ipAddress,
      location: json.location.city,
      timeZone: json.location.timezone,
      isp: json.isp,
      lat: json.location.lat,
      long: json.location.lng,
      region: json.location.region,
      postalCode: json.location.postalCode
    }));
  };
  
  fetchData()

  
}
  useEffect(() => {
   fetchIpinfo()
  }, []);

  const handleChange = (e) => {
    setinfo({ ...info, ipAddress: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchIpinfo()
  };

  return (
    <div className='mb-5 w-full '>
      <form onSubmit={handleSubmit} className='flex justify-center mx-10'>
        <input
          type="text"
          value={info.ipAddress}
          onChange={handleChange}
          placeholder="Enter IP address"
          className='searchBar px-3 py-2 border-none font-Rubik rounded-l-xl w-full sm:w-1/2 '
        />
        
        <button type="submit" className="bg-black rounded-r-xl relative w-12 h-14">
        <img src={arrow} className='absolute right-4 top-6 ' alt="search indicator" />
        </button>
        
      </form>
    </div>
  );
};

export default SearchBar;