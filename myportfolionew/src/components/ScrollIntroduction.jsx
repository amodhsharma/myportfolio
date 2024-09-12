import React from 'react';
import '../App.css';

const ScrollIntroduction = () => {
  return (
    <section id="introduction" 
          style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            height: '100vh',
            margin: '0 5%',
          }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 200, display: 'block'}}>Being brought up in a house full of fabrics, designs, colors and patterns does something to you,</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 200, display: 'block', marginTop: '1rem' }}> Something which makes you look at the whole world like its your canvas,</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 200, display: 'block', marginTop: '1rem' }}>What better sign from the universe to turn the world a bit more aesthetic, one click at a time </span>
    </section>
  );
}

export default ScrollIntroduction;