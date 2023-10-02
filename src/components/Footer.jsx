import React from 'react'
import { AiFillGithub,AiFillInstagram,AiFillYoutube,AiOutlineArrowUp } from "react-icons/ai";
// import founder from '../assets/founder.jpg'
import logo from '../images/final.png'


const Footer = () => {
  return (
   <footer>
    <div>
        <img style={{width:'70px', display:'flex', justifyContent:'center'}} className='mx-auto' src={logo} alt="Founder" />
        <h2>DEPARTMENT OF LAW AND JUSTICE</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
    </div>
    
   </footer>
  )
}

export default Footer
