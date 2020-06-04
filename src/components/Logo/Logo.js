import React from 'react';

//css
import classes from './Logo.css'

//importing the logo
import burgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;