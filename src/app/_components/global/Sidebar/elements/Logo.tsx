import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="">
      <div className="px-4 py-2">
        <Image src={require("@/app/_assets/Logo.png")} alt="Logo" className="h-[50px]"></Image>
      </div>
    </Link>
  );
}
