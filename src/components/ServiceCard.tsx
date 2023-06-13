interface ServiceCardProps {
  image?: string;
  description?: string;
  customCLass?: string;
}
const ServiceCard = ({ image, description, customCLass }: ServiceCardProps) => {
  return (
    <div className="flex flex-col  items-center">
      <div
        className={`h-[250px] w-[250px] rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:duration-300 ${customCLass}`}
      >
        {image}
      </div>
      <p className="self-center mt-8 text-3xl text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
