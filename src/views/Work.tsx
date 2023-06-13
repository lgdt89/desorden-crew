const Work = () => {
  return (
    <div className="h-auto pt-[50px] pb-[100px] px-[100px] w-full bg-gray-200">
      <div className="grid grid-cols-3 grid-rows-3 w-full">
        <div className=" m-2 row-span-2 h-[600px] bg-[url('/img/img-1.jpg')] bg-cover">1</div>
        <div className=" m-2 bg-red-500 row-span-2 h-[600px] bg-[url('/img/img-4.jpg')] hover:bg-none ">2</div>
        <div className=" m-2 bg-yellow-500 h-[300px]">3</div>
        <div className=" m-2 bg-pink-500">4</div>
        <div className=" m-2 bg-cyan-500">5</div>
        <div className=" m-2 bg-green-500">6</div>
        <div className=" m-2 bg-blue-500">7</div>
        <div className=" m-2 bg-black col-span-2 h-[300px]">8</div>
        <div className=" m-2 bg-orange-500">9</div>
        <div className=" m-2 bg-lime-500">10</div>
        <div className=" m-2 bg-emerald-500 ">11</div>
        <div className=" m-2 bg-sky-500">12</div>
        <div className=" m-2 bg-indigo-500">13</div>
        <div className=" m-2 bg-red-500 col-span-2 h-[300px]">14</div>
        <div className=" m-2 bg-violet-500 row-span-2 h-[600px]">15</div>
        <div className=" m-2 bg-purple-500 col-span-2 h-[300px]">16</div>
        <div className=" m-2 bg-rose-500 h-[300px] ">17</div>
        <div className=" m-2 bg-[#1E293B] h-[300px]">18</div>
        <div className=" m-2 bg-[d1da99] h-[300px]">19</div>
        <div className=" m-2 bg-red-500 h-[300px]">20</div>
        <div className=" m-2 bg-blue-500 h-[300px]">21</div>
      </div>
    </div>
  );
};

export default Work;
