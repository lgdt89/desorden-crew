import video from "../assets/test_video.mp4"
const HeroSection = () => {
  return (
    <div className="hero-section w-full">
      <video className="hero-video w-full h-auto min-h-[230px] max-h-[760px] object-cover" autoPlay muted loop>
        <source src={video} type="video/mp4" />
         {/*Añade más etiquetas <source> aquí si deseas soporte para otros formatos de video */}
      </video>
    </div>
  );
};

export default HeroSection;