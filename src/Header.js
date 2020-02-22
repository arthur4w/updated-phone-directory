//importing React for the functional component and {Component} for the class component
import React, { Component } from 'react';
import './Header.css';

//Functional Component
const Header = function(props) {
    return (
        <div className="Header">
          {props.heading}
        </div>
    );
}

// Class Component
/*class Header extends Component {
    render() {
        return (
            <div className="Header">
                Phone Directory
            </div>
        )
    }
}*/

export default Header;