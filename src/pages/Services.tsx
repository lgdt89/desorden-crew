import ServicesSection from "../components/ServicesSection"

const Services = () => {
  return (
    <div className="flex flex-col justify-center bg-black pt-[100px]">
      <ServicesSection customClass=""/>
      <ServicesSection customClass="md: flex-row-reverse" customStyle={{flexDirection:"row-reverse"}} />
      <ServicesSection customClass=""/>
      <ServicesSection customClass="md: flex-row-reverse" />
      <ServicesSection customClass=""/>
      <ServicesSection customClass="md: flex-row-reverse" />
    </div>
  )
}

export default Services