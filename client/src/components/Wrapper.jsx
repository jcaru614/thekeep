import React from 'react'
import Registration from './Registration'
import Login from './Login'
import Navbar from './Navbar'

const Wrapper = () => {
    return (
        <div className="wrapper">
            <Navbar path="/" />
            <Registration />
            <Login />
        </div>
    )
}

export default Wrapper
