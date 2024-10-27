"use client";

import Link from "next/link";
import React, { useRef } from "react";

const ErrorPage = () => {
  // Create a reference to the main container

  return (
    <main className="bg-[#141414] min-h-screen">
      <div className="text-center flex flex-row justify-center items-center text-white font-semibold text-[120px] tracking-tighter leading-[80px]">
        YOU CLICKED ON MOCK DATA!
      </div>
      <p className=" flex flex-row justify-center items-center text-mono text-white relative top-[790px]">
        404 Error: What you clicked on was Mock Data
      </p>
      <p className=" flex flex-row justify-center items-center text-mono text-blue-500 underline relative top-[800px]">
        <Link href="/landing-page">Click here to return</Link>
      </p>
    </main>
  );
};

export default ErrorPage;
