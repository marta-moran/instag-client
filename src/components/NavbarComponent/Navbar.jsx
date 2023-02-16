import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineSmile } from "react-icons/ai";
import './Navbar.css'


function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom" style={{ justifyContent: 'space-between' }}>
            <Link to="/"><AiFillHome size={40} color="white" /></Link>
            <Link to="/explore"><AiOutlineSearch size={40} color="white" /></Link>
            <Link to="/upload"><AiFillPlusCircle size={40} color="white" /></Link>
            <Link to="/profile"><AiOutlineSmile size={40} color="white" /></Link>
        </Navbar>
    )
}

export default NavbarComponent