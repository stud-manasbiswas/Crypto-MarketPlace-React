import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo.png'
import arrow_icon from '../../assets/assets/arrow_icon.png'
import { CoinContext } from '../../Context/CoinContext'
import { Link } from 'react-router-dom'

function Navbar() {
  const {setCurrency} =useContext(CoinContext)

  const currencyHandler = (event)=>{
    switch (event.target.value){
      case "usd":{
        setCurrency({name:"usd",Symbol:"$"})
        break
      }
      case "eur":{
        setCurrency({name:"eur",Symbol:"€"})
        break
      }
      case "inr":{
        setCurrency({name:"inr",Symbol:"₹"})
        break
      }
        default:{
        setCurrency({name:"usd",Symbol:"$"})
        break
      }
      
    }

  }

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} alt="" className='logo' />
      </Link>
        <ul>
           <Link to={'/'}><li>Home</li></Link> 
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign Up  <img src={arrow_icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar
