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
      <div
        className="flex items-center justify-between w-full group"
        onClick={() => setIsOpen(open => !open)}
      >
        <h2 className="font-semibold group-hover:text-purple">{title}</h2>
        <Image src="/images/icon-plus.svg" alt="Plus icon" width={24} height={24} />
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
