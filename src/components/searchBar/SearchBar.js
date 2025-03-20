"use client"

import React from 'react'
import styles from "./searchBar.module.css"
import { fetchData } from '@/utils/fetchData'
import { useState } from 'react'
import { fetchName } from '@/utils/fetchData'
import Image from 'next/image'


const SearchBar = () => {

const [ userKeyword, setUserKeyword ] = useState('')     
const [result, setResult] = useState([])
const [Loading, setLoading  ]= useState (false)


const handleSearch = async (e) => {
   e.preventDefault(); 
   const data = await fetchData(userKeyword)
   setLoading(true)

  //  console.log(data)

   setResult(data.result.timeline.instructions); 
   setLoading(false)
  }
  console.log(result) 


  const handleActive= async (e) =>{
    e.preventDefault();
    fetchName();

    // setResult(data.result.timeline.instructions)
  }
  //  console.log(result)

  return (
    <div>   
    <form onSubmit={handleSearch}>
        <input type="text" placeholder='Search post'
         value={userKeyword}     
            className='bg-transparent'
            onChange={(e) => setUserKeyword(e.target.value)}       
            />
    </form>

    Loading ? <p>Loading data </p>
    {result.map((item, index) => (
        <div key={index}>
          {item.entries?.map((entry, entryIndex) => (
            <div key={entryIndex}>
              {entry.content?.items?.map((eachItem, itemIndex) => (
                <h1 key={itemIndex} className='text-white'>

                {eachItem?.item?.itemContent?.user_results?.result?.legacy?.location || "No Location"}
                {eachItem?.item.itemContent?.user_results?.result?.legacy?.followers_count || "No follow"}
                {eachItem?.item.itemContent?.user_result?.result?.legacy?.name || "No Name"}
                {/* <Image src={eachItem?.item?.itemContent.user_result?.result?.legacy?.
                profile_banner_url} height={20 alt= 'profile image'/> */}
                
                
                </h1>
              ))}
            </div>
          ))}
        </div>
      ))}   

      <h1>Hannah</h1> 

      <button onClick={handleActive}>Search Product</button>



      
        

    </div>
  )
}

export default SearchBar 



// QueenEsther@2025  

// result(object) - timeline(object) - instructions(array) - 0(object) - entries(array) - 0(object) - content(object) - items(array) - 0(object) - item(object) - itemContent(object) - user_result(object) - result(object) - legacy(object)

// location, profile_banner_url, followers_count, name, screen_name

const person = {
  name: "knidje",
  age: 20
}



