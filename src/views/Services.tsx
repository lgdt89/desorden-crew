import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link"
const Services = () => {
  const servicesViewsData = [
    { description: "Brand & Communication Strategy", image: "/img/icon_1.svg", id: "primera_seccion" },
    { description: "Advertising", image: "/img/icon_2.svg", id: "segunda_seccion" },
    { description: "Digital & Social Media", image: "/img/icon_3.svg", id: "tercera_seccion" },
    { description: "Branding & Packaging", image: "/img/icon_4.svg", id: "cuarta_seccion" },
    { description: "Annual Reports & Newsletters", image: "/img/icon_5.svg", id: "quinta_seccion" },
    { description: "Brochures & Flyers", image: "/img/icon_6.svg", id: "sexta_seccion" },
  ];
  return (
    <div className="w-full h-auto pt-[100px] pb-[100px] bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-10 items-center place-items-center">
      {servicesViewsData.map((section) => 

      <HashLink to={`/services#${section.id}`} key={section.id}>
        <ServiceCard
          customCLass="bg-[#008E8A]"
          description={section.description}
          image={section.image}
          id={section.id}
          // onClick={() => navigate('/services#primera_seccion')}
        />
      </HashLink>
)}
    
    </div>
  );
};

export default Services;
