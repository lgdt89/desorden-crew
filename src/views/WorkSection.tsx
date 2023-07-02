import { useNavigate } from "react-router-dom";
const WorkSection = ({isFromPage}: any) => {
  const navigate = useNavigate();
  const data_navegante = {
    projectName: "Navegante",
    projectDescription:
      "By mastering these hooks, you can build complex, interactive web applications that provide a seamless user experience. Whether you're building a simple blog or a full-fledged e-commerce site, React Router's navigation hooks provide the tools you need to build your app's navigation logic. So go ahead and start exploring these hooks to take your React applications to the next level!",
    images: {
      img1: "https://res.cloudinary.com/deg0aslxu/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688303406/desorden_projects/Behance_10_mqimaw.jpg?_s=public-apps",
      img2:"https://res.cloudinary.com/deg0aslxu/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688304426/desorden_projects/Behance_01_qqj2wj.jpg?_s=public-apps",
      img3:"https://res.cloudinary.com/deg0aslxu/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688303324/desorden_projects/Behance_15_p9nts8.jpg?_s=public-apps",
      img4:"https://res.cloudinary.com/deg0aslxu/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688304615/desorden_projects/Behance_11_sjreju.jpg?_s=public-apps",
      img5:"https://res.cloudinary.com/deg0aslxu/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688304615/desorden_projects/Behance_13_etakiu.jpg?_s=public-apps",
      img6:"https://res.cloudinary.com/deg0aslxu/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688304780/desorden_projects/Behance_07_q2wnaw.jpg?_s=public-apps"
    },
  };
  return (
    <div className="h-auto pt-[50px] pb-[100px] px-[100px] w-full bg-[#dfece6]">
      <div className="grid grid-cols-3 grid-rows-3 w-full">
        <div
          className={`${isFromPage ? "m-0" : "m-2" } row-span-2 h-[600px] bg-blue-600 hover:bg-none bg-[url("https://res.cloudinary.com/deg0aslxu/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688304426/desorden_projects/Behance_01_qqj2wj.jpg?_s=public-apps")] bg-cover bg-center`}
          onClick={ isFromPage ? () => navigate("/work/navegante", { state: data_navegante }) : () =>  navigate("/work")}
        ><h1></h1>
        </div>
        <div className={`${isFromPage ? "m-0" : "m-2"} bg-red-500 row-span-2 h-[600px] bg-[url('/img/img-4.jpg')] hover:bg-none`}>
          2
        </div>
        <div className={`${isFromPage ? "m-0" : "m-2"} bg-yellow-500 h-[300px]`}>3</div>
        <div className={`${isFromPage ? "m-0" : "m-2"} bg-pink-500`}>4</div>
        <div className={`${isFromPage ? "m-0" : "m-2"} bg-cyan-500`}>5</div>
        <div className={`${isFromPage ? "m-0" : "m-2"} bg-green-500`}>6</div>
        <div className={`${isFromPage ? "m-0" : "m-2"} bg-blue-500`}>7</div>
        <div className={`${isFromPage ? "m-0" : "m-2"} bg-black col-span-2 h-[300px]`}>8</div>
        <div className={`${isFromPage ? "m-0" : "m-2"} bg-orange-500`}>9</div>
        <div className={`${isFromPage ? "m-0" : "m-2"} bg-lime-500`}>10</div>
      </div>
    </div>
  );
};

export default WorkSection;
