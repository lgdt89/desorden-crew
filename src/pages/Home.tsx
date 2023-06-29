import HeroSection from "../components/HeroSection";
import Services from "../views/Services";
import Work from "../views/Work";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="w-full h-full md:h-[540px] bg-[#dfece6] px-0 py-14 md:px-5 lg:px-8 md:py-0 items-center flex flex-col md:flex-row justify-center items-center gap-x-6">
        <div className="w-[90%] h-[100%] items-center flex justify-center ">
          <h1 className="text-left mb-[25px] px-8 text-[40px] md:text-[50px] lg:text-[60px]">
            {" "}
            If <br />
            you're going <br />
            to do something,
            <br /> do it right.
          </h1>
        </div>
        <div className="w-[90%] h-[100%] text-justify flex flex-col justify-center  px-[20px]">
          {" "}
          <p className="font-primary pb-[10px] text-[25px] lg:text-[35px] text-yellow-500">
            It is proven that creativity is closely
            linked to positive business results.
          </p>
          <p className="font-secondary text-[18px] md:[20px] lg:text-[25px] font-light">
            Desorden is a Boutique advertising and strategic
            communications agency with a creative
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
      <Work />
    </div>
  );
};

export default Home;
