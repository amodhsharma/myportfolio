import React from 'react';
import '../App.css';

const Mail = import.meta.env.VITE_PORTFOLIO_MAIL;
const Instagram = import.meta.env.VITE_PORTFOLIO_INSTAGRAM;
const Twitter = import.meta.env.VITE_PORTFOLIO_TWITTER;


const ScrollSocial = () => {
  return (
    <section id="socials"
          style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            height: '100vh',
            margin: '0 5%',
          }}>
            <div className='social-links'>
            <span style={{ fontSize: '12.5rem', fontWeight: 400, display: 'block' }}>
          <a href={`mailto:${Mail}`}>Mail</a>
        </span>
        <span style={{ fontSize: '12.5rem', fontWeight: 400, display: 'block', marginTop: '-3rem' }}>
          <a href={Instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </span>
        <span style={{ fontSize: '12.5rem', fontWeight: 400, display: 'block', marginTop: '-3rem' }}>
          <a href={Twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
        {/* Added target="_blank" to open the links in a new tab.
	    Added rel="noopener noreferrer" for security when using target="_blank". */}
        </span>
        </div>
    </section>
  );
}

export default ScrollSocial;