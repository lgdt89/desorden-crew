
const ImageSection = ({ image1, image2 }) => {
  return (
    <div className="flex">
      {image1 && (
        <img src={image1} className={image2 ? "w-1/2" : "w-full"} />
      )}

      {image2 && (
        <img src={image2} className={image1 ? "w-1/2" : "w-full"} />
      )}
    </div>
  );
};

export default ImageSection;