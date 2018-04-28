import React,{Component} from 'react';
import '../App.css';

class Login extends Component {
    render() {
        return(
            <div className='loginHeader'>
        <a>LOGIN</a>
        <a className='Or'>or</a>
        <a>REGISTER</a>
        </div>
        )
    }
}

export default Login;