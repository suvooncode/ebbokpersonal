import React from 'react';

import { PdfFlipbook } from '../lib';

function Showbook() {
    localStorage.setItem('url',window.location.href);
  return (
    
      <PdfFlipbook />
    
  );
}

export default Showbook;