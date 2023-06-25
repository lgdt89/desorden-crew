interface ServiceCardProps {
  image?: string;
  description?: string;
  customCLass?: string;
  id?:string
  onClick?: () => void;
}
const ServiceCard = ({ image, description, customCLass,onClick }: ServiceCardProps) => {
  return (
    <div className="flex flex-col  items-center" onClick={onClick}>
      <div
        className={`h-[150px] w-[150px] flex rounded-full transition ease-in-out delay-125 hover:-translate-y-1 hover:scale-125 hover:duration-200 ${customCLass}`}
      >
        <img src={image} className="self-center"/>
      </div>
      <p className="self-center mt-8 text-[18px] md:text-[22px] lg:text-[25px] text-center text-white">{description}</p>
    </div>
  );
};

export default ServiceCard;
