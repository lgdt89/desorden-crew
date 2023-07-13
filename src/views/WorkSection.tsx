import { useNavigate } from "react-router-dom";
import { data_navegante, data_cerveza } from "../utils/projects_data";
const WorkSection = ({ isFromPage }: any) => {
  const navigate = useNavigate();
  const handleRedirectClick = ({ projectName, data }: any) => {
    isFromPage
      ? navigate(`/work/${projectName}`, { state: data })
      : navigate("/work/#top");
  };
  console.log("data", data_navegante)

  return (
   <div className="flex flex-col space-y-4 items-center h-auto pt-[50px] pb-[20px] px-[20px] md:pb-[20px] w-full bg-[#dfece6]">
      <div className="bg-red-200 w-[80%] h-auto md:max-h-[300px]" onClick={() =>
            handleRedirectClick({
              projectName: "navegante",
              data: data_navegante,
            })
          }>
        <img className="h-auto md:max-h-[300px] w-full" src="https://res.cloudinary.com/deg0aslxu/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688304426/desorden_projects/Behance_01_qqj2wj.jpg?_s=public-apps" alt="" />
      </div>
       <div className="bg-green-200 w-[80%] max-h-[300px]" onClick={() =>
            handleRedirectClick({
              projectName: "cerveza",
              data: data_cerveza,
            })
          }>
        2
      </div>
       <div className="bg-blue-200 w-[80%] max-h-[300px]">
        3
      </div>
       <div className="bg-pink-200 w-[80%] max-h-[300px]">
        4
      </div>
       <div className="bg-yellow-200 w-[80%] max-h-[300px]">
        5
      </div>
    </div>
    // <div className="h-auto pt-[50px] pb-[20px] px-[20px] md:pb-[20px] md:px-[100px] w-full bg-[#dfece6]">
    //   <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-2 w-full">
    //     <div
    //       className={`${
    //         isFromPage ? "m-0" : "m-2"
    //       } group cursor-pointer flex md:col-span-2 h-full md:h-auto 
    //       bg-blue-400 hover:bg-none bg-cover bg-center bg-[url(https://res.cloudinary.com/deg0aslxu/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688304426/desorden_projects/Behance_01_qqj2wj.jpg?_s=public-apps)]`}
          // onClick={() =>
          //   handleRedirectClick({
          //     projectName: "navegante",
          //     data: data_navegante,
          //   })
          // }
    //     >
    //       <h1 className="invisible group-hover:visible m-[20px] text-2xl">
    //         El Navegante
    //       </h1>
    //     </div>
    //     <div
    //       className={`${
    //         isFromPage ? "m-0" : "m-2"
    //       } bg-red-500 group cursor-pointer col-span-1 md:row-span-1 h-[300px] md:h-[600px] bg-[url("https://res.cloudinary.com/deg0aslxu/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688384057/desorden_projects/4_qy5zhc.jpg?_s=public-apps")] hover:bg-none`}
          // onClick={() =>
          //   handleRedirectClick({
          //     projectName: "cerveza",
          //     data: data_cerveza,
          //   })
          // }
    //     >
    //       <h1 className="invisible group-hover:visible m-[20px] text-2xl">
    //         Cerveceria
    //       </h1>
    //     </div>
    //     <div className={`${isFromPage ? "m-0" : "m-2"} bg-yellow-500`}>3</div>
    //     <div className={`${isFromPage ? "m-0" : "m-2"} bg-pink-500`}>4</div>
    //     <div className={`${isFromPage ? "m-0" : "m-2"} bg-cyan-500`}>5</div>
    //   </div>
    // </div>
  );
};

export default WorkSection;
