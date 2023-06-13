import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div className="h-auto md:h-[900px] pt-[100px] pb-[100px] w-full bg-gray-200 grid grid-cols-1 md:grid-cols-3 items-center place-items-center">
      <ServiceCard customCLass='bg-yellow-300' description='Brand & Communication Strategy'/>
      <ServiceCard customCLass='bg-red-300' description='Advertising'/>
      <ServiceCard customCLass='bg-amber-300' description='Digital & Social Media'/>
      <ServiceCard customCLass='bg-lime-300' description='Branding & Packaging'/>
      <ServiceCard customCLass='bg-cyan-300' description='Annual Reports & Newsletters'/>
      <ServiceCard customCLass='bg-emerald-300' description='Brochures & Flyers'/>
    </div>
  )
}

export default Services