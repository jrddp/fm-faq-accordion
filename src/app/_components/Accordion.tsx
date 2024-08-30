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
        className="flex items-center justify-between w-full py-4 px-2 sm:px-4 group gap-8 text-left"
        onClick={() => setIsOpen(open => !open)}
      >
        <h2 className="font-semibold transition-colors group-hover:text-purple">{title}</h2>
        {isOpen ? (
          <Image src="/images/icon-minus.svg" alt="Minus icon" width={24} height={24} />
        ) : (
          <Image src="/images/icon-plus.svg" alt="Plus icon" width={24} height={24} />
        )}
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
