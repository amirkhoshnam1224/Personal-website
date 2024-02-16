import React from 'react'
import features from './features.jpg'
import letter from './img/agreement-svgrepo-com.svg'
import cube from './img/cube-3d-svgrepo-com.svg'
import gallery from './img/gallery-wide-svgrepo-com.svg'
import security from './img/lock-protection-security-shield-protect-safe-svgrepo-com.svg'

export default function Features() {
    return (
        <div className='w-screen h-auto bg-black-500 flex justify-center mt-12'>
            <div className="w-10/12 h-2/4 gap-5 md:flex  ">

                <div className="w-full h-full	 ">
                    <img className="w-full  h-full" src={features}>
                    </img>
                </div>

                <div className="w-full h-full flex flex-col	justify-around	  ">

                    <div className="w-full  flex  ">

                        <div style={{ flex: "1" }} className=' h-full'>
                            <img className='w-2/4' src={letter}></img>
                        </div>

                        <div style={{ flex: "6" }} className=" h-full">
                            <h1>Est labore ad
                            </h1>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>

                    </div>
                    <div className="w-full   flex ">

                        <div style={{ flex: "1" }} className=' h-full'>
                            <img className='w-2/4' src={cube}></img>
                        </div>

                        <div style={{ flex: "6" }} className=" h-full">
                            <h1>Est labore ad
                            </h1>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                    </div>
                    <div className="w-full flex ">

                        <div style={{ flex: "1" }} className=' h-full'>
                            <img className='w-2/4' src={gallery}></img>
                        </div>

                        <div style={{ flex: "6" }} className=" h-full">
                            <h1>Est labore ad
                            </h1>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                    </div>
                    <div className="w-full  flex ">

                        <div style={{ flex: "1" }} className=' h-full'>
                            <img className='w-2/4' src={security}></img>
                        </div>

                        <div style={{ flex: "6" }} className=" h-full">
                            <h1>Est labore ad
                            </h1>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
