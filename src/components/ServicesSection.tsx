const ServicesSection = ({ customClass, customStyle }: any) => {
  return (
    <div
      className={`${customClass} my-24 flex flex-col md:flex-row w-80 md:w-full h-80 md:h-300 self-center px-[50px]`}
      style={customStyle}
    >
      <div className="w-full md:w-1/2 text-white">
        <h1 className="text-3xl">TITLE OF THE SERVICES</h1>
        <br />
        <p>
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
        className="w-full md:w-1/2 md:mx-[20px]"
        src="/img/data_01.jpg"
        alt="Service Image"
      />
    </div>
  );
};

export default ServicesSection;
