import React, { Component } from 'react'
// import { ThemeContext } from '../../../AppContext'

class ClassContextComponent extends Component {
    themeStyles = (dark) => ({
        backgroundColor: dark ? '#333' : '#ccc',
        color: dark ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    })
    render() {
        return
        // return (
        //     <div>
        //         <ThemeContext.Consumer>
        //             {darkTheme => {
        //                 return (
        //                     <div style={this.themeStyles(darkTheme)}>Class Theme</div>
        //                 )
        //             }}
        //         </ThemeContext.Consumer>
        //     </div>
        // )
    }
}

export default ClassContextComponent
