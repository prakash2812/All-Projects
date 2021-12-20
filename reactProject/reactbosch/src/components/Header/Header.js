import React from 'react'
import './Header.css'
function header() {
    return (
        <nav className='header'>
            <div
                class="LI-profile-badge"
                data-version="v1"
                data-size="medium"
                data-locale="en_US"
                data-type="horizontal"
                data-theme="light"
                data-vanity="omprakash-2812"
            >
                <a
                    class="LI-simple-link"
                    href="https://in.linkedin.com/in/omprakash-2812?trk=profile-badge"
                >Omprakash</a>
            </div>
            {/* <h3><img src='https://www.qries.com/images/banner_logo.png' alt='Logo' /></h3> */}
            <button type='text'>UserName</button>
        </nav>
    )
}

export default header
