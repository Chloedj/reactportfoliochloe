import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-text">
          <h1>
            Hi<span className="accent">,</span> I am
            <br />Chloe<br />Duggan-Jones<span className="accent">.</span>
          </h1>
          <h2>A Front End Developer crafting beautiful web experiences.</h2>
          <a
            className="button"
            href="https://drive.google.com/file/d/1t-uNo1-vsiUP7O-CrF9dGpO4t68td_IM/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            >View My Resume</a
          >
        </div>
      </section>
  )
}

export default Hero
