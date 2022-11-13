import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

export default class LoginpageC extends Component {

    constructor(props) {
        super(props);
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null)
        {
            loggedIn = false
        }

        this.state = {
            loggedIn
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const namess =  target.name;
        this.setState({
            [namess]: value
        });
        console.log(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            logdata:"yes",
            email : this.state.email,
            password : this.state.password
        }
        axios .post('https://manage.swol.world/Shobhas_lms/wp-logincheck.php',data)
        // axios .post('http://localhost/elibrary/books.php',data)
        // axios .post('https://manage.swol.world/elibrarydatabase/books.php',data)
        .then(res => {
            console.log(res.data)
            if(res.data.Status == "ok")
            {
                
                // this.props.history.push('/');
                Swal.fire({
                    title:"Success!",
                    icon:"success",
                    showConfirmButton:true,
                }).then((result) => {
                    localStorage.setItem("token", "loggedIn");
                    localStorage.setItem("userid", res.data.finduserdetails.data.ID);
                    localStorage.setItem("useremail", res.data.finduserdetails.data.user_email);
                    localStorage.setItem("username", res.data.finduserdetails.data.display_name);
                    localStorage.setItem("usernickname", res.data.finduserdetails.data.user_nicename);
                    window.location.href = "/Books";
                    }
                )
            }
            else
            {
                
                Swal.fire({
                    title:"Invalid email or password!",
                    icon:"success",
                    showConfirmButton:true,
                })
            }
        })
    
    }

  render() {
    return (
        <div className='bookback' style={{height:"100vh"}}>
            <div className='CApp' style={{height:"100vh"}}>
                <div className='login'>
                    <div className='logdiv'>
                        <div>
                            <h5>e-library</h5>
                        </div>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name='email' value={this.state.email} placeholder='Enter Email' onChange={this.handleChange}/>
                                <input type="password" name='password' value={this.state.password} placeholder='Enter Password' onChange={this.handleChange}/>
                                <button type="submit" class="btn logbtn">login</button>
                            </form>
                        </div>
                        <div>
                            <p className='pass'>Forgot password</p>
                            <p className='acc'>I don't have an account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
      )
    }
}
