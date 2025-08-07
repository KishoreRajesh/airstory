'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface HoverScaleWithFloatingImageProps {
  text: string;
  imageSrc: string;
  imageAlt: string;
}

const HoverScaleWithFloatingImage: React.FC<HoverScaleWithFloatingImageProps> = ({
  text,
  imageSrc,
  imageAlt,
}) => {
  const [isScaled, setIsScaled] = useState(false);

  const handleClick = () => {
    setIsScaled(!isScaled);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-8">
      {/* Text Section (Left) */}
      <div
        className={`flex-1 transition-transform duration-300 cursor-pointer ${
          isScaled ? 'scale-105' : 'hover:scale-105'
        }`}
        onMouseEnter={() => setIsScaled(true)}
        onMouseLeave={() => setIsScaled(false)}
        onClick={handleClick}
      >
        <p className="text-lg">{text}</p>
      </div>

      {/* Image Section (Right) */}
      <div className="flex-1 w-full md:w-auto flex justify-center md:justify-end">
        <div className="relative w-[300px] h-[200px]">
          <div className="absolute inset-0 animate-float shadow-lg shadow-gray-400/30 rounded-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="rounded-2xl object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverScaleWithFloatingImage;