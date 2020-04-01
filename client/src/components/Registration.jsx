import React, { useState } from 'react';
import axios from 'axios';
import InputIcon from '@material-ui/icons/Input';
import { navigate } from '@reach/router';

const Registration = () => {

    const [registerState, setRegisterState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errorState, setErrorState] = useState([])

    const onChangeHandler = (e) => {
        setRegisterState({
            ...registerState, [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/v1/create', registerState, {withCredentials:true})
            .then(res => {
                if (res.data.errors) {
                    setErrorState({
                        firstName: res.data.errors.firstName ? res.data.errors.firstName.message : '',
                        lastName: res.data.errors.lastName ? res.data.errors.lastName.message : '',
                        email: res.data.errors.email ? res.data.errors.email.message : '',
                        password: res.data.errors.password ? res.data.errors.password.message : '',
                        confirmPassword: res.data.errors.confirmPassword ? res.data.errors.confirmPassword.message : '',
                    })
                } else if(res.data.msg === "Email already exists") {
                    console.log(res.data.msg)
                    setErrorState({email: "A user with this email is already registered to The Keep"})
                } else {
                    localStorage.setItem('userId', res.data._id)
                    console.log('registration Succsesful');
                    navigate('/home')
                }
            })
            .catch(err => { console.log(err)
            })
    }

    return (
            <div>
                <form onSubmit={onSubmitHandler}>
                    <h1>Register</h1>
                    <input type="text" name="firstName" placeholder="First Name" onChange={onChangeHandler} />
                    {errorState.firstName !== '' ? <p>{errorState.firstName}</p> : null}
                    <input type="text" name="lastName" placeholder="Last Name" onChange={onChangeHandler} />
                    {errorState.lastName !== '' ? <p>{errorState.lastName}</p> : null}
                    <input type="text" name="email" placeholder="Email" onChange={onChangeHandler} />
                    {errorState.email !== '' ? <p>{errorState.email}</p> : null}
                    <input type="text" type="password" name="password" placeholder="Password" onChange={onChangeHandler} />
                    {errorState.password !== '' ? <p>{errorState.password}</p> : null}
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={onChangeHandler} />
                    {errorState.confirmPassword !== '' ? <p>{errorState.confirmPassword}</p> : null}
                    <button type='submit'><InputIcon /></button>
                </form>
            </div>
    )
}

export default Registration
