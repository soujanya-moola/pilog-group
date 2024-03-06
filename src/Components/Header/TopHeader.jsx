import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap';

export const TopHeader = () => {

    const [isTopBarVisible, setIsTopBarVisible] = useState(true);

    const toggleTopBar = () => {
      setIsTopBarVisible(!isTopBarVisible);
    };
  
  return (
    <div className="top-nav-bar">
      
        <div fixed="top" >
      {isTopBarVisible && (
        <div className="top-bar">
          {/* Your top bar content here */}
          <span className="close-icon" onClick={toggleTopBar}>
            &#x2715;
          </span>
          <div className='d-flex'>
            <p>Hello</p>
            <p>Welcome to Pilog</p>
          </div>
        </div>
      )}
     
    </div>
    </div>
  )
}

