import ServicesSection from "../components/ServicesSection"

const Services = () => {
  return (
    <div className="flex flex-col justify-center bg-black pt-[100px]">
      <ServicesSection customClass=""/>
      <ServicesSection customClass="" reverse/>
      <ServicesSection customClass=""/>
      <ServicesSection customClass="" reverse/>
      <ServicesSection customClass=""/>
      <ServicesSection customClass="" reverse/>
    </div>
  )
}

export default Services