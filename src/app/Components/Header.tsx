'use client';

import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center gap-2">
        <Image src="/next.svg" alt="Logo" width={80} height={60} />
        {/* Optional text next to logo */}
        {/* <span className="text-lg font-semibold">MyTeam</span> */}
      </div>

      {/* Title in the center (visually centered) */}
      <h1 className="text-2xl font-bold text-center flex-1 text-gray-800">
        Our AirSafa Story
      </h1>

      {/* Empty div to balance flex layout */}
      <div className="w-[40px]" />
    </header>
  );
};

export default Header;