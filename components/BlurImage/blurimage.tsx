import React, { useState } from "react";
import Image from "next/image";

interface BlurImageProps {
  image: string;
  width: number;
  height: number;
  alt: string;
  zoomin?: boolean;
  rounded?: string;
}

const BlurImage: React.FC<BlurImageProps> = ({
  image,
  width,
  height,
  alt,
  zoomin,
  rounded,
}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={image}
        width={width}
        height={height}
        loading="lazy"
        alt={alt}
        className={`w-full h-full object-contain ${
          zoomin ? "hover:scale-110" : ""
        } transition-all duration-300 ${
          isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0"
        } ${rounded ?? ""}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default BlurImage;
