import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-container">
          <div className="footer-column">
            <p>
              Email:
              <a href="mailto:Chloedj88@gmail.com">Chloedj88@gmail.com</a>
            </p>
          </div>
          <div className="footer-column">
            <a
              href="https://www.linkedin.com/in/chloe-duggan-jones/"
              target="_blank" rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/Chloedj" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Footer
