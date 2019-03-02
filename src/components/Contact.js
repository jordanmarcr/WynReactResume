import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
    render(){
        return (
            <div id='contact'>
              <header>
                <h1>Contact Me</h1>
                <p>Fill out this form!</p>

                <form>
                  <div>
                    <label for='user_name'>Name</label>
                    <input type='text'/>
                  </div>
                  <div>
                    <label for='email'>Email</label>
                    <input type='text'/>
                  </div>
                  <div>
                    <label for='message'>Message</label>
                    <input type='text'/>
                  </div>
                  <input type='submit' value='Contact Me!' />
                </form>
              </header>
            </div>
        )
    }
}


export default Contact