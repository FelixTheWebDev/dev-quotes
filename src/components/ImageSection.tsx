import Image from "next/image";

interface ImageSectionProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  src = "/img/funny_developer.png",
  alt = "Funny developer image",
  width = 290,
  height = 290,
}) => {
  return (
    <div className="image-container">
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className="rounded mb-2" 
        priority 
      />
    </div>
  );
};

export default ImageSection;