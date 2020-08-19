import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Posts from './posts';
import {Link} from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";


function Header (props) {
    return(
    <div className = "top-div">
    <Navbar className = "bootstrap-navbar">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Brand style = {{color: "white"}} className = "header" href="/">Scotty Designs</Navbar.Brand>

    <ul class="navbar-nav postTab">
      <li class="nav-item active">
        <a class="nav-link" href="/posts">Posts
          <span class="sr-only">(current)</span>
        </a>
      </li>
    </ul>
        </Navbar>
    
    </div>)
};
export default Header;