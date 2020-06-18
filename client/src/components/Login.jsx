import React, { useState } from 'react';
import axios from 'axios';
import LaunchIcon from '@material-ui/icons/Launch';
import { navigate } from '@reach/router';
import variables from './variables'

const Login = () => {

    const [loginState, setLoginState] = useState({
        email: '',
        password: ''
    })

    const [errorState, setErrorState] = useState([])

    const onChangeHandler = (e) => {
        setLoginState({
            ...loginState, [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`${variables.prod_heroku_address}/api/v1/login`, loginState, { withCredentials: true })
            .then(res => {
                console.log(res);
                if (res.data.errors) {
                    setErrorState({
                        email: res.data.errors.email ? res.data.errors.email.message : '',
                        password: res.data.errors.password ? res.data.errors.password.message : '',
                 }) 
                } else if (res.data.msg !== 'success') {
                    console.log(res.data.msg)
                    setErrorState({
                        email: "This email doesn't exist or password is incorrect",
                 }) 
                    
                } else {
                    localStorage.setItem('userId', res.data._id)
                    console.log(localStorage.getItem('userId'));
                    console.log('login succsesful');
                    navigate('/home')
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>Login</h1>
                {errorState.email !== '' ? <p>{errorState.email}</p> : null}
                <input type="text" name="email" placeholder="Email" onChange={onChangeHandler} />
                <input type="password" name="password" placeholder="Password" onChange={onChangeHandler} />
                <button type="submit"><LaunchIcon /></button>
            </form>
        </div>
    )
}

export default Login
