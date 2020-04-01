import React from 'react'
import axios from 'axios'
import { navigate } from "@reach/router";
import { useState } from "react";
import ListIcon from '@material-ui/icons/List';
import Dropdown from 'react-bootstrap/Dropdown'

const Hamburger = () => {
    const [refresher, setRefresher] = useState(false)

    const onClickHandler = () => {
        axios.get('http://localhost:8000/api/v1/logout', { withCredentials: true })
            .then(response => {
                setRefresher(!refresher)
                localStorage.clear();
                navigate('/')
            })
            .catch(error => console.log(error))
    }

    const navigateHandler= () => {
        navigate('/update')
    }

    return (
        <div>
            <Dropdown className="test">
                <Dropdown.Toggle  variant="" id="dropdown-basic">
                <ListIcon className="listicon"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={navigateHandler}>Edit Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={onClickHandler} >Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Hamburger
