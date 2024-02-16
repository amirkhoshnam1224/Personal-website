import React from 'react'
import './boxicon.css'


export default function BoxIcon(props) {
  return (
    <div className='w-4/5 h-96 md:w-80 mt-2			 				'>
    <div className='w-full h-full grid  items-center  box-card rounded-md  '>
        <div className="flex flex-col justify-center	  items-center ">
            <div className="bg-amber-300 w-16 h-16 flex justify-center items-center rounded-md	">
                <img className='w-12 h-12' src={props.boximg}  />
            </div>
            <br></br>
            <a className="text-xl md:text-3xl		">{props.boxtitle}</a>
            <br></br>
            <p className="text-center	">{props.boxinfo}</p>
        </div>
      
    </div>
    </div>
  )
}
