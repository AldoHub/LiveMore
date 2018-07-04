import React, { Component } from 'react';
import Header from "./header";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />  
        <section className="intro">
        
            <div className="cards">  
              <h2><i className="fas fa-compass"></i>< br/>Best Places</h2>
              <p>Duis aliquet vitae elit et blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 

            </div>
            <div className="cards">  
              <h2><i className="fas fa-kiwi-bird"></i>< br/>A Lot To See</h2>
              <p>Duis aliquet vitae elit et blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 

            </div>
            <div className="cards">  
              <h2><i className="fas fa-id-card-alt"></i>< br/>Certified Staff</h2>
              <p>Duis aliquet vitae elit et blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 

            </div>
          
        
         
        </section>
        
        <section>
        <i className="fas fa-frog"></i>
          <h2>Lorem ipsum</h2>
          <div>
           <p>Duis aliquet vitae elit et blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ante id est placerat, vel ullamcorper quam sagittis. Vestibulum non tortor lobortis, porttitor neque in, posuere sem.</p> 
           <br />
           <p>Suspendisse potenti. Phasellus varius bibendum ante ac semper. Quisque viverra eget nisi in viverra. Duis ex risus, vulputate in euismod ac, tempus vel velit. Maecenas ut varius nulla. Sed libero ligula, mollis eget tincidunt vitae, euismod at lorem. Ut turpis tortor, vehicula in tempor non, ullamcorper ac purus. </p>
        
          </div>
        </section>
        <section className="standalone-img">
          <div className="image"></div>
        </section>

        <section>
        <i className="fas fa-map-marker-alt"></i>
          <h2>Lorem ipsum</h2>
          <div>
           <p>Phasellus in tortor nec nulla feugiat tincidunt eu in nisl. Nulla metus lectus, aliquam sed sodales at, euismod quis orci. Ut vehicula efficitur pulvinar. Nam ligula lectus, aliquam pellentesque ligula sit amet, dapibus feugiat neque. In eget odio vitae risus ultricies bibendum consectetur in nibh. Maecenas sodales dui lectus, eget pretium lectus eleifend hendrerit.</p>
           <br />
           <p> Maecenas sagittis augue eget faucibus sodales. Sed in risus quam. Suspendisse et sapien dui. Donec dui orci, consectetur at elit euismod, fermentum suscipit felis. Vestibulum eget mauris sed purus efficitur pulvinar vitae sed massa. Donec rhoncus porta nisi ac egestas. Ut lacinia semper leo efficitur volutpat.</p> 
        
          </div>
        </section>
        <section className="standalone-img">
          <div className="image2"></div>
        </section>

       
        </React.Fragment>
    );
  }
}

export default Main;
