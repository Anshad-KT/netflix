import React from 'react'
import "./NavBar.css"
const NavBar:React.FC = () => {
  return (
    <div className='navbar'>
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="" />
      <h4 className='home'>Home</h4>
      <h4 className='Tv-Shows'>Tv Shows</h4>
      <h4 className='movies'>Movies</h4>
      <h4 className='popular'>Popular</h4>
     
      <h4 className='brows'>Browse by language</h4>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}

export default NavBar
