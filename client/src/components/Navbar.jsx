import React from "react";
import { Link, navigate } from "@reach/router";
import { useEffect, useState } from "react";
import axios from 'axios'
import Hamburger from "./Hamburger";
import thekeep from '../images/thekeep.png'

const Navbar = (props) => {
  console.log("navbar prop!!!", props.refs);

  const [userState, setUserState] = useState({})
  const [error, setError] = useState("")

  useEffect(() => {
    if (localStorage.getItem('userId') === null) {
      navigate('/')
    } else {
      axios.get(`http://localhost:8000/api/v1/readOne/${localStorage.getItem('userId')}`, { withCredentials: true })
        .then(response => {
          console.log(response)
          setUserState(response.data)
        })
        .catch(error => {
          console.log(error)
          setUserState({})
          setError("Please login to display data")
        })
    }

  }, [])

  return (
    <header className="navheader">
      <img className="thekeepimg" src={thekeep} alt="" />
      {props.path !== "/" ?
        <div>
          {error.length > 0 ? <Link to="/">Login to view data</Link> : null}
          <div className="hamburgericon">
            <Hamburger />
          </div>
          <h1 className="name">Hello {userState.firstName}</h1></div>
        : null

      }
    </header>
  );
}

export default Navbar;
