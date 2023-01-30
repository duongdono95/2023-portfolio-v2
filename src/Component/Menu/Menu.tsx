import React, {useState} from 'react'
import './Menu.scss'
import { NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react';

const Menu = () => {
  return (
    <div id='menu' className='hide '>
      <div className="menu__items">
        <NavLink to='/'>
          <Tippy animation="fade" content="Home" placement="left"><i className="fa-solid fa-house"></i></Tippy>
        </NavLink>

        <NavLink to='/About'>
          <Tippy content="About Me" placement="left"><i className="fa-solid fa-face-smile-wink"></i></Tippy>
        </NavLink>

        <NavLink to='/Skills'>
          <Tippy content="My Skills" placement="left"><i className="fa-solid fa-dice-d20"></i></Tippy>
        </NavLink>

        <NavLink to='/Contact'>
          <Tippy content="Contact Me" placement="left"><i className="fa-solid fa-phone"></i></Tippy>
        </NavLink>

        <NavLink to='/Projects'>
          <Tippy content="My Projects" placement="left"><i className="fa-solid fa-code"></i></Tippy>
        </NavLink>


      </div>

    </div>
  )
}

export default Menu