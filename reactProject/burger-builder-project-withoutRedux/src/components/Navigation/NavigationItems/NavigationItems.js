import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact> BurgerBilder</NavigationItem>
        <NavigationItem link='/Orders'>Orders</NavigationItem>
        {/* <NavigationItem link='/' active> BurgerBilder</NavigationItem>
        <NavigationItem link='/'>CheckOut</NavigationItem> */}
    </ul >
);

export default navigationItems;