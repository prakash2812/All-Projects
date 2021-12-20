import React, { Component } from 'react'

// const WithClass = (WrappedComponent, classes) => {
// return (props) => (
//     <div className={classes}>
//         <WrappedComponent {...this.props} />
//     </div>
// );
// }

const WithClass = (WrappedComponent, classes) => {
    const ExtraClass = class extends Component {
        render() {
            return (
                <div className={classes}>
                    <WrappedComponent ref={this.props.forwadedRef} {...this.props} />
                </div>
            );
        }

    }

    return React.forwardRef((props, ref) => {
        return <ExtraClass forwadedRef={ref} {...props} />
    })


}
export default WithClass;


// ------<Aux /> user as childredn of html with crap up of div tag which not having class name
// but if you need to have div tag then use HOC (high order component)
// ------------->>>>> function component using to pass class name dynamically 
//<WithClass classes={classes.App}  or classes.Person
// // <div className={props.classes}>
// const WithClass = (props) => {
//     return (

//         <div className='Person'> 
//             {props.children};
//         </div>
//     );
// }

// export default WithClass;