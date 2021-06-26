import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import {IconButton} from '@material-ui/core';
const Header = () => {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon className="header__icon" fontSize ="large"/>

            </IconButton>
      <img className="header__logo" src="https://media.designrush.com/inspirations/129349/conversions/_1513706350_604_tin-preview.jpg" alt="tinder"/>
      <IconButton>
      <ForumIcon className="header__icon" fontSize ="large"/>
      </IconButton>
        </div>
    )
}

export default Header
