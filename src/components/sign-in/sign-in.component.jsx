import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../firebase/firebase.utils'


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }



    render(){
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleChange}>
                    <FormInput 
                        name="email" 
                        label="email"
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        type="email" 
                        required />

                    <FormInput 
                        name="password" 
                        label="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        type="password" 
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" value="submit form"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                            </CustomButton>
                    </div>
                </form>
            </div>

        );
    }
}

export default SignIn;