import React, { Component } from 'react';

class Lander extends Component{
    render(){
        return(
            <div className="fullscreen-landing">
                <div className="overlay">
                   <div className="text-white text-center d-flex flex-column h-100 align-items-center justify-content-center"> 
                       <h5 className="display-4"> 
                        <span className="text-info">React</span> Social
                       </h5>
                       <p>Social media are interactive computer-mediated technologies that facilitate the creation or sharing of information, ideas, career interests and other forms of expression via virtual communities and networks.</p>
                       <div>
                       <button className="btn btn-info">Register</button>
                        <button className="btn btn-white">Login</button>
                       </div>
                   </div>
                 
                </div>
            </div>
        );
    }
}

export default Lander;