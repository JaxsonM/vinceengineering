// src/pages/Home.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContentContext } from '../context/ContentContext';
import Slideshow from '../components/Slideshow';
import ReactMarkdown from 'react-markdown';

const Home: React.FC = () => {
  const context = useContext(ContentContext);

  if (!context) {
    return <div>Loading...</div>; // or handle the undefined context case appropriately
  }

  const { content, loading } = context;

  if (loading) {
    return <div>Loading...</div>;
  }

  const homeContent = content.home || {};

  return (
    <div className="flex flex-col items-center pt-24">
      <div className="flex items-center text-center p-4 text-3xl md:text-5xl font-bold mx-4">
        <img src="/images/logoAnim.gif" alt="Logo Animation" className="w-16 h-16 md:w-24 md:h-24 ml-4" />
        <h1 className="ml-2">
          VINC<span className="underline">EE</span>NGIN<span className="underline">EE</span>RING
        </h1>
      </div>
      <div className="w-full bg-cover bg-center h-[calc(70vh-10rem)]" style={{ backgroundImage: "url('/images/imageBackground.jpg')" }}>
        <Slideshow />
      </div>
      <div className="text-center p-6">
        <Link to="/contact">
          <button className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-[#1D6FC6] text-white text-lg md:text-2xl font-semibold rounded hover:bg-[#154e8b] transition duration-300 ease-in-out">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="text-image-layout">
        <div className="text-container">
          <h1 className="text-title">{homeContent.whatWeDoTitle}</h1>
          <div className="dividing-line"></div>
          <ReactMarkdown className="text-p">
            {homeContent.whatWeDoTextBody}
          </ReactMarkdown>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/Picture4.jpg')" }}></div>
      </div>
    </div>
  );
};

export default Home;
