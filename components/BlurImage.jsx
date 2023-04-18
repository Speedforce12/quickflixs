import Image from "next/image";
import { useState } from "react";

export default function BlurImage({ image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className='group h-full'>
      <div className='aspect-w-1 aspect-h-1 w-full h-full overflow-hidden rounded-md bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
        <Image
          alt=''
          src={image}
          fill
          className={`
              duration-700 ease-in-out group-hover:opacity-75 object-fit h-full
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
