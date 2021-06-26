import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
const Header = () => {
    return (
        <div className="header">
            <PersonIcon className="header__icon" fontSize ="large"/>
      <img className="header__logo" src="https://media.designrush.com/inspirations/129349/conversions/_1513706350_604_tin-preview.jpg" alt="tinder"/>
            <ForumIcon className="header__icon" fontSize ="large"/>
        </div>
    )
}

export default Header
