import HeroSection from "../components/HeroSection";
import Services from "../views/Services";
import Work from "../views/Work";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="w-full md:h-[600px] bg-white px-0 md:px-5 lg:px-8 py-5 md:py-0 items-center flex flex-col md:flex-row justify-center items-center">
        <div className="h-[200px] w-[200px] md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px] bg-[#fcb900] rounded-[50%] max-w-[500px] aspect-square flex justify-center items-center">
          <span className="absolute text-4xl md:text-8xl">
            No <br />
            Star-
            <br />
            Dom
          </span>
        </div>
        <div className="w-auto p-9 md:ml-20 text-justify md:text-left">
          <div>
            <h1 className="text-[20px] md:[25px] lg:text-[30px] text-yellow-500">
              We believe in creativity that awards
              <br /> businesses with results
            </h1>
          </div>
          <div>
            <p className="text-[15spx] md:[20px] lg:text-[25px] font-light">
              Lemon is astrategic, creative and proactive advertising and <br />{" "}
              communications agency that helps brands and companies grow.
              <br />
              We are based in Mauritius – and wherever we find inspiration.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[100px] w-full bg-black">
        <h1 className="text-white text-4xl p-[30px] pl-[120px]">SERVICES</h1>
      </div>
      <Services/>
      <div className="h-[100px] w-full bg-black">
        <h1 className="text-white text-4xl p-[30px] pl-[120px]">WORK</h1>
      </div>
      <Work/>
      {/* <ContactUs/> */}
    </div>
  );
};

export default Home;
