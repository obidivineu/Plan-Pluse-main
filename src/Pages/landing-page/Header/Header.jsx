import React from 'react';
import logo from "../../../assets/gymlogo.png"
import "./Header.css"
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const nav = useNavigate()


  return (

    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="headertext">
        <p className="home">HOME</p>
        <p>ABOUT</p>
        <p>FEATURES</p>
        <p>PRICING</p>
        <p>SERVICE</p>
      </div>
      <div className="started">
        <button className="get" onClick={()=>{
          nav('/user-login')
        }}>LOGIN</button>
      </div>
    </div>

  );
}

export default Header;
