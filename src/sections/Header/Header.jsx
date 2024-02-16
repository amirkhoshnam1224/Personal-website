import React from 'react'
import './header.css'
import Navbar from '../../components/component-nav/Navbar'
import logo from './apartment-building-svgrepo-com.svg'

export default function Header() {
    return (
        <div className=''>
            <div className="Navbar">
            <Navbar/>
            </div>
            <div className='header h-screen flex justify-center'>
                <div className='header-articel  w-8/12  flex flex-col '>

                    <div className="header-articel-item1 w-12/12 flex justify-center ">
                        <div>
                            <h1>Powerful Digital<br></br> Solutions With Gp.</h1>
                            <p>We are team of talented digital marketers</p>
                        </div>
                    </div>

                    <div className="header-articel-item2 w-12/12 flex flex-wrap	md:flex flex-row">

                        <div className="item">
                            <div className='item-in'>
                            <img className='img' src={logo}></img>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className='item-in'>
                            <img className='img' src={logo}></img>
                                <p>dolor Sitema</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className='item-in'>
                            <img className='img' src={logo}></img>
                                <p>Sedare Perspiciatis</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className='item-in'>
                            <img className='img' src={logo}></img>
                                <p>Magin Dolores</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className='item-in'>
                                <img className='img' src={logo}></img>
                                
                                <p>Nemos Enimade</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}





