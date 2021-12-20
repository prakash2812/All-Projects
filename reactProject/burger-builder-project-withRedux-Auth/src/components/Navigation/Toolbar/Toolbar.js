import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


const toolBar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.toggleclicked} />

        <div className={classes.Logo}>
            <Logo />
        </div>
        {/* <b style={
            {
                height: "100 %",
                width: "30%",
                margin: 300,
                padding: 30,
                position: "relative",
                textAlign: 'center',
                color: 'white'
            }
        }>Welcome to Abhu Burgers
        </b> */}
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthorized={props.isAuth} />
        </nav>


    </header>

)

export default toolBar;