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


type Props = {
  params: { slug: string };
}

export default function Login({params}: Props) {
  const { slug } = params;
  const [username, setusername] = useState(getCookie('username'))
  return ( 
    <div className='flex justify-center border border-black h-screen -m-4 items-center shadow-outline '>
      <div className="border border-red-50 items-center min-w-[1000px] h-5/6 bg-gray-100 rounded-md text-black">
               <h1> Welcome {username}</h1>
      </div>     
    </div>
  )
}