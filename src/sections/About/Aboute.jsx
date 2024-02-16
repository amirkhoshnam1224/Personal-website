import React from 'react'
import './about.css'
import about from './about/about.jpg'
import SimpleSlider from '../../components/slick/SimpleSlider'


export default function Aboute() {
    return (
        <>
            <div className='bg-width w-12/12 h-2/4 flex justify-center '>
                <div className='w-10/12  bg-green-500 mt-8 flex flex-col  md:flex-row-reverse  '>

                    <div className="w-12/12 md:w-5/12 md:mr-8">
                        <img src={about}></img>
                    </div>

                    <div className="items w-12/12 md:w-5/12 md:mr-12">
                        <h1>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit.
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                    </div>

                </div>


            </div>
            <div className=' w-10/12  dasca'>
                <div>
                <SimpleSlider />
                </div>

            </div>

        </>
    )
}

