import './Footer.css';
import React from 'react';

export default function Footer() {
  return (
    <div className="footer has-background-info has-text-white has-text-centered animate__animated animate__delay-1s animate__zoomInUp">
      <p className="is-size-5">
        Made with
        <span className="heart"> ❤ </span>
        by
        {' '}
        <a className="link has-text-white is-underlined" href="http://github.com/LuisHernandezCoding">Luis Hernandez</a>
      </p>
    </div>
  );
}
