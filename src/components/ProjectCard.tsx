interface ProjectCardProps {
  title?: string;
  image?: string;
  description?: string;
  href?:string
}
const ProjectCard = ({title, description, image, href}:ProjectCardProps) => {
	return (
		<div className="w-[25%] relative">
            <a className="group" href={href}>
              <img className="w-full group-hover:opacity-20 absolute" src={image} alt=""/>
              <div className="bg-black text-white p-2">
                <h4 className="font-primary font-bold pb-5">{title}</h4>
                <p className="font-secondary text-sm">{description}</p>
              </div>
            </a>
         </div>
	);
}

export default ProjectCard;