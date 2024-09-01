"use client";
import Image from "next/image";
import { useState } from "react";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        className="flex items-center justify-between w-full gap-8 px-2 py-4 text-left sm:gap-0 sm:px-4 group"
        onClick={() => setIsOpen(open => !open)}
      >
        <h2 className="font-semibold transition-colors group-hover:text-purple">{title}</h2>
        <svg
          className="size-5 min-w-5 min-h-5"
          width="30"
          height="31"
          viewBox="0 0 30 31"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`transition-colors duration-300 ${
              isOpen ? "fill-dark-purple" : "fill-purple"
            }`}
            id="circle"
            fill-rule="evenodd"
            stroke="none"
            d="M 29.880001 15.5 C 29.880001 6.939587 23.217999 0 15 0 C 6.782003 0 0.12 6.939587 0.12 15.5 C 0.12 24.060413 6.782003 31 15 31 C 23.217999 31 29.880001 24.060413 29.880001 15.5 Z"
          />
          <path
            id="horizontal"
            fill="#ffffff"
            fill-rule="evenodd"
            stroke="none"
            d="M 7.56 15.5 C 7.56 16.527248 8.392751 17.360001 9.42 17.360001 L 20.58 17.360001 C 21.60725 17.360001 22.440001 16.527248 22.440001 15.5 C 22.440001 14.47275 21.60725 13.639999 20.58 13.639999 L 9.42 13.639999 C 8.392751 13.639999 7.56 14.47275 7.56 15.5 Z"
          />
          <path
            className={`transform transition-transform origin-center duration-300 ease-out ${
              isOpen ? "rotate-90" : ""
            }`}
            id="vertical"
            fill="#ffffff"
            fill-rule="evenodd"
            stroke="none"
            d="M 15 8.059999 C 13.972751 8.059999 13.14 8.89275 13.14 9.92 L 13.14 21.080002 C 13.14 22.10725 13.972751 22.940001 15 22.940001 C 16.02725 22.940001 16.860001 22.10725 16.860001 21.080002 L 16.860001 9.92 C 16.860001 8.89275 16.02725 8.059999 15 8.059999 Z"
          />
        </svg>
      </button>
      <div
        className={`w-full px-2 sm:px-4 pt-0 text-sm text-grayish-purple transition-all grid ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden [&>*]:pb-4">{children}</div>
      </div>
    </div>
  );
}
