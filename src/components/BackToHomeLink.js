import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BackToHomeLink.css';

import { useLocation } from 'react-router-dom';

function BackToHomeLink(){
    const location = useLocation();
    const isHome = !location.pathname.replace("/", "");
    return isHome ? '' : <div className="swip-animation"><Link to="/" className="back-to-home-link"></Link></div>;
}
export default BackToHomeLink;
