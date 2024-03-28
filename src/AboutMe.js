import React from 'react'
import './AboutMe.css'
import ChloePopArt from './images/ChloePopArt.jpg'

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
        <h2>About Me</h2>
        <div className="about-me-content">
          <div className="about-me-text">
            <h3>
              My journey in front-end development merges my passion for
              technology with an eye for design.
            </h3>
            <p>
              With a background as a virtual business support executive, I was
              exposed to website builders, and both built and maintained sites
              for my clients. I started to get interested in code when I was
              researching features I wanted to add that weren't always standard,
              and required custom HTML/CSS.
            </p>
            <p>
              The more I explored, the more I wanted to know. So, I took the
              leap and funded my own journey through a front-end development
              course. This experience sharpened my skills and made me even more
              passionate about making websites that don’t just work well but
              look great too.
            </p>
            <p>
              When I'm not coding, you'll find me delving into the latest tech
              innovations or enjoying a good book. My skills include HTML, CSS,
              JavaScript, and a knack for responsive design. I'm a lifelong
              learner, always adding new tools to my arsenal.
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/chloe-duggan-jones/"
                target="_blank" rel="noreferrer"
                ><i className="fa-brands fa-linkedin fa-2x"></i
              ></a>
              <a href="https://github.com/Chloedj" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github fa-2x"></i
              ></a>
            </div>
          </div>
          <div className="about-me-image">
            <img
              src={ChloePopArt}
              alt="Chloe Duggan-Jones"
              className="about-image"
            />
          </div>
        </div>
      </section>
  )
}

export default AboutMe
