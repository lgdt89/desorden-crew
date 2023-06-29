import ServicesSection from "../components/ServicesSection";

const Services = () => {
  return (
    <section className="flex flex-col gap-28 justify-center items-center bg-[#215a6d] py-[20px] md:py-[100px]">
      <ServicesSection
        image="/img/BrandCommunicationStrategy.png"
        id="primera_seccion"
        title="Brand & Communication Strategy"
      />

      <ServicesSection
        image="/img/DigitalSociaMedia.png"
        id="segunda_seccion"
        customClass="flex-row-reverse"
        title="Digital & Social Media"
        isReverseSection
      />
      <ServicesSection
        image="/img/CreativityContent.png"
        id="tercera_seccion"
        title="Creativity and Content"
      />
      <ServicesSection
        image="/img/MalingNewsletters.png"
        id="cuarta_seccion"
        title="Maling & Newsletters"
        customClass="flex-row-reverse"
        isReverseSection
      />
      <ServicesSection
        image="/img/PhotoShoot.png"
        id="quinta_seccion"
        title="Photo Shoot"
      />
      <ServicesSection
        image="/img/data_01.jpg"
        id="sexta_seccion"
        title="Audiovisual Production"
        customClass="flex-row-reverse"
        isReverseSection
      />
    </section>
  );
};

export default Services;
