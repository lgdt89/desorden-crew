const ContactUs = () => {
  return (
    <div className="bg-black w-full h-auto lg:h-[600px] p-20 flex gap-10 lg:gap-20 justify-center flex-col lg:flex-row">
      <div className="w-full lg:w-[50%] text-justify flex items-center flex-col lg:flex-row gap-10">
        {/* <img src="/img/img-3.jpeg" className="w-[250px] h-[250px]" /> */}
        <div className="w-full lg:w-[50%] min-w-[250px]">
          <p className="text-yellow-500 text-[18px]">
            Contact us, we are just a message away!
            {/* <br /> <br />
            
            Take time to squeeze us in. */}
          </p>
          <p className="text-white text-[16px]">
            Dir: Av Francisco Lanata 116, Santiago de Surco. Lima - Perú TLF:
            +51 936 398 745
            <br />
            <b>E-MAIL:</b> creativo@desordencrew.com
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[50%] min-w-[250px] lg:max-w-[300px] xl:max-w-[500px] grid grid-cols-2 auto-rows-min content-center gap-4 auto-cols-[100px]">
        <input
          type="text"
          className="h-[40px] px-[5px] bg-transparent appearance-none border-2 leading-tight hover:border-yellow-500 focus:border-yellow-500 focus:outline-none focus:bg-white focus:shadow-yellow-900"
          placeholder="First Name"
        />
        <input
          type="text"
          className="h-[40px] px-[5px] bg-transparent appearance-none border-2 leading-tight hover:border-yellow-500 focus:border-yellow-500 focus:outline-none focus:bg-white focus:shadow-yellow-900"
          placeholder="Last Name"
        />
        <input
          type="text"
          className="col-span-2 h-[40px] px-[5px] bg-transparent appearance-none border-2 leading-tight hover:border-yellow-500 focus:border-yellow-500 focus:outline-none focus:bg-white focus:shadow-yellow-900"
          placeholder="Email"
        />
        <textarea className="col-span-2 h-[200px] px-[5px] py-2 bg-transparent appearance-none border-2 leading-tight hover:border-yellow-500 focus:border-yellow-500 focus:outline-none focus:bg-white focus:shadow-yellow-900" />
        <button className="self-center w-full bg-white hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
