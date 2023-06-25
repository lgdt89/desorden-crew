import ServicesSection from "../components/ServicesSection";

const Services = () => {
  return (
    <section className="flex flex-col gap-28 justify-center items-center bg-black py-[20px] md:py-[100px]">
      <ServicesSection
        image="/img/data_01.jpg"
        id="primera_seccion"
        title="Brand & Communication Strategy"
      />

      <ServicesSection
        image="/img/data_01.jpg"
        id="segunda_seccion"
        customClass="flex-row-reverse"
        title="Advertising"
        isReverseSection
      />
      <ServicesSection
        image="/img/data_01.jpg"
        id="tercera_seccion"
        title="Digital & Social Media"
      />
      <ServicesSection
        image="/img/data_01.jpg"
        id="cuarta_seccion"
        title="Branding & Packaging"
        customClass="flex-row-reverse"
        isReverseSection
      />
      <ServicesSection
        image="/img/data_01.jpg"
        id="quinta_seccion"
        title="Annual Reports & Newsletters"
      />
      <ServicesSection
        image="/img/data_01.jpg"
        id="sexta_seccion"
        title="Brochures & Flyers"
        customClass="flex-row-reverse"
        isReverseSection
      />
    </section>
  );
};

export default Services;
