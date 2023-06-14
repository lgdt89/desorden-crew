interface ServiceCardProps {
  image?: string;
  description?: string;
  customCLass?: string;
}
const ServiceCard = ({ image, description, customCLass }: ServiceCardProps) => {
  return (
    <div className="flex flex-col  items-center">
      <div
        className={`h-[230px] w-[230px] rounded-full transition ease-in-out delay-125 hover:-translate-y-1 hover:scale-125 hover:duration-200 ${customCLass}`}
      >
        {image}
      </div>
      <p className="self-center mt-8 text-[18px] md:text-[22px] lg:text-[25px] text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
