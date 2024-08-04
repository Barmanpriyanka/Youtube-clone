import React,{useState} from 'react'
import logo from "./logo.ico"
import "./Navbar.css"
import {Link} from "react-router-dom"
import {RiVideoAddLine} from "react-icons/ri"
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiUserCircle} from "react-icons/bi"


const Navbar = ({toggledrawer,seteditcreatechanelbtn}) => {
    const[authbtn,setauthbtn]=useState(false)
    const currentuser=null;
  return (
    <>
    <div className="Container_Navbar">
        <div className="Burger_Logo_Navbar">
            <div className="burger" onClick={()=>toggledrawer()}>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
        <Link to={"/"} className='logo_div_Navbar'>
        <img src={logo} alt=""/>
        <p className="logo_title_navbar">YouTube</p>
        </Link>
        
    </div>
    <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/>
    <div className="apps_Box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
    </div>
    <IoMdNotificationsOutline  size={22} className={"vid_bell_Navbar"}/>
    <div className="Auth_cont_Navbar">
        {currentuser ?(
            <>
            <div className="Chanel_logo_App" onClick={()=>setauthbtn}>
                {currentuser?.result.name?(
                    <>{currentuser?.result.name.charAt(0).toUpperCase}</>
                ):(
                    <>{currentuser?.result.email.charAt(0).toUpperCase}</>
                )}
            </div>
            </>
        ):(
            <><BiUserCircle size={22}/>
            <b>Sign in</b>
            </>
            
        )}
    </div>
    </>
  )
}

export default Navbar
