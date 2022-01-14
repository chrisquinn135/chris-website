import React, { useState } from 'react';
import { AiFillUpCircle } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    console.log('test')
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div style={{ textAlign: 'center', fontSize: '2.5em' }} >
      <AiFillUpCircle onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none', cursor:'pointer' }} />
    </div>

  );
}

export default ScrollButton;