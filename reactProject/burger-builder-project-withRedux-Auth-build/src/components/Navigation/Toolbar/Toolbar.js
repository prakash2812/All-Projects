import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


const toolBar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.toggleclicked} />
        <div className={classes.Name}><b>Abhu Burgers</b></div>

        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthorized={props.isAuth} />
        </nav>


    </header >

)

export default toolBar;