import React from 'react'
import { useNavigate } from 'react-router-dom'


const Album_item = (props) => {

    const navigate= useNavigate()

    return (
    <div  onClick={()=>navigate(`/album/${props.id}`)} className='min-w-[180px] px-3 rounded cursor-pointer hover:bg-[#ffffff26] ease-linear'>
      <img className='rounded' src={props.image} alt=""/>
      <p className='font-bold mt-2 mb-1'>{props.name}</p>
      <p className='font-slate-300 text-sm'>{props.desc}</p>
      
    </div>
  )
}

export default Album_item
