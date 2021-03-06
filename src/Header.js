import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link,useHistory} from 'react-router-dom';
import {IconButton} from '@material-ui/core';
const Header = ({backButton}) => {
    const history = useHistory();
    return (

      
        <div className="header">


{backButton?
            (<IconButton onClick={()=>history.replace(backButton)}>
<ArrowBackIosIcon fontSize="large"/>

            </IconButton>
            ):
            (
                <IconButton>
                <PersonIcon className="header__icon" fontSize ="large"/>
    
                </IconButton>  
            )}
      
            <Link to='/'>
      <img className="header__logo" src="https://media.designrush.com/inspirations/129349/conversions/_1513706350_604_tin-preview.jpg" alt="tinder"/>

            </Link>
     
     <Link to='/chats'>
     <IconButton>
      <ForumIcon className="header__icon" fontSize ="large"/>
      </IconButton>
     </Link>

        </div>
    )
}

export default Header
