
import HeroSection from "../components/HeroSection";
import Services from "../views/Services";
import Work from "../views/Work";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="w-full md:h-[500px] bg-white px-0 md:px-5 lg:px-8 py-5 md:py-0 items-center flex flex-col md:flex-row justify-center items-center">
        <div className="h-[200px]  w-[50%] max-w-[500px] aspect-square flex justify-center items-center">
          <p className="absolute text-4xl md:leading-[70px] font-primary font-primary md:text-[50px] ">
          If  <br />you're going <br />to do something,<br /> do it right.
          
          </p>
        </div>
        <div className="w-auto p-5 text-justify md:text-left">
          <div>

            <h1 className="font-primary text-center md:text-justify text-[20px] lg:text-[30px] text-yellow-500">
            It is proven that creativity is closely 
              <br /> linked to positive business results.
            </h1>
          </div>
          <div>
            <p className="font-secondary text-center md:text-justify text-[15spx] md:[20px] lg:text-[25px] font-light">
            Desorden is a Boutique advertising  <br />{" "}
            and strategic communications agency  with a creative 
              <br />
              and proactive approach that helps brands and companies grow
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
    </div>
  );
};

export default Home;
