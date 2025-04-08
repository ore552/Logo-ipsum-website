import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <footer >
        <span>
      © 2025 Logo Ipsum. All Rights Reserved.
    </span>
            <span className='footer-links'>
                <Link  to='/'>Home</Link>
                <Link to='/subplans'>Plans</Link>
            </span>
        </footer>
    </div>
  )
}

export default Footer