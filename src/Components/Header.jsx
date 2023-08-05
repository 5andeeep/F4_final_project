import React from 'react'
import image1 from '../img/Group 2918.png';
import image2 from '../img/Group.png';
import image3 from '../img/Group1.png';
import image4 from '../img/Group2.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='inside-header'>
        <span id='logo'>TravelMedia.in</span>
        <span className='links'>
            <img src={image1} alt="home-img" />
            <img src={image2} alt="bell-img" />
            <img src={image3} alt="save-img" />
            <img src={image4} alt="user-img" />
        </span>
      </div>
    </div>
  )
}

export default Header