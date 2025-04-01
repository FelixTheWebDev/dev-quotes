import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="flex flex-shrink-0">
      <Image src="/img/funny_developer.png" alt="Placeholder" width={300} height={300} className="rounded mb-3" />
    </div>
  );
};

export default ImageSection;
