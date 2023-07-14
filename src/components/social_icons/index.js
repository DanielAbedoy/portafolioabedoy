import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a className="" href="https://www.facebook.com/people/Daniel-Abedoy/100009088588193/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fb h1" icon={faFacebook} />
          </a>
          <a href="https://github.com/DanielAbedoy/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="git h1" icon={faGithub} />
          </a>
          {/* <a href="https://twitter.com/okrittim" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="twitter" icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/motasimfoad/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="insta" icon={faInstagram} />
          </a> */}
          <a href="https://linkedin.com/in/jose-daniel-abedoy-silva-6a81931b1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="linkedin h1" icon={faLinkedin} />
          </a>
         </Col>
  );
}

export default SocialIcons;
