import React, { useState, useEffect } from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import { navigate } from '@reach/router';
import axios from "axios";
import Navbar from './Navbar'
import Notes from './Notes'

const Home = () => {
    const [userState, setUserState] = useState({})
    const [formState, setFormState] = useState({
        title: '',
        description: '',
        date: '',
    })
    const [errorState, setErrorState] = useState("")
    const [refreshState, setRefreshState] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('userId') === null) {
            navigate('/')
        } else {
            axios.get(`http://localhost:8000/api/v1/readOne/${localStorage.getItem('userId')}`, { withCredentials: true })
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


    console.log("localstorage from home", localStorage.getItem('userId'));
    console.log("userstate from home", userState)
    console.log("formstate from home", formState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let temp = { ...userState };
        temp.tasks.unshift(formState)
        // unshift to show tasks newest to oldest
        console.log("temp", temp);
        console.log("temp.tasks", temp.tasks);
        axios.put(`http://localhost:8000/api/v1/updateOne/${localStorage.getItem('userId')}`, temp, { withCredentials: true })
            .then(res => {
                console.log(res)
                setRefreshState(!refreshState)
                if (res.data.errors) {
                    setErrorState({
                        title: res.data.errors.title ? res.data.errors.title.message : '',
                        description: res.data.errors.description ? res.data.errors.description.message : '',
                        date: res.data.errors.date ? res.data.errors.date.message : ''
                    })
                } else {
                    console.log('successfully updated the users tasks');
                    setFormState({
                        title: '',
                        description: '',
                        date: '',
                    })
                    setRefreshState(!refreshState)
                    navigate('/home')
                }
            })
            .catch(error => {
                console.log("the error:", error)
            })
    }

    return (
        <div>
            <Navbar />
            <div className="home" >
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" value={formState.title} placeholder="Title" onChange={handleChange} />
                    {errorState.title !== '' ? <p>{errorState.title}</p> : null}
                    <input type="date" className="date" value={formState.date} onChange={handleChange} name="date" />
                    {errorState.date !== '' ? <p>{errorState.date}</p> : null}
                    <textarea type="text" name="description" value={formState.description} placeholder="Write a task down..." rows="3" onChange={handleChange} />
                    {errorState.description !== '' ? <p>{errorState.description}</p> : null}
                    <button type="submit"><AddBoxIcon /></button>
                </form>
                <Notes info={userState} refs={{ refreshState, setRefreshState }} />

            </div>
        </div>
    );
}

export default Home;