import React, {useState} from 'react'
import './Menu.scss'
import { NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react';
const Menu = () => {

  return (
    <div className='menu'>
      <div className="menu__items">
        <NavLink to='/'>
          <Tippy delay={[0, 50]} content="Home" placement="left"><i className="fa-solid fa-house"></i></Tippy>
        </NavLink>

        <NavLink to='/About'>
          <Tippy delay={[0, 50]} content="About Me" placement="left"><i className="fa-solid fa-face-smile-wink"></i></Tippy>
        </NavLink>

        <NavLink to='/Skills'>
          <Tippy delay={[0, 50]} content="My Skills" placement="left"><i className="fa-solid fa-dice-d20"></i></Tippy>
        </NavLink>

        <NavLink to='/Projects'>
          <Tippy delay={[0, 50]} content="My Projects" placement="left"><i className="fa-solid fa-code"></i></Tippy>
        </NavLink>

        <NavLink to='/Contact'>
          <Tippy delay={[0, 50]} content="Contact Me" placement="left"><i className="fa-solid fa-phone"></i></Tippy>
        </NavLink>
      </div>
      <div className="break-line"></div>
      <div className="social__links">
        <a
          className="social__link"
          href="https://www.linkedin.com/in/duong-dono-a644b8189/"
          rel="noreferrer"
          target="_blank"
        >
            <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          className="social__link"
          href="https://www.facebook.com/thanhduong.bach.50115/"
          rel="noreferrer"
          target="_blank"
        >
            <i className="fa-brands fa-facebook"></i>
        </a>

        <a className="social__link" href="https://www.instagram.com/duongdono225/" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-instagram"></i>
        </a>

        <a className="social__link" href="https://www.behance.net/duongdono" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-behance"></i>
        </a>

        <a className="social__link" href="https://github.com/duongdono95" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-github"></i>
        </a>
      </div>
      {/* <div className="text__btns">
        <button>
          <a
            href="https://duongdono2205.files.wordpress.com/2022/10/certificate-diploma.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <span>My Education</span>
          </a>
        </button>

        <button>
          <a
            href="https://duongdono2205.files.wordpress.com/2022/10/duongdono-resume-2.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <span>My Resume</span>
          </a>
        </button>
      </div> */}
    </div>
  )
}

export default Menu