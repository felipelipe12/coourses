import Link from "next/link";
import { ReactNode } from "react";

interface NavigationProps {
  name: string;
  icon: ReactNode;
  url: string;
}

export function Option({ name, icon, url }: NavigationProps) {
  return (
    <Link href={url}>
      <div className="group w-full rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-500 active:bg-green-100 active:text-green-500">
        <div className="flex items-center gap-4">
          <div className="rounded-lg border border-gray-200 p-1 group-hover:bg-gray-200 group-active:border-green-200 group-active:bg-green-200">
            {icon}
          </div>
          <span>{name}</span>
        </div>
      </div>
    </Link>
  );
}
