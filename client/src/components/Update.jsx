import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, navigate } from '@reach/router';
import UpdateIcon from '@material-ui/icons/Update';
import Navbar from './Navbar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from 'react-bootstrap/Button'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const Update = () => {
    const [userState, setUserState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errorState, setErrorState] = useState("")
    const [refreshState, setRefreshState] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('userId') === null) {
            navigate('/')
        } else {
            axios.get(`http://localhost:8080/api/v1/readOne/${localStorage.getItem('userId')}`, { withCredentials: true })
                .then(res => {
                    console.log(res)
                    setUserState(res.data)
                })
                .catch(error => {
                    console.log(error)
                    setUserState({})
                    setErrorState("Please login to display data")
                })
        }
    }, [refreshState])

    console.log("localstorage from update", localStorage.getItem('userId'));
    console.log("userstate from update", userState)

    const onChangeHandler = (e) => {
        setUserState({ ...userState, [e.target.name]: e.target.value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        let temp = { ...userState };
        console.log("temp from update", temp);
        axios.put(`http://localhost:8080/api/v1/updateinfo/${localStorage.getItem('userId')}`, temp, { withCredentials: true })
            .then(res => {
                console.log(res)
                setRefreshState(!refreshState)
                if (res.data.errors) {
                    setErrorState({
                        firstName: res.data.errors.firstName ? res.data.errors.firstName.message : '',
                        lastName: res.data.errors.lastName ? res.data.errors.lastName.message : '',
                        email: res.data.errors.email ? res.data.errors.email.message : '',
                        password: res.data.errors.password ? res.data.errors.password.message : '',
                        confirmPassword: res.data.errors.confirmPassword ? res.data.errors.confirmPassword.message : '',
                    })
                } else {
                    console.log('successfully updated the user info');
                    setRefreshState(!refreshState)
                    alert(`Profile Updated ${userState.firstName}`)
                    navigate('/home')
                    
                }
            })
            .catch(error => {
                console.log("the error:", error)
            })
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/api/v1/deleteOne/${localStorage.getItem('userId')}` , { withCredentials: true})
            .then(res => {
                console.log(res)
                console.log('user has been deleted');
                localStorage.clear();
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <Navbar refs={{ refreshState, setRefreshState }} />
            <Link to="/home"><ArrowBackIcon className="back" /></Link>
            <div className="updatepage">
                <form onSubmit={handleUpdate}>
                    <h1>Edit Profile</h1>
                    <input type="text" name="firstName" value={userState.firstName} onChange={onChangeHandler} />
                    {errorState.firstName !== '' ? <p>{errorState.firstName}</p> : null}
                    <input type="text" name="lastName" value={userState.lastName} onChange={onChangeHandler} />
                    {errorState.lastName !== '' ? <p>{errorState.lastName}</p> : null}
                    <input type="text" name="email" value={userState.email} onChange={onChangeHandler} />
                    {errorState.email !== '' ? <p>{errorState.email}</p> : null}
                    <input type="password" name="password" placeholder="Password" onChange={onChangeHandler} />
                    {errorState.password !== '' ? <p>{errorState.password}</p> : null}
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={onChangeHandler} />
                    {errorState.confirmPassword !== '' ? <p>{errorState.confirmPassword}</p> : null}
                    <button type='submit'><UpdateIcon /></button>
                </form>
                <Button className="deleteAccount" variant="danger" size="sm" onClick={handleDelete}>Delete Account <DeleteSweepIcon /></Button>
            </div>
        </div>
    )
}

export default Update
