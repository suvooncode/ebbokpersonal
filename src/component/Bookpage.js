import React, { useState ,useEffect } from 'react'
import {GrTextAlignLeft} from "react-icons/gr"
import {HiOutlineFilter} from "react-icons/hi"
import {FaBars} from "react-icons/fa"
// import logo from '../images/Groupwebremovebg.png'
 import slide1 from "../images/sliderimageone.png";
// import {IoChevronBackCircleOutline} from "react-icons/io5"
// import { useHistory } from "react-router-dom";
import {Form,FormControl} from 'react-bootstrap';
import axios from "axios";
import "../assets/custome.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";

const Booksidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [book , setbooks] = useState([""]);
  const opensidebar=()=>{
    setExpanded(!expanded)
  }
//   let history = useHistory();
//   const backtohomepage=()=>{
//     history.push('/')
//   }


  
useEffect(() => { 
    
       
       const options = {
            method: 'POST',
            url: 'https://manage.swol.world/Shobhas_lms/ws/elibrary.php',
            params: {userid: 1},
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data[0].lessondata);
              setbooks(response.data[0].lessondata);
              
          }).catch(function (error) {
              console.error(error);
          });
        
    
    } ,[]);




  return (
    <>
      <div className='bookback'>
        <div>
            {/* <img src={logo} className="weblogo" onClick={() => {console.log("button clicked");}}/> */}
        </div>
        <div className='container-fluid bookctn'>
            <div className='row' style={{paddingTop:"50px"}}>
              <div className={expanded ? "col-md-1" : "col-md-3" }>
                <div className={expanded ? "activefilter" : "filter" }>
                      <div className='filterdiv'>
                          <ul>
                              <li style={{fontWeight:"600",fontSize:"19px",lineHeight:"52px"}}><GrTextAlignLeft style={{marginRight:"10px"}}/>SORT BY</li>
                              <li>Latest</li>
                              <li>Genres</li>
                              <li>Books</li>
                              <li>Course Wise</li>
                          </ul>
                          <ul>
                              <li style={{fontWeight:"600",fontSize:"19px",lineHeight:"52px"}}><HiOutlineFilter style={{marginRight:"10px"}}/>Filter</li>
                              <li>Accending</li>
                              <li>Descending</li>
                              <li>Date</li>
                              <li>Name</li>
                          </ul>
                      </div>

                      <div className='filterbtn'>
                          <FaBars onClick={()=>opensidebar()}/>
                      </div>
                  </div>
              </div>
              <div className={expanded ? "col-md-11" : "col-md-9" }>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='side'>
                                    <div className='btndiv'>
                                        <div>
                                            <button className='btn'>Featured Genres</button>
                                            <button className='btn'>Featured Books</button>
                                        </div>
                                        <div>
                                            {/* <p>Search E-BOOK here</p> */}
                                            
                                            <Form className="filterBlock" style={{zIndex:"1"}}>
                                                <FormControl
                                                    type="search"
                                                    placeholder="Search E-BOOK here"
                                                    className="searchinputbook"
                                                    aria-label="Search"
                                                />
                                            </Form>
                                        </div>
                                    </div>
                                    {/* <IoChevronBackCircleOutline className='backicon' onClick={()=>backtohomepage()}/> */}
                                </div>
                            </div>
                        </div>
                        <div className='row bookrow'>
                            
                        { 
                            book.map((bookval, index) => (
                               
                               
                                <>
                            <div className="col-md-3 mt-2" style={{position:"relative"}}>
                                <div >
                                    <img src={bookval.pdf_bg_image} className="bookwidth"/>
                                </div>                           
                                <div className='detailscol'>
                                    <p className='booktext'>{bookval.post_title}</p>
                                    <p className='bookdsc'>
                                        {/* <span>{bookval.attached_file}</span> */}
                                        {/* { bookval.attached_file?.replace("https://manage.swol.world/Shobhas_lms/wp-content/uploads/", "")} */}

                                        <Link className='btn btn-sm btn-success' to={"/Showbook/"+bookval.attached_file?.replace("https://manage.swol.world/Shobhas_lms/wp-content/uploads/", "")?.replace(".pdf","")}>Read Now</Link>

                                        {/* <a href={bookval.guid} target="_balnk">Read Now</a> */}
                                    </p>
                                </div>
                            </div>
                            </>
                            
                            ) )
                            }




                            
                        </div>
                    </div>   
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Booksidebar
