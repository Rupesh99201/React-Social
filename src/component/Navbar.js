import React, { Component } from 'react';

class Navbar extends Component{

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
            <a href="/" className="navbar-brand"> <span className="text-info">React </span> Social</a>
          </nav>
        );
    }
}

export default Navbar;