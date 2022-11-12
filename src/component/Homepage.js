import React, { Component } from 'react'

// import Carouselhome from './Carousel/Carouselhome'
// import logo from '../images/Groupwebremovebg.png'
// import aboutswol from '../images/SWOL-DIGITAL-LIBRARY.png'
// import Footerpage from './Footerpage'
// import Carouselgenres from './Carousel/Carouselgenres'
// import Carouselbook from './Carousel/Carouselbook'

import {Form,FormControl} from 'react-bootstrap';


export default class Homepage extends Component {


  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }
  
  gotologin=()=> {
    console.log(this.props);
    // this.props.history.push('/Loginpage')
    window.location.href = "/Loginpage";
  }
  
  gotobookpage=()=>{
    console.log("worked")
    window.location.href = "/Bookpage";
  }

  logout=()=>{
    var aa = localStorage.getItem('token');
    this.setState({settoken:!aa})
    window.location.href = "/";
    // this.props.history.push('/')
    localStorage.clear();
  }


  render() {
    var aa = localStorage.getItem('token');
    console.log(aa);
    console.log("Hi Fuck");
    if(aa === "loggedIn"){
      return (
        <div className='bookback'>
          <div>
            {/* <img src={logo} className="weblogo"/> */}
            <button className='loginbtn' onClick={()=> this.logout()} >Logout</button>
          </div>
          {/* <Carouselhome/> */}
          <div className='searchbook'>
            <button className='bookbtn'>Featured <br/>Genres</button>
            <div className='searchbtn'>
              <p>Search E-BOOK Here</p>
              <Form className="filterBlock" style={{zIndex:"1"}}>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="searchinput"
                    aria-label="Search"
                />
              </Form>
            </div>
            <button className='bookbtn'>Featured <br/>Books</button>
          </div>
          <div className='container-fluid'>
            <div className='row mt-3'>
              <div className='col-md-6 aboutimg'>
                {/* <img src={aboutswol} onClick={() => {console.log("button clicked");}}/> */}
              </div>
              <div className='col-md-6 aboutswol'>
                <h2>SWOL DIGITAL LIBRARY</h2>
                <h5>A World of E-Books</h5>
                <p>The idea of E-Library is to enable the learners on the
                  SWOL platform to access a set of eBooks as the choice of
                  their course. We wish to have a digital library set up which
                  is a replica of a physical library.The learners can gain
                  access to the contents of the library by either enrolling on
                  acourse or subscribing to the library in general.
                </p>  
              </div>
            </div>
          </div>
          
  
          <div>
            {/* <Carouselgenres/>
            <Carouselbook/> */}
            {/* <Footerpage/> */}
          </div>
          
        </div>
      )
    }
    else{
      return (
        <div className='bookback'>
          <div>
            {/* <img src={logo} className="weblogo"/> */}
            <button className='loginbtn' onClick={()=> this.gotologin()} >Login</button>
          </div>
          {/* <Carouselhome/> */}
          <div className='searchbook'>
            <button className='bookbtn' onClick={()=>this.gotobookpage()}>Featured <br/>Genres</button>
            <div className='searchbtn'>
              <p>Search E-BOOK Here</p>
              <input type="search" className='searchinput'/>
            </div>
            <button className='bookbtn' onClick={()=>this.gotobookpage()}>Featured <br/>Books</button>
          </div>
        </div>
      )
    }
    
  }
}
