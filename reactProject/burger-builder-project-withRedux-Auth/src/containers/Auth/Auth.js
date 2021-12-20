import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.css'
import * as authActions from '../../Store/action/index'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObject, checkValidity } from '../../Shared/utility'

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'enter email',
                },
                value: '',
                label: 'Email',
                validation: {
                    required: true,
                    IsEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                label: 'Password',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        },
        isSignUp: true
    }



    inputChangedHandler = (event, controlName) => {
        // -- with out update object-----------------
        /* const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                touched: true,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation)
            }
        } */

        // --- using updataObject utility function ------------------------
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                touched: true,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation)
            })
        })

        this.setState({
            controls: updatedControls
        })

    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp)
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => ({ isSignUp: !prevState.isSignUp }))
    }

    componentDidMount() {
        if (!this.props.builder && this.props.setRedirectPath !== '/') {
            this.props.onAuthRedirectPath()
        }
    }
    render() {
        // const properties = useSelector(state => ({
        //     spinner: state.authdata.spinner,
        //     error: state.authdata.error
        // }))

        // const dispatch = useDispatch()

        // const authDispatch = (email, password, isSignup) => dispatch(authActions.auth(email, password, isSignup))


        let formElementsArray = []
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let form = formElementsArray.map(formEle => {
            return <Input key={formEle.id}
                inValid={formEle.config.valid}
                shouldValidate={formEle.config.validation}
                touched={formEle.config.touched}
                label={formEle.config.label}
                elementType={formEle.config.elementType}
                elementConfig={formEle.config.elementConfig}
                value={formEle.config.value}
                changed={(event) => this.inputChangedHandler(event, formEle.id)} />
        })

        if (this.props.spinner) {
            form = <Spinner />
        }

        let errorMessage = null
        // console.log('error came', this.props.error);
        if (this.props.error) {
            // console.log('if error');
            errorMessage = (<p style={{ color: 'red' }}><b>{this.props.error.message}</b></p>)

        }
        let authorized = null;
        if (this.props.isAuthenticated) {
            authorized = <Redirect to={this.props.setRedirectPath} />
        }
        return (
            <div className={classes.Auth}>
                {authorized}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">{this.state.isSignUp ? "SignUp" : "SignIn"}</Button>
                </form>
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType='Danger'>Switch to {this.state.isSignUp ? 'SignIn' : 'SignUp'}
                </Button>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        spinner: state.authdata.spinner,
        error: state.authdata.error,
        isAuthenticated: state.authdata.token !== null,
        setRedirectPath: state.authdata.authRedirect,
        builder: state.burgerdata.builder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password, isSignup) => dispatch(authActions.auth(email, password, isSignup)),
        onAuthRedirectPath: () => dispatch(authActions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth) 