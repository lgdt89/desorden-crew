const ServicesSection = ({customClass, image}:string) => {
  return (
    <div className={`
        w-full h-full my-5 md:h-300 [&>div,img]:max-h-[325px]  
        flex flex-col md:flex-row md:${customClass} gap-6 md:gap-1
        px-[50px]`}>
      <div className="w-full md:w-1/2 text-white">
        <h1 className="text-3xl font-primary">TITLE OF THE SERVICES</h1>
        <br />
        <p className="font-secondary">
          Hoy en día obtener data es más sencillo, todos hemos escuchado que
          cada paso que se hace puede ser medible, pero ¿de qué sirve toda esta
          data si no se interpreta correctamente?
          <br />
          <br />
          Al desarrollar esta estrategia nos enfocamos en entender cada
          indicador, la extracción del mismo y la entrega más eficiente a través
          de diferentes tipos de reportes, haciendo, de esta forma, que la toma
          de decisiones en conjunto con cliente, sea más práctico, coherente y
          efectiva.
        </p>
      </div>
      <img
        className="w-full md:w-[48vw] md:h-[24vw] md:mx-[20px]"
        src={image}
        alt="Service Image"
      />
    </div>
  );
};

export default ServicesSection;
