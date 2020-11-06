import React from 'react';
import SectionHeader from '../components/_elements/SectionHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

import singleWordImg from '../assets/assets-a-single-word-screen.png';
import bikeShareImg from '../assets/assets-toronto-bike-share-app-screen.png';
import clickBaitImg from '../assets/assets-click-bait-mock-up-screen.png';

import '../styles/Portfolio.css';

let portfolio = [
    {
        name: 'A Single Word',
        description: 'Created using React.js. The idea for this app came after discovering a great API holding a huge database of poems from classic authors. I really liked the idea of being able to collaborate and create something new at the click of a button.',
        imgUrl: singleWordImg,
        liveLink: "https://cianoruanaidh.github.io/a-single-word-v2/",
        gitLink: "https://github.com/CianORuanaidh/a-single-word-v2",
    },
    {
        name: 'Toronto Bike Share Races',
        description: "Created using React.js, Firebase and the citybike API. This app lets you create race routes using Toronto's bike share stations, and auto generate a race route too.",
        imgUrl: bikeShareImg,
        liveLink: "https://cianoruanaidh.github.io/bike-share-app/",
        gitLink: "https://github.com/CianORuanaidh/bike-share-app",
    },
    {
        name: 'Click Bait',
        description: 'This idea came out of a bad pun. A fun little game built utilizing jQuery and JS.',
        imgUrl: clickBaitImg,
        liveLink: "https://cianoruanaidh.github.io/cian-oruanaidh-project3/",
        gitLink: "https://github.com/CianORuanaidh/cian-oruanaidh-project3",
    },
]


class Portfilio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: portfolio,
        };
      }

      
      render() {
          return (
            <section className="portfolio">
                <SectionHeader text="portfolio" subext="some text"></SectionHeader>
                <h3 className="portfilio-sub-head">below are some project from my JunoCollege days</h3>
                <div className="portfilio-list">
                    {portfolio.map((item, i) => {
                        return ( 
                            <div key={i} className="portflio-item">
                                <div className="img-holder">
                                    <img src={item.imgUrl} alt={item.name}></img>
                                </div>
                                <div className="portflio-item-content">
                                    <h4 className="portflio-item-title">{item.name}</h4>
                                    <a href={item.gitLink} className="portfolio-git" target="_blank" rel="noopener noreferrer">github <FontAwesomeIcon icon={faGithub} /></a><a href={item.liveLink} className="portfolio-live" target="_blank" rel="noopener noreferrer">live <FontAwesomeIcon icon={faBolt} /></a>
                                    <p className="portflio-item-desc">{item.description}</p>
                                </div>
                            </div>  
                        )
                    })}
                </div>
                      
            </section>
          );
      }
}

export default Portfilio;