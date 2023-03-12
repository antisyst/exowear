import React from 'react'
import './navigation.styles.scss'
import { Link } from "react-router-dom";
import ImportLogo from '../../icons/import-logo';
import '../../global.scss';
import { BiShoppingBag } from 'react-icons/bi';



export default function Navigation() {
  return (
    <>
    <div className='sale-shop-warning-content-top-navigation' id='back-black'>
      <p className='text-center font-poppins user-s-no font-weight-bold' id='black'>25% discount on Sweatshirts and Sneakers continues ⚡</p>
    </div>
    <div className='top-bar-navigation-component-prototype box-shadow-third'>
      <div className='dropdown top-bar-navigation-component-prototype_item'>
          <button className="dropbtn font-outfit-extrabold user-s-no" id='black'>Categories</button>
            <div className="dropdown-content">
              <Link to='/sweatshirts' className='user-s-no' id='black'>Sweatshirts</Link>
              <Link to='/t-shirts' className='user-s-no' id='black'>T-shirts</Link>
              <Link to='/pants' className='user-s-no' id='black'>Pants</Link>
              <Link to='/sneakers' className='user-s-no' id='black'>Sneakers</Link>
              <Link to='/shorts' className='user-s-no' id='black'>Shorts</Link>
              <Link to='/socks' className='user-s-no' id='black'>Socks</Link>
            </div>
       </div>
       <div className='top-bar-navigation-component-prototype_item top-bar-navigation-component-prototype_item-middle'>
       <Link to='/'>
        <ImportLogo/>
       </Link>
       </div>
      <div className='top-bar-navigation-component-prototype_item top-bar-navigation-component-prototype_item_3'>
       <BiShoppingBag/>
      </div>
    </div>
    </>
  )
}