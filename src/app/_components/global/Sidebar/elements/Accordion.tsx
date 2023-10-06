import Link from "next/link";
import { useState } from "react";
import { ReactNode } from "react";

import { FaAngleRight } from "react-icons/fa6";

interface AccordionProps {
  title: string;
  icon: ReactNode;
  links: { subtitle: string; url: string }[];
}

export function Accordion({ links, icon, title }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col gap-1">
      <button
        className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className="rounded-lg border border-gray-200 p-1 group-hover:bg-gray-200">
            {icon}
          </div>
          <div>
            <span>{title}</span>
          </div>
        </div>
        <div>
          <FaAngleRight className="text-md" />
        </div>
      </button>

      {isOpen && (
        <ul className="flex flex-col gap-1">
          {links.map((link, index) => (
            <li
              key={index}
              className="rounded-md pl-8 text-gray-500 hover:bg-gray-200"
            >
              <Link href={link.url} className="flex flex-col py-2 pr-2">
                {link.subtitle}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
