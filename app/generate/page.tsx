"use client";

import "../globals.css";
import { Josefin_Sans } from 'next/font/google'
import React, { useState } from 'react'
import axios from 'axios'
import { getCookie } from "cookies-next";
import { redirect } from "next/dist/server/api-utils";



const inter = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
  display: 'swap',
})




export default function Generate() {
  
  const instrunction =
  [
    {
        index: 1,
        title: 'เขียนสคริปต์รีวิวเครืองสำอาง',
    },
    {
        index: 2,
        title: "Storytelling(Sci-fi)",
    },
    {
        index: 3,
        title:"สคริปต์ Podcast (Sci-fi)",
    },
    {
      index: 4,
      title:'อื่นๆ',
  }
  ]
  const [SelectTopic, setSelectTopic] = useState('เขียนสคริปต์รีวิวเครืองสำอาง')
  const [Data, setData] = useState('')

  const Description = async () => {
    const response = await axios.post('http://13.210.146.132:8765/API/sample_data', {
    topic : SelectTopic
  })
  .then((response) => {
    const data = response.data.data
    console.log(data.output)
    setData(data.output)
  }).catch((error) => {
    console.log(error)
  }
  )
  }
  return ( 
    <div className='flex justify-center border border-black h-screen -m-4 items-center shadow-outline '>
      <div className="border border-red-50 items-center min-w-[1000px] h-5/6 bg-gray-100 rounded-md text-black">
               <div className="">
               <h1 className="text-center py-4 text-2xl font-bold"> Welcome To Generate Video by Generative AI </h1>
               </div>
               <div className=" m-2  h-5/6  justify-center items-center flex">
                  <div className=" h-5/6  w-1/4">
                            <h1 className="text-3 py-2 px-2 font-bold"> Instruction </h1>
                            <>
                            {instrunction.map((item) => (
                              <div className="border border-black m-1 p-1 cursor-pointer rounded-md " key={item.index}>
                                <h1 onClick={()=>{
                                  setSelectTopic(item.title)
                                }}> {item.title} </h1>
                              </div>
                            ))}
                            </>
                  </div>
                  <div className="h-5/6  w-8/12 mx-3">
                            <div className="flex-inline">
                                <input type="text" disabled className="border border-black  p-2 w-9/12 rounded-md" placeholder="Enter Header" value={SelectTopic}/>
                                <button className="m-1 p-2 w-1/5 rounded-md bg-indigo-500 text-white" onClick={Description}> Generate </button>
                                
                            </div>
                            <div className="py-2 text-center">
                             
                            </div>
                            <div className=" h-5/6">
                            <textarea value={Data} onChange={(e)=>{
                              setData(e.target.value)
                            }} className="border border-black p-2 w-full h-5/6 rounded-md" placeholder="Enter Description" style={{resize:"none"}}></textarea>
                            <div className="justify-between flex">
                            <button className="border  m-0 p-2 w-3/12 rounded-md bg-red-500 text-white"> Select Audio </button>
                            <button className="p-2 w-3/12 rounded-md justify-end bg-indigo-500 text-white"> Select Video </button>
                            </div>
                            </div>
                            
                            <div>
                          
                            </div>
                  </div>
               </div>

      </div>     
    </div>
  )
}