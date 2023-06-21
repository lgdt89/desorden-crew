import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div className="w-full h-auto pt-[100px] pb-[100px] bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-10 items-center place-items-center">
      <ServiceCard customCLass='bg-[#008E8A]' description='Brand & Communication Strategy' image='/img/icon_1.svg'/>
      <ServiceCard customCLass='bg-[#008E8A]' description='Advertising' image='/img/icon_2.svg'/>
      <ServiceCard customCLass='bg-[#008E8A]' description='Digital & Social Media' image='/img/icon_3.svg'/>
      <ServiceCard customCLass='bg-[#008E8A]' description='Branding & Packaging' image='/img/icon_4.svg'/>
      <ServiceCard customCLass='bg-[#008E8A]' description='Annual Reports & Newsletters' image='/img/icon_5.svg'/>
      <ServiceCard customCLass='bg-[#008E8A]' description='Brochures & Flyers' image='/img/icon_6.svg'/>
    </div>
  )
}

export default Services