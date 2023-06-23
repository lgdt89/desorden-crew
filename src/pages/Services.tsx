import ServicesSection from "../components/ServicesSection"

const Services = () => {
  return (
    <div className="flex flex-col gap-28 justify-center items-center bg-black py-[20px] md:py-[100px]">
      <ServicesSection image="/img/data_01.jpg" />
      <ServicesSection image="/img/data_01.jpg" customClass="flex-row-reverse" />
      <ServicesSection image="/img/data_01.jpg"/>
      <ServicesSection image="/img/data_01.jpg"customClass="flex-row-reverse"/>
      <ServicesSection image="/img/data_01.jpg"/>
      <ServicesSection image="/img/data_01.jpg" customClass="flex-row-reverse"/>
    </div>
  )
}

export default Services