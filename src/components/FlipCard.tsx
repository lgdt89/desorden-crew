interface FlipCardProps {
  image?: string;
  name?: string;
  ocupation?: string;
  description?: string;
  buttonMsg?: string;
}

const ServiceCard = ({ image, name, ocupation, description, buttonMsg }: FlipCardProps) => {
  return (

    <div className="bg-transparent group w-[300px] h-[400px] md:w-[260px] md:h-[380px] lg:w-[300px] lg:h-[400px] perspective">
      <div className="relative w-full h-[450px] transition-all duration-1000 preserve-3d group-hover:my-rotate-y-180">
        <div className="absolute w-full text-center h-[450px] backface-hidden">
          <img src={image} className="h-[450px] w-full object-cover"/>
          <p className="text-xl">{name}</p>
          <p className="font-light text-[15px]">{ocupation}</p>
        </div>
        <div className="absolute py-[8px] px-[14px] text-left bg-yellow-500 w-full h-[530px] lg:h-[480px] backface-hidden my-rotate-y-180">
          <h1 className="text-[25px] md:text-[20px]  mt-[3px]">{name}</h1>
          <p className="text-[18px] md:text-[15px] font-light pb-[6px]">{ocupation}</p>
          <p className="text-[18px] md:text-[15px] text-justify font-light pb-[10px] ">{description}</p>
          <button className="bg-white px-[10px] py-[6px] ">{buttonMsg}</button>
        </div>
      </div>
    </div>

  );
};

export default ServiceCard;

