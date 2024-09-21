import React from 'react';
import './wcu.css';
import Algomonkeys from "../../assets/Images/Algomonkeys.png";
import aws from "../../assets/Images/aws.png";
import cycled from "../../assets/Images/cycled.png";
import dataloop from "../../assets/Images/dataloop.png";
import playment from "../../assets/Images/playment.png";
import additionalImage from "../../assets/Images/5555.jpg";

function Whychooseus() {
  return (
    <div>
      <main>
        <section className="clients">
          <h1>Our Clients</h1>
          <h3>We have successfully executed works directly / indirectly for the following end customers and business houses.</h3>
          <div className="client-logos">
            <a href="https://www.algomonkeys.io/" target="_blank" rel="noopener noreferrer">
              <img src={Algomonkeys} alt="AlgoMonkeys" />
            </a>
            <a href="https://www.cycled.no/rewards-me/" target="_blank" rel="noopener noreferrer">
              <img src={cycled} alt="Cycled" />
            </a>
            <a href="https://aws.amazon.com/console/" target="_blank" rel="noopener noreferrer">
              <img src={aws} alt="Amazon Web Services" />
            </a>
            <a href="https://dataloop.ai/" target="_blank" rel="noopener noreferrer">
              <img src={dataloop} alt="Dataloop" />
            </a>
            <a href="https://jarvis.playment.io/" target="_blank" rel="noopener noreferrer">
              <img src={playment} alt="Playment" />
            </a>
          </div>
        </section>

        <section className="why-choose-us">
          <div className="content">
            <div className="image">
              <img src={additionalImage} alt="Additional Image" />
            </div>
            <div className="text-content">
              <h1>Why Choose Us?</h1>
              <div className="section">
                <h3>Experienced and Dependable</h3>
                <p>Rich history of handling sensitive and large amounts of data.</p>
              </div>
              <div className="section">
                <h3>Scalability & Flexibility</h3>
                <p>Ability to deliver data annotation & Data labeling services on-demand and at scale.</p>
              </div>
              <div className="section">
                <h3>Secured</h3>
                <p>Services delivered from ISO 27001 Compliant Organization.</p>
              </div>
              <div className="section">
                <h3>In-house & Trained</h3>
                <p>In-house, Professional, Dedicated and trained teams.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Whychooseus;
