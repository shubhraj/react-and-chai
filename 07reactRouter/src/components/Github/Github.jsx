import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch('https://api.github.com/users/shubhraj')
    //   .then(response =>  response.json())
    //   .then(data => {
    //     setData(data);
    // });
    // }, [])
    
    const data = useLoaderData();
  return (
    <div className='bg-gray-600 text-white p-4 text-center m-4 text-3xl '>
     <label>Name : {data.name}</label>
    <img src={data.avatar_url} height={300} width={300}/> 
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
    const response = await  fetch('https://api.github.com/users/shubhraj');
    return response.json();
}