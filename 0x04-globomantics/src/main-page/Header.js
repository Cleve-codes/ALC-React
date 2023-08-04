import React from 'react'
import Logo from './GloboLogo.png'
import "./main-page.css"

const Header = () => {
  return (
    <header className='row'>
        <div className='col-md-5'>
            <img src={Logo} alt="globomantics logo" className='logo' />
        </div>
        <div className='col-md-7 mt-5 subtitle'>
            Providing Houses all over the world
        </div>
    </header>
  )
}

export default Header