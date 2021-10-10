import React, { Component } from "react";
import styles from './styles/navbar.css';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li><a class="active" href="#home">Learn Piano</a></li>
                    {/* <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li> */}
                </ul>
            </React.Fragment>
        );
    }
}

export default NavBar;