interface ImageSectionProps{
  image1?:string,
  image2?: string,
  image3?: string
}
const regex = /\.mp4/;
const ImageSection = ({ image1, image2,image3}:ImageSectionProps) => {
  // console.log("show", video1)
  return (
    <div className="flex flex-col md:flex-row">
      {/*{image1 ? (
        <img src={image1} className={image2 ? "w-full md:w-1/3" : "w-full h-[290px] object-cover"} />
      ) : (showVideo && <video className={image2 ? "w-full md:w-1/3" : "w-full h-[320px] object-cover"} autoPlay muted loop>
        <source src={video1} type="video/mp4"/>
      </video>)}*/}

      {image1 && (
        regex.test(image1) ? (
          <video className={image2 ? "w-full md:w-1/3" : "w-full h-[320px] object-cover"} autoPlay muted loop>
            <source src={image1} type="video/mp4"/>
          </video>
          ) : (
          <img src={image1} className={image2 ? "w-full md:w-1/3" : "w-full h-[320px]"} />
          )
      )}

      {image2 && (
        regex.test(image2) ? (
          <video className={image1 ? "w-full md:w-1/3" : "w-full h-[320px]"} autoPlay muted loop>
            <source src={image2} type="video/mp4"/>
          </video>
          ) : (
          <img src={image2} className={image1 ? "w-full md:w-1/3" : "w-full h-[320px]"} />
          )
      )}

      {image3 && (
        regex.test(image3) ? (
          <video className={image2 ? "w-full md:w-1/3" : "w-full h-[320px]"} autoPlay muted loop>
            <source src={image3} type="video/mp4"/>
          </video>
          ) : (
           <img src={image3} className={image2 ? "w-full md:w-1/3" : "w-full h-[320px]"} />
          )
      )}

    </div>
  );
};

export default ImageSection;