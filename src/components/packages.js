import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Packages extends Component {
  render() {
    return (
        <section className="packagesContainer">
            <div>
                <i className="fas fa-chevron-circle-down"></i>
                <h2>Packages.</h2>
                <div className="packages">
                   <div>
                       <h3>Single</h3>
                       <div>
                           <p className="price">&#36;249</p>
                           <p>2 days, 3 meals, medium camping tent.</p>
                           <p className="buy"><Link to="/booking/single">Book this package</Link></p> 
                       </div>
                   </div>
                   <div className="preferred">
                       <h3>Couples</h3>
                       <div>
                           <p className="price">&#36;449</p>
                           <p>2 days, 3 meals, medium / big camping tent, Extra Large Marshmallows bag &amp; an immense amount of coffee.</p>
                           <p className="buy"><Link to="/booking/couples">Book this package</Link></p> 
                       </div>
                   </div>
                  
                </div>
          </div>
        </section>
    );
  }
}

export default Packages;
