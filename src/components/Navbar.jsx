import React from 'react'
import logo from '../images/final.png'
import logo2 from '../images/img3.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>

            <nav>


                <div className='left'>
                    <img src={logo} alt="logo" className='img' id='img1' />

                    <div className="heading">
                        <h2>PRE TRIAL SERVICES</h2>
                        <p>Districts and Taluka Courts of India</p>
                    </div>
                    <div className="logo">
                        <img src={logo2} alt="logo" className='img' id='img2' />
                    </div>
                </div>
                <div className='right'>

                    <ul>

                        <Link className='btn' to={"/"}>Home</Link>
                        <Link className='btn' to={"/caseDetails"}>Case Details</Link>
                        <Link className='btn' to={"/AddCase"} >Add Case</Link>
                        <div className="dropdown">
                            <button className="dropbtn">Court</button>
                            <div className="dropdown-content">
                                <Link className='btn' to={"/"}>District Courts</Link>
                                <Link className='btn' to={"/"}>High Court</Link>
                                <Link className='btn' to={"/"}>Supreme Court</Link>
                            
                            </div>
                        </div>
                        <Link className='btn' to={"/NJDG"}>NJDG</Link>
                    </ul>

                </div>
            </nav>

        </>
    )
}

export default Navbar
