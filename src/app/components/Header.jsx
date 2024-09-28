"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const LinkDate = [
  {
    name: "SnowMoutain",
    url: "/SnowMoutain",
  },
  {
    name: "UESTCStoryStart",
    url: "/UESTCStoryStart",
  },
  {
    name: "ChristmasRedTrip",
    url: "/ChristmasRedTrip",
  },
];
export default function Header() {
  const pathName = usePathname();

  return (
    <div className="z-10 absolute w-full bg-black">
      <div className="flex justify-between container mx-auto text-white p-8  ">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4 ">
          {LinkDate.map((item) => {
            return (
              <Link
                key={item.url}
                className={pathName === item.url ? "text-purple-500" : ""}
                href={item.url}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}