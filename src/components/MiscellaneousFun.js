import React from 'react';
import SectionHeader from './_elements/SectionHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

import '../styles/MiscellaneousFun.css';

class MiscellaneousFun extends React.Component {
    render() {
        return (
            <section className="misc-fun">
                <SectionHeader text="Hi" subext="Check out some stuff I do when I'm not coding"></SectionHeader>
                
                <div className="project-list">

                    <div className="project-item swiims">
                        <h2>SWiiMS</h2>
                        <p>SWiiMS have been around since late 2019. We signed with New Jersey label <strong>Mint400</strong> and released our debut EP <em><a href="#">Through Waves</a></em> in August 2020.</p>
                        
                        <iframe src="https://open.spotify.com/embed/album/47JEvHPJldsFaw37SqVCFt?si=AgWgxB4wT0Omic7Jwdcy2w" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <p>This is a video I created video for our song <em><a href="#">Hand Of Love</a></em> below.</p>
                        <iframe width="800" height="420" src="https://www.youtube.com/embed/QBJ6PaQX0T8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>If you like this, check out these other videos I did for <em><a href="https://www.youtube.com/watch?v=S-Vg1oSsjps" target="_blank">Counting An Hour</a></em> and <em> <a href="https://www.youtube.com/watch?v=yEeJKZa1ouE" target="_blank">Let You Down</a>.</em> </p>

                        <ul className="band-links">
                            <li><a href=""><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faSpotify} /></a></li>
                        </ul>

                    </div>

                    <div className="project-item waking-west">
                        <h2>The Waking West</h2>
                        <p>The Waking West have been around since 2014. We released our debut album <em><a href="#">Routes &amp; Roads</a></em> in May 2017.</p>
                        
                        <iframe src="https://open.spotify.com/embed/album/4ZaD2NQz0KiOZpK4AMrFXV?si=hbnsWTbMQf2M_Y5QrEfhjA" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <p>Below is a video I created video for our song <em><a href="#">Brother</a></em>.</p>
                        <iframe width="800" height="420" src="https://www.youtube.com/embed/NVTpTByq2ow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <ul className="band-links">
                            <li><a href=""><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faSpotify} /></a></li>
                        </ul>

                    </div>
                </div>                
            </section>
        );
    }
}
  
export default MiscellaneousFun;