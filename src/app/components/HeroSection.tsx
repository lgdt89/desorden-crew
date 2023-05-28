import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section w-full h-[800px]">
      <video className="hero-video w-full h-auto object-cover" autoPlay muted loop>
        <source src="/test_video.mp4" type="video/mp4" />
        {/* Añade más etiquetas <source> aquí si deseas soporte para otros formatos de video */}
      </video>
    </div>
  );
};

export default HeroSection;