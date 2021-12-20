import React from 'react'
import './Navigation.css'

function Navigation() {
    return (
        <nav className='sidebar'>
            <ul>
                <li><a href="#home"><i class="fas fa-home"></i></a></li>
                <li><a href="#envira"><i class="fab fa-envira"></i></a></li>
                <li><a href="#focus"><i class="fas fa-eye"></i></a></li>
                <li><a href="#adressbook"><i class="fas fa-address-book"></i></a></li>
            </ul>

        </nav>
    )
}

export default Navigation
