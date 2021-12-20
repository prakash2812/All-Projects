import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact> Burger</NavigationItem>
        {/*  {!props.isAuthorized ? null :
            <NavigationItem link='/' exact> Burger</NavigationItem>}*/}
        {!props.isAuthorized ? null :
            <NavigationItem link='/orders'>Order History</NavigationItem>}

        {/* <NavigationItem link='/orders'>Order History</NavigationItem> */}
        {!props.isAuthorized ?
            <NavigationItem link='/auth'>Authenticate</NavigationItem>
            : <NavigationItem link='/logout'>LogOut</NavigationItem>
        }
        {/* <NavigationItem link='/' active> BurgerBilder</NavigationItem>
        <NavigationItem link='/'>CheckOut</NavigationItem> */}
    </ul >
);

export default navigationItems;