import React, { Component } from 'react';
import hills from "../assets/images/grant-ritchie-338426-unsplash.jpg";

class About extends Component {
  render() {
    return (
        <section className="description">
          
           <div>
                <i className="fas fa-chevron-circle-down"></i>
                <h2>About Us.</h2>
                <div>
                    <p>Phasellus in tortor nec nulla feugiat tincidunt eu in nisl. Nulla metus lectus, aliquam sed sodales at, euismod quis orci. Ut vehicula efficitur pulvinar. Nam ligula lectus, aliquam pellentesque ligula sit amet, dapibus feugiat neque. In eget odio vitae risus ultricies bibendum consectetur in nibh. Maecenas sodales dui lectus, eget pretium lectus eleifend hendrerit.</p>
                    <br />
                    <p> Maecenas sagittis augue eget faucibus sodales. Sed in risus quam. Suspendisse et sapien dui. Donec dui orci, consectetur at elit euismod, fermentum suscipit felis. Vestibulum eget mauris sed purus efficitur pulvinar vitae sed massa. Donec rhoncus porta nisi ac egestas. Ut lacinia semper leo efficitur volutpat.</p> 
            
                </div>
          </div>
          <img src={hills} />
        </section>
    );
  }
}

export default About;
