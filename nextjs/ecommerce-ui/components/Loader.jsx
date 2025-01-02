import Image from 'next/image';
import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src="/loader.gif"
        alt="loader"
        width={300}
        height={300}
        unoptimized
      />
    </div>
  );
};

export default Loader;
