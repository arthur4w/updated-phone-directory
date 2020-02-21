//importing React for the functional component and {Component} for the class component
import React, { Component } from 'react';

//Functional Component
const Header = function() {
    return (
        <div className="Header">
          Phone Directory
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