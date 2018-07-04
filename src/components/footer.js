import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
            
        <footer>
        <p>Integer tempor arcu augue, a cursus turpis tincidunt a. Nullam ut urna eget enim sagittis ultricies in ac arcu. Cras et iaculis ipsum. Duis massa lacus, sagittis a risus vel, blandit eleifend dolor. Cras imperdiet facilisis vestibulum.</p>
        <br />
        <p>Follow Us!</p>
        <br />
        <ul>
        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#"><i className="far fa-envelope"></i></a></li>

        </ul>
        <br />
        <p>&copy; aldocaava 2018</p>
        </footer>
    );
  }
}

export default Footer;

