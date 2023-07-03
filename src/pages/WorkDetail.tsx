import {  useLocation } from 'react-router-dom';
import ImageSection from '../components/ImageSection';
import ProjectCard from '../components/ProjectCard';

export const WorkDetail = () => {
    const location = useLocation()
    const {projectName, projectDescription,images} = location?.state
    console.log("props", images)

  return (

    <div> 
      <section className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 h-[600px] flex justify-center font-roman text-6xl items-center">
        
          <h1 className='text-white'>{projectName}</h1>
      
        {/* <img className="w-full" src="https://sed.pe/wp-content/uploads/2023/06/Della_Fruta_web_proyectos_01-1536x674.jpg"/> */}
      </section>

      <section className="w-full text-white font-secondary bg-black flex flex-col-reverse md:flex-row gap-10 py-20 px-10">

        <div id="projectInfo" className="w-full md:w-[50%] h-full text-sm flex flex-row gap-10 self-end">
          <div className="w-[50%]">
            <h3 className="text-gray-500 mb-4">Services</h3>
            <h4 className="mb-6">Branding</h4>
            <ul>
              <li>Director: Roberto Aasdd</li>
              <li>Supervisor: Jose Aasdd</li>
              <li>Director: Ricardo Dddad</li>
            </ul>

          </div>
          <div className="w-[50%]">
            <h3 className="text-gray-500 mb-4">Industria</h3>
            <ul>
              <li>Tecnología</li>
              <li>Educación</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[50%] text-xl">
          <p>{projectDescription}</p>
          {/* <p>Hay solo una cosa que nos gusta más que comer helados: Diseñar los empaques para una marca de helados. Della Fruta nació con la intención de ofrecer helados bien hechos, sin ahorrar en ingredientes, sin aire y con mucha fruta. El brief estaba más claro que el agua: un helado premium con mucha, muchísima fruta. El diseño debía responder a eso y diferenciarse de la competencia en el punto de venta.
          <br/> <br/>
            Como suele pasar, la solución estaba en descubrir la ventaja diferencial y hacerla evidente. Después de analizar cómo se comportaban las marcas de la competencia, vimos la oportunidad de poner a la fruta como protagonista de los empaques y decidimos aprovecharla.</p> */}
        </div>
      </section>

      <section className="w-full">
        <ImageSection 
          image1 = {images.img1}
          // "https://sed.pe/wp-content/uploads/2023/06/Della_Fruta_web_proyectos_02-1536x674.jpg"
        />
        <ImageSection 
          image1 = {images.img2}
          image2 = {images.img3}
        />
        <ImageSection
          image1 = {images.img4}
          image2 = {images.img5}
        />
        <ImageSection
          image1 = {images.img6}
        />
      </section>

      <section className="w-full h-full bg-black">
        <div className="h-[90px] w-full flex items-center pl-6">
          <h3 className="text-gray-300 font-secondary text-2xl">Ver otros proyectos</h3>
        </div>
        <div className="flex w-full flex-col md:flex-row gap-6 gap-y-14 px-6">

          <ProjectCard 
            title = "Moena"
            description = "Alquimia Artesanal"
            image ="https://sed.pe/wp-content/uploads/2021/09/Moena-1-1536x1536.jpg"
            href="#"
          />
          <ProjectCard 
            title = "Moena"
            description = "Alquimia Artesanal"
            image ="https://sed.pe/wp-content/uploads/2021/09/Moena-1-1536x1536.jpg"
            href="#"
          />
          <ProjectCard 
            title = "Moena"
            description = "Alquimia Artesanal"
            image ="https://sed.pe/wp-content/uploads/2021/09/Moena-1-1536x1536.jpg"
            href="#"
          />
          <ProjectCard 
            title = "Moena"
            description = "Alquimia Artesanal"
            image ="https://sed.pe/wp-content/uploads/2021/09/Moena-1-1536x1536.jpg"
            href="#"
          />

        </div>
      </section>

    </div>

  )
}
