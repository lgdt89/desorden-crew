import React from 'react';

const HeroSection = () => {
  return (
    <section>
      <div className="relative">
        <iframe
          className="w-full h-auto"
          src="https://www.youtube.com/embed/VIDEO_ID"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default HeroSection;