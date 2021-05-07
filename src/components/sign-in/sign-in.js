import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
onSubmitClick=(event)=>{
    event.preventDefault();
    this.setState({
        email:'',
        password:''
    })
    }

handleChange = (event)=>{
        const { name, value }= event.target;
        this.setState({[name]: value})
}

    render() {
        
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onSubmitClick}>
                    <FormInput 
                   handleChange={this.handleChange}
                    name ='email' 
                    type='email' 
                    value= {this.state.email}
                    label='email' 
                    required />                   
                    <FormInput 
                    handleChange={this.handleChange}
                     name ='password'
                      type='password' 
                      value= {this.state.password} 
                      label='password' 
                      required />
                      <div className='buttons'>
                            <CustomButton type='submit'>Sign In 
                            </CustomButton>
                            <CustomButton onClick={ signInWithGoogle } 
                            isGoogleSignIn >Sign In with Google 
                            </CustomButton>
                      </div>                    
                </form>
            </div>
        )
    }
};

export default SignIn;

