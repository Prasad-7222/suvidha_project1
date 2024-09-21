import React from 'react';
import './Nlp.css';
import Navbar from '../../HomePage-components/Navbar/Navbar';
import Footer from '../footer/footer';

const Nlp = () => {
  return (
    <div>
      <Navbar /><br />

      <div className="imagesection">
        <p className="center-text">Natural Language Processing</p>
        <img src="nlp.jpg" alt="Natural Language Processing" />
        <p className="text-right1">
          Our trained NLP annotators can help deliver language annotation workloads at scale. Irrespective of your needs ranging from question-answer systems to document classification we can help you achieve results faster from your ML and AI algorithms. Convert your unstructured data into actionable insights. Natural Language Processing services support a range of business applications, from data categorization, text annotation, helping them train chatbots.
        </p>
        <p className="text-right1">
          Our professional & dedicated team can help organizations to build new NLP applications or modernize their existing ones by adding conversational intelligence. We offer qualitative Data Annotation and data labeling services for all your NLP projects. Our trained NLP annotators can help deliver language annotation workloads at scale.
        </p>
      </div>

      <div className="threeimage">
        <div className='inside-threeimg'>
          <h1>Audio Validation & Transcription</h1>
          <img src="nlp1.jpg" alt="Image 1" />
        </div>
        <div className='inside-threeimg'>
          <h1>Sentiment & intent analysis</h1>
          <img src="nlp3.jpg" alt="Image 2" />
        </div>
        <div className='inside-threeimg'>
          <h1>Named entity recognition and Linking</h1>
          <img src="nlp2.jpg" alt="Image 3" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Nlp;
