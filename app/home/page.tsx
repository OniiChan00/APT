import "../globals.css";
import React from 'react'

type Props = {
  x:any
}

export default function Home({x}: Props) {
  console.log(x)
  return ( 
    <div className='flex justify-center border border-black h-screen -m-4 items-center'>
      <div className="flex justify-center border border-red-50 items-center min-w-[1300px] h-2/3">

      </div>     
    </div>
  )
}