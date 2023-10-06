import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src={require("@/app/_assets/Profile.png")}
      alt=""
      className="rounded-full"
    />
  );
}
