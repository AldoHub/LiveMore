import React, { Component } from 'react';



class Booking extends Component {

  //this is a little app template
  //with Router V4 and this time I am not using redux

  //set default state
  constructor(){
    super();
    this.state = {
      name: "",
      lastname: "",
      email: "",
      date: ""
    }
  }

  //basic form handlers
  nameHandler = (e) => {
    let name = e.target.value;
    this.setState({
      name : name
    });
    
  }
  lastnameHandler = (e) => {
    let lastname = e.target.value;
    this.setState({
      lastname : lastname
    });
  
  }
  emailHandler = (e) => {
    let email = e.target.value;
    if(email.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
      this.setState({
        email: email
    });
      }else{
        this.setState({
          email: ""
      });
      console.log("Incorrect Email, must match Expression");
    }
  } 
  dateHandler = (e) => {
    let date = e.target.value;
    this.setState({
      date : date
    });
 
  }

  formHandler = (e) =>{
    e.preventDefault();

    if(this.state.name === "" || this.state.email === "" || this.state.message === "" ){
     console.log("cant process the values");
      return false;
    }else{
    console.log(`
      booking{ 
       name: ${this.state.name},
       lastname: ${this.state.lastname}, 
       email: ${this.state.email}, 
       bookingDate: ${this.state.date} 
    
      } 
    }
    `);
  }
  }


  render() {
    return (
        <section>
        
           <div>
           <i className="fas fa-book"></i>
                <h2>Booking For {this.props.match.params.id} Package</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est lacus, tempor vel ornare ac, ultrices eu lorem. Aliquam dapibus, magna eget fermentum ultrices, augue lectus auctor sem, blandit pretium turpis nunc sit amet justo. Praesent gravida dignissim enim, sit amet accumsan lectus auctor vel.</p>
                <br/>
                <form>
                 <div className="form-control">
                  <label>Name:</label>
                  <input type="text" onChange = {this.nameHandler} name="name" placeholder="Name" />
                 </div>   
                 <div className="form-control">
                  <label>Lastname:</label>
                  <input type="text" onChange = {this.lastnameHandler} name="lastname" placeholder="Lastname" />
                 </div>   
                 <div className="form-control">
                  <label>Email:</label>
                  <input type="email" onChange = {this.emailHandler} name="email" placeholder="Email" />
                 </div>   
                 <div className="form-control">
                  <label>Date:</label>
                  <input type="date" name="date" onChange = {this.dateHandler} />
                 </div>   
                 <div className="form-control">
                    <input type="submit" onClick={this.formHandler} name="submit" value="Book" />
                 </div>  

                </form>


          </div>
        </section>
    );
  }
}

export default Booking;
