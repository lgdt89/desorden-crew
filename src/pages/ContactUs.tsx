const ContactUs = () => {
  return (
    <div className="bg-gray-500 w-full h-[600px] text-white flex justify-center">
      <div className="w-[50%] flex items-center">
        <img src="/img/img-3.jpeg" className="w-[50%] h-[50%]" />
        <div className="w-[50%]">
        <p>
          We're not remote, we're close at hand, ready to take a phone call or
          meet you for a chat any time.
        </p>
        <p>
          Take time to squeeze us in. Lemon Agency Ltd. P.O. Box 53, Vacoas,
          Mauritius T +230 606 0264 E contact@lemonagency.com
        </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 auto-rows-min	content-center gap-4 auto-cols-[100px]">
        <input type="text" className="h-[40px]" placeholder="First Name" />
        <input type="text" className="h-[40px]" placeholder="Last Name" />
        <input
          type="text"
          className="col-span-2 h-[40px]"
          placeholder="Email"
        />
        <textarea className="col-span-2 h-[200px]" />
        <button className="self-center w-full bg-white text-black">
          submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
