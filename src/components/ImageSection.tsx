interface ImageSectionProps{
  image1?:string,
  image2?: string
  image3?: string
  showVideo?:boolean
  video1?:string
}
const regex = /\.mp4/;
const ImageSection = ({ image1, image2,image3, video1, showVideo = false }:ImageSectionProps) => {
  console.log("show", video1)
  return (
    <div className="flex flex-col md:flex-row">
      {image1 ? (
        <img src={image1} className={image2 ? "w-full md:w-1/3" : "w-full"} />
      ) : (showVideo && <video className="w-full w-full" autoPlay muted loop>
        <source src={video1} type="video/mp4"/>
      </video>)}

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