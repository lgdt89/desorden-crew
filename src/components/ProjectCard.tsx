interface ProjectCardProps {
  title?: string;
  image?: string;
  description?: string;
  href?:string
}
const ProjectCard = ({title, description, image, href}:ProjectCardProps) => {
	return (
		<div className="w-[100%] md:w-[25%]">
      <a className="group h-full" href={href}>
        <div className={`w-full h-96 md:h-72 text-white bg-[url("${image}")] bg-cover bg-center`}>
          <div className="bg-none w-full h-full group-hover:bg-black group-hover:bg-opacity-50 p-2">
            <h4 className="hidden group-hover:block font-primary font-bold pb-5">{title}</h4>
            <p className="hidden group-hover:block font-secondary text-sm">{description}</p>
          </div>
        </div>
      </a>
    </div>
	);
}

export default ProjectCard;