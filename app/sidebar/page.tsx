"use client"

import "../globals.css";
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { RiLoginBoxLine , RiVoiceprintFill} from "react-icons/ri";
import Home from "../home/page";

type Props = {}

export default function Sidebar({ }: Props) {
    const [ToggleCollapse, setToggleCollapse] = useState(false)
    const [pages, setPage] = useState(1)
    const Menu = [
        {
            index: 1,
            title: "Home",
            link : "/home/"
        },
        {
            index: 2,
            title: "Generate video",
            link : "/home/"
        },
        {
            index:3,
            title:"login/Register",
            link : "/login/"
        }
    ]
    function aaaa(){
        console.log("click")
    }

    return (
        <div className={`flex h-screen ${ToggleCollapse ? "w-72" : "w-16"} px-4 pt-8 pb-4 bg-white justify-between flex-col shadow-2xl duration-300`}>
            <div className={`flex flex-col`}>
                <div className={`flex items-center justify-between relative`}>
                    <div className={`flex item-center pl-1 gap-4`}>
                        <AiOutlineAppstoreAdd className={`text-4xl text-indigo-500 ${ToggleCollapse && "rotate-[360deg]"} duration-1000`} />
                        <span className={`text-3xl font-mono ${!ToggleCollapse && "scale-0"} duration-200`}>GenTicXPert</span>
                    </div>
                    <div className={`${!ToggleCollapse ? "absolute" : "flex"} ${!ToggleCollapse ?"ml-10":"ml-5"}`}>
                        <BsArrowRightShort className={`text-2xl border border-indigo-800 hover:bg-gray-100 cursor-pointer rounded-full bg-white -right-2 top-3 ${ToggleCollapse && "rotate-180"} duration-500`} onClick={()=> {setToggleCollapse(!ToggleCollapse)}} />
                    </div>
                </div>
                <ul className='pt-2'>
                  {
                    Menu.map((menu) => (
                    <>
                    <Link  href={`${menu.link}`}>
                            <li key={menu.index} className='text-gray-800 text-1xl flex items-center gap-x-7 cursor-pointer p-2 hover:bg-indigo-200  '>
                                <span className='block float-left'>{menu.title === "login/Register" ? <RiLoginBoxLine className='text-xl'/>:menu.title === "Generate video" ? <RiVoiceprintFill className='text-xl'/> :<MdDashboard className='text-xl'/>}</span>
                                <span className={`rounded-md ${!ToggleCollapse && "scale-0"}`}>{menu.title}</span>    
                            </li>
                        </Link >
                    </>
                    ))
                  }
                </ul>
            </div>
                <div>
                    
                </div>
        </div>
    )
}
