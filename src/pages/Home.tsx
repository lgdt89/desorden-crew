import HeroSection from "../components/HeroSection";
import Services from "../views/Services";
import WorkSection from "../views/WorkSection";

const Home = () => {
 
  return (
    <div>
      <HeroSection />
      <div className="w-full md:h-[500px] bg-[#dfece6] px-0 md:px-5 lg:px-8 py-5 md:py-0 flex flex-col md:flex-row justify-center items-center">
  <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-end px-[20px]">
    <h1 className="text-center md:text-left mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
      If <br />
      you're going <br />
      to do something, <br />
      do it right.
    </h1>
  </div>
  <div className="w-full md:w-1/2 h-full flex flex-col justify-center pl-[10px] pr-[100px]">
    <p className="font-primary text-center md:text-justify text-lg md:text-xl lg:text-2xl text-yellow-500">
      It is proven that creativity is closely linked to positive business results.
    </p>
    <p className="font-secondary text-center md:text-justify text-base md:text-lg lg:text-xl font-light">
      Desorden is a Boutique advertising and strategic communications agency with a creative and proactive approach that helps brands and companies grow.
    </p>
  </div>
</div>
      <div className="h-[100px] w-full bg-[#215a6d]">
        <h2 className="text-white text-4xl p-[30px] pl:[50px] md:pl-[120px]">SERVICES</h2>
      </div>
      <Services />
      <div className="h-[100px] w-full bg-[#215a6d]">
        <h2 className="text-white text-4xl p-[30px] pl:[50px] md:pl-[120px]">WORK</h2>
      </div>
      <WorkSection />
    </div>
  );
};

export default Home;
