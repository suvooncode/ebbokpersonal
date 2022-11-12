import React from 'react';

import Showbook from './Showbook';
import { useParams } from "react-router-dom";

function Showpdf() {

    const params = useParams();
    console.log(params.year);
    console.log(params.bookname);
    console.log("Hi");

  return (
    
      <Showbook />
    
  );
}

export default Showpdf;