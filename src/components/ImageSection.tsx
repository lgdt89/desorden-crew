interface ImageSectionProps{
  image1:string,
  image2?: string
}
const ImageSection = ({ image1, image2 }:ImageSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      {image1 && (
        <img src={image1} className={image2 ? "w-full md:w-1/2" : "w-full"} />
      )}

      {image2 && (
        <img src={image2} className={image1 ? "w-full md:w-1/2" : "w-full"} />
      )}
    </div>
  );
};

export default ImageSection;