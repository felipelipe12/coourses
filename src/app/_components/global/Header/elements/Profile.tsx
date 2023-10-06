import { useState } from "react";
import { Avatar } from "./Avatar";
import { FaGear, FaGlobe, FaPen, FaPowerOff } from "react-icons/fa6";
import Link from "next/link";

export function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={togglePopover}
        className="block h-[50px] w-[50px] rounded-full"
      >
        <Avatar />
      </button>
      {isOpen && (
        <div className="absolute right-4 mt-4 w-80 origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5">
          <div className="flex gap-4 rounded-t-xl bg-blue-400 p-4">
            <div className="h-[50px] w-[50px] rounded-full bg-white">
              <Avatar />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-md">Felipe Almeida</span>
              <span className="text-xs">felipe.lipe12.fl@outlook.com</span>
              <div className="mt-2 flex items-center gap-2">
                <span className="rounded bg-blue-900 p-1 text-xs">Senior</span>
              </div>
            </div>
            <Link
              href="/"
              className="absolute right-4 top-4 rounded bg-white p-1"
            >
              <FaPen className="text-xs" />
            </Link>
          </div>
          <div className="flex justify-center gap-8 p-4">
            <button className="rounded-md bg-gray-500 p-2">
              <FaGear className="text-md text-white" />
            </button>
            <button className="rounded-md bg-gray-500 p-2">
              <FaGlobe className="text-md text-white" />
            </button>
            <button className="rounded-md bg-red-600 p-2">
              <FaPowerOff className="text-md text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
