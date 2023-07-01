import HeroSection from "../components/HeroSection";
import Services from "../views/Services";
import WorkSection from "../views/WorkSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="w-full md:h-[500px] bg-[#dfece6] px-0 md:px-5 lg:px-8 py-5 md:py-0 items-center flex flex-col md:flex-row justify-center items-center">
        <div className="w-[50%] h-[100%] items-center text-[40px] flex justify-center md:justify-end md:text-[70px] px-[20px]">
          <h1 className="text-center md:text-left mb-[20px]">
            {" "}
            If <br />
            you're going <br />
            to do something,
            <br /> do it right.
          </h1>
        </div>
        <div className="w-[50%] h-[100%] flex flex-col justify-center  px-[20px]">
          {" "}
          <p className="font-primary text-center md:text-justify text-[20px] lg:text-[30px] text-yellow-500">
            It is proven that creativity is closely
            <br /> linked to positive business results.
          </p>
          <p className="font-secondary text-center md:text-justify text-[15spx] md:[20px] lg:text-[25px] font-light">
            Desorden is a Boutique advertising <br /> and strategic
            communications agency with a creative
            <br />
            and proactive approach that helps brands and companies grow
          </p>
        </div>
      </div>
      <div className="h-[100px] w-full bg-[#215a6d]">
        <h2 className="text-white text-4xl p-[30px] pl-[120px]">SERVICES</h2>
      </div>
      <Services />
      <div className="h-[100px] w-full bg-[#215a6d]">
        <h2 className="text-white text-4xl p-[30px] pl-[120px]">WORK</h2>
      </div>
      <WorkSection />
    </div>
  );
};

export default Home;
