import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'


const Display = () => {
    const dispRef=useRef();
    const loc=useLocation();
    const isAlbum=loc.pathname.includes("album");
    const albmid=isAlbum ? loc.pathname.slice(-1): "";
    const bg_color=albumsData[Number(albmid)].bgColor;

    useEffect(()=>{
       if (isAlbum){

        dispRef.current.style.background=`linear-gradient(${bg_color},#121212)`;

       } 
       else{
        dispRef.current.style.background=`#121212`;
       }
    })
  return (
    <div ref={dispRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path="/" element={<DisplayHome/>}></Route>
            <Route path="/album/:id" element={<DisplayAlbum/>}></Route>
        </Routes>
      
    </div>
  )
}

export default Display
