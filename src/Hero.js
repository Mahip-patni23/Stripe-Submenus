import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './Context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  
    return <React.Fragment>
        <section className="section-hero" onMouseOver={closeSubmenu}>
      <article className="section-center">
        <div className="heading">
          <h1>Payments infrastructure for the internet</h1>
          <p>Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
          <div className="btn-container">
            <button className="btn start-btn">start now <FaArrowRight></FaArrowRight></button>
            <button className="btn contact-btn">contact sales <FaArrowRight></FaArrowRight></button>
          </div>
        </div>
        <img src={phoneImg} alt="phone-img" className="phone-img"/>
      </article>
    </section>
    </React.Fragment>
}

export default Hero