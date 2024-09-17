import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import alii1 from '../../assets/images/alii1.jpeg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={alii1} alt="" className='profile-img' />
      <h1><span>Hi I'm Ali Omar,</span> a full Stack web developer based in Somalia.</h1>
      <p>I am a full Stack developer from Somalia, with 6 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
