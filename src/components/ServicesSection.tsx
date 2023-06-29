interface ServiceSectionProps{
  customClass?:string,
  image: string,
  id?: string
  title?: string
  isReverseSection?:boolean
}

const ServicesSection = ({image, id, title,isReverseSection}: ServiceSectionProps) => {
  return (

     <div
      className={`
        w-full h-full flex flex-col items-stretch	 my-5 md:h-300 [&>div,img]:max-h-[325px]
          ${isReverseSection ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-1
        px-[50px]`}
     
    >
      <div
        className={`w-full md:w-1/2 text-white justify-between  ${isReverseSection ? "pl-[30px]" : "pr-[30px]"}`}
        id={id}
      >
        <h1 className="text-5xl font-primary ">{title}</h1>
        <br />
        <p className="font-secondary text-2xl">
          Hoy en día obtener data es más sencillo, todos hemos escuchado que cada paso que se hace puede ser medible,
          pero ¿de qué sirve toda esta data si no se interpreta correctamente?
          <br />
          <br />
          Al desarrollar esta estrategia nos enfocamos en entender cada indicador, la extracción del mismo y la
          entrega más eficiente a través de diferentes tipos de reportes, haciendo, de esta forma, que la toma de
          decisiones en conjunto con cliente, sea más práctico, coherente y efectiva.
        </p>
      </div>
      <img className="w-full md:w-[48vw]" src={image} alt="Service Image" style={{ flex: 1 }} />
    </div>
  );
};

export default ServicesSection;
