import { FaWindowRestore } from "react-icons/fa6";
import { Profile } from "./elements/Profile";

export function Header() {
  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between">
        <div>Search</div>
        <div className="flex items-center justify-end gap-4">
          <div className="rounded-full p-3 text-gray-500 hover:bg-gray-100 hover:text-gray-500 active:bg-green-100 active:text-green-500">
            <FaWindowRestore className="text-md" />
          </div>
          <Profile />
        </div>
      </div>
    </div>
  );
}
