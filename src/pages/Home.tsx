import HeroSection from "../components/HeroSection";
import Services from "../views/Services";
import Work from "../views/Work";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="w-full md:h-[700px] bg-white px-8 items-center flex flex-col md:flex-row justify-center items-center">
        <div className="h-[200px] w-[200px] md:h-[400px] md:w-[400px] bg-[#fcb900] rounded-[50%] max-w-[500px] aspect-square flex justify-center items-center">
          <span className="absolute text-4xl md:text-8xl">
            No <br />
            Star-
            <br />
            Dom
          </span>
        </div>
        <div className="ml-8 w-auto pl-12">
          <div>
            <h1 className="text-[40px] text-yellow-500">
              We believe in creativity that awards
              <br /> businesses with results
            </h1>
          </div>
          <div>
            <p className="text-[24px] font-light">
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
