import React from 'react'
import { useParams } from 'react-router-dom';
import ImageSection from '../components/ImageSection';
import ProjectCard from '../components/ProjectCard';

export const WorkDetail = () => {
    const params = useParams()
    console.log(params)
    // console.log("props", params.projectName)
  return (

    <div> 
      <div className="h-[100px] w-full bg-black #215a6d flex flex-row items-center justify-between"> 
        <h1 className="w-[50%] text-white font-primary text-4xl p-[30px]">{params.projectName}</h1>
        <h3 className="w-[50%] text-white font-secondary text-2xl">subtitle example</h3>
      </div>
      
      <section className="w-full">
        <img className="w-full" src="https://sed.pe/wp-content/uploads/2023/06/Della_Fruta_web_proyectos_01-1536x674.jpg"/>
      </section>

      <section className="w-full text-white font-secondary bg-black flex flex-row gap-10 py-20 px-10">
        <div className="w-[50%] h-full text-sm flex flex-row gap-10 self-end">
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
        <div className="w-[50%] text-xl">
          <p>Hay solo una cosa que nos gusta más que comer helados: Diseñar los empaques para una marca de helados. Della Fruta nació con la intención de ofrecer helados bien hechos, sin ahorrar en ingredientes, sin aire y con mucha fruta. El brief estaba más claro que el agua: un helado premium con mucha, muchísima fruta. El diseño debía responder a eso y diferenciarse de la competencia en el punto de venta.
          <br/> <br/>
            Como suele pasar, la solución estaba en descubrir la ventaja diferencial y hacerla evidente. Después de analizar cómo se comportaban las marcas de la competencia, vimos la oportunidad de poner a la fruta como protagonista de los empaques y decidimos aprovecharla.</p>
        </div>
      </section>

      <section className="w-full">
        <ImageSection 
          image1 = "https://sed.pe/wp-content/uploads/2023/06/Della_Fruta_web_proyectos_02-1536x674.jpg"
        />
        <ImageSection 
          image1 = "https://sed.pe/wp-content/uploads/2023/06/Della_Fruta_web_proyectos_05.jpg"
          image2 = "https://sed.pe/wp-content/uploads/2023/06/Della_Fruta_web_proyectos_06.jpg"
        />
        <ImageSection
          image1 = "https://sed.pe/wp-content/uploads/2023/06/Della_Fruta_web_proyectos_03.jpg"
          image2 = "https://sed.pe/wp-content/uploads/2023/06/Della_Fruta_web_proyectos_04.jpg"
        />
        <ImageSection
          image1 = "https://sed.pe/wp-content/uploads/2023/06/Della_Fruta_web_proyectos_07-1536x674.jpg"
        />
      </section>

      <section className="w-full h-[450px] bg-black">
        <div className="h-[90px] w-full flex items-center pl-6">
          <h3 className="text-gray-300 font-secondary text-2xl">Ver otros proyectos</h3>
        </div>
        <div className="flex w-full h-full flex-row gap-6 px-6">

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
