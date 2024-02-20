import "../globals.css";
import { Josefin_Sans } from 'next/font/google'

import React from 'react'
const inter = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
  display: 'swap',
})


type Props = {
  params: { slug: string };
}

export default function Login({params}: Props) {
  return ( 
    <div className='flex justify-center border border-black h-screen -m-4 items-center shadow-outline '>
      <div className="border border-red-50 items-center min-w-[1000px] h-2/3 bg-gray-100 rounded-md">
             <div className={inter.className}>
                <div className="flex justify-center h-32 items-center">
                          <h1 className=" text-black text-4xl text-center justify-center pt-5 font-extrabold"> LOGIN</h1>
                </div>
                <div className="flex justify-center h-24 -m-5">
                          <h4 className=" text-2xl text-center justify-center text-gray-500 font-sans"> Welcome to GenTikXPert</h4>
                </div>       
              </div>
              <div className=" h-72 w-auto">
                    <h5 className="text-gray-800 px-28 font-bold">Username: </h5>
                    <div className="px-20 py-2 flex justify-center">
                      <input className="shadow appearance-none border rounded w-11/12 py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Example"/>
                    </div>
                    <h5 className="text-gray-800 px-28 font-bold pt-3">Password: </h5>
                    <div className="px-20 flex justify-center">
                      <input type="password" className="shadow appearance-none border rounded w-11/12 py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  placeholder="***********"/> 
                    </div>
                    <div className="h-6 flex py-2">
                        <h6 className="text-violet-500 hover:text-violet-900  px-32 text-xs cursor-pointer font-semibold">Forgot Password ?</h6>
                    </div>
                    <div className="py-6 flex justify-center">
                      <button className="border border-red-white px-[365px] py-2 bg-blue-500 rounded-md hover:bg-blue-600"> Login</button>
                    </div>
                    <div className="flex justify-center">
                        <h5 className="text-black">Didn't have account ?</h5>
                        <h5 className="text-violet-400 cursor-pointer font-bold"> &nbsp;sign up</h5>
                    </div>
              </div>
      </div>     
    </div>
  )
}