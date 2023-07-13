import { useLocation, redirect } from "react-router-dom";
import ImageSection from "../components/ImageSection";
import { useEffect } from "react";
import { ErrorPage } from "../views/ErroPage";

export const WorkDetail = () => {
  const location = useLocation();
  const {
    projectName="",
    projectDescription,
    images,
    customBg,
    industry = "",
    services = "",
    crew,
    videos
  } = location?.state || {}
  console.log("loca", location?.state)
  if(!location?.state) return <ErrorPage/>
    console.log(videos)
  return (
    <div>
      <section
        className={`w-full ${customBg} h-[600px] flex justify-center font-roman text-6xl items-center`}
      >
        <h1 className="text-white">{projectName}</h1>
      </section>

      <section className="w-full text-white font-secondary bg-black flex flex-col-reverse md:flex-row gap-10 py-20 px-10">
        <div
          id="projectInfo"
          className="w-full md:w-[50%] h-full text-sm flex flex-row gap-10 self-end"
        >
          <div className="w-[50%]">
            <h3 className="text-gray-500 mb-4">Services</h3>
            <h4 className="mb-6">{services}</h4>
            <ul>
              <li>Creative Direction: {crew?.creative_direction}</li>
              <li>Design Direction: {crew?.design_direction}</li>
              <li>Graphic Design: {crew?.graphic_design}</li>
            </ul>
          </div>
          <div className="w-[50%]">
            <h3 className="text-gray-500 mb-4">Industry</h3>
            <ul>
              <li>{industry}</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[50%] text-xl">
          <p>{projectDescription}</p>
        </div>
      </section>

      <section className="w-full">
        {videos ?
          <ImageSection
            showVideo={projectName === "Cerveza"}
            video1={videos.video1}
          />
          :
          <ImageSection
            image1={images?.img2}
          />
        }

        <ImageSection 
          image1={images?.img2} 
          image2={images?.img3} 
          image3={images?.img2}
        />

        <ImageSection
          image1={images?.img2}
        />

        <ImageSection 
          image1={images?.img2} 
          image2={images?.img3} 
          image3={videos?.video1}
        />

        <ImageSection
          image1={images?.img4}
          image2={images?.img5}
          image3={images?.img6}
        />
        <ImageSection image1={images?.img6} />

      </section>

      {/* <section className="w-full h-full bg-black">
        <div className="h-[90px] w-full flex items-center pl-6">
          <h3 className="text-gray-300 font-secondary text-2xl">
            Ver otros proyectos
          </h3>
        </div>
        <div className="flex w-full flex-col md:flex-row gap-6 gap-y-14 px-6">
          <ProjectCard
            title="Moena"
            description="Alquimia Artesanal"
            image="https://sed.pe/wp-content/uploads/2021/09/Moena-1-1536x1536.jpg"
            href="#"
          />
          <ProjectCard
            title="Moena"
            description="Alquimia Artesanal"
            image="https://sed.pe/wp-content/uploads/2021/09/Moena-1-1536x1536.jpg"
            href="#"
          />
          <ProjectCard
            title="Moena"
            description="Alquimia Artesanal"
            image="https://sed.pe/wp-content/uploads/2021/09/Moena-1-1536x1536.jpg"
            href="#"
          />
          <ProjectCard
            title="Moena"
            description="Alquimia Artesanal"
            image="https://sed.pe/wp-content/uploads/2021/09/Moena-1-1536x1536.jpg"
            href="#"
          />
        </div>
      </section> */}
    </div>
  );
};
