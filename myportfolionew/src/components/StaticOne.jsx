import React from 'react';
import '../App.css';

const StaticOne = () => {
    return(
        <div className="static">
          <div className="static-main-text"
          style={{
            fontSize: '8rem'
          }}>
            <span style={{ fontWeight: 100, display: 'block' }}>Amodh</span>
            <span style={{ fontWeight: 600, display: 'block', marginTop: '5rem', textAlign:'right' }}> शर्मा</span>
          </div>
          <div className='static-main-intro'>
            <span style={{ fontWeight: 200, display: 'block' }}> A fresher with a knack for aesthetics. With a cobined experience of 0 years, I want to learn and expand in the field of visual and interactive web design</span>
            {/* display: Block - changes the default behavior of inline elements (like <span>) to that of block-level elements. */}
            {/* <p>A fresher with a knack for aesthetics. With a cobined experience of 0 years, I want to learn and expand in the field of visual and interactive web design</p> */}
            <span style={{ fontWeight: 200, display: 'block', marginTop: '1rem' }}> I value clarity, empathy, and integrity above all else. They guide my approach to problem solving and life in general.</span>
            {/* <p>I value clarity, empathy, and integrity above all else. They guide my approach to problem solving and life in general.</p> */}
          </div>
          <div className="static-main-links">
            <span style={{ fontWeight: 200, display: 'block' }}><a href='#introduction'>00 Introduction</a></span>
            {/* <a href='#introduction'>00 Introduction</a>, href will be made to the section id of the desired location */}
            <span style={{ fontWeight: 200, display: 'block', marginTop: '0.5rem' }}><a href='#areas-of-interest'>01 Areas of Interest and Design Philosophy</a></span>
            <span style={{ fontWeight: 200, display: 'block', marginTop: '0.5rem' }}><a href="#projects-done">02 Projects I've Done</a></span>
            <span style={{ fontWeight: 200, display: 'block', marginTop: '0.5rem' }}><a href="#skills">03 Skills I'm Adept With</a></span>
            <span style={{ fontWeight: 200, display: 'block', marginTop: '0.5rem' }}><a href='#socials'>04 Socials</a></span>
          </div>
        </div>
    );
}
export default StaticOne;