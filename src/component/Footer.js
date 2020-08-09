import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
       <div>
           <footer className="mt-3 bg-dark text-white text-center p-3">
              <div className="row">
                  <div className="col">
                  <h3>Copyright 2020 , React Social</h3>
                  <p>All Right Recerved</p>
                  <p>Developed & Maintained by React Social Group</p> 
                  </div>   
              </div>  
           </footer>
       </div>
        );
    }
}
export default Footer;