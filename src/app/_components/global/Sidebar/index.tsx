import { Accordion } from "./elements/Accordion";
import { Logo } from "./elements/Logo";
import { Option } from "./elements/Option";

import { FaLayerGroup, FaQuestion } from "react-icons/fa6";

import { useState } from "react";

const accordionList = [
  {
    title: "Category 1",
    icon: <FaLayerGroup className="text-xl" />,
    links: [
      { subtitle: "Option 1", url: "#" },
      { subtitle: "Option 2", url: "#" },
    ],
  },
];



export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className="flex h-screen w-[18rem] flex-col overflow-auto border-r px-4 py-2">
    <nav
      className={`flex h-screen transform flex-col overflow-auto border-r px-4 py-2 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-24"
      }   `}
    >
      <div className="flex">
        <Logo />
        <button onClick={toggleSidebar}>{isOpen ? "Close" : "Open"}</button>
      </div>
      <div className="flex flex-col gap-2">
        <Option
          url="/dashboard"
          name="Dashboard"
          icon={<FaLayerGroup className="text-xl" />}
        />
        <Option
          url="#"
          name="Option 1"
          icon={<FaQuestion className="text-xl" />}
        />
      </div>
      <hr className="m-4 w-auto" />
      <div className="flex flex-col gap-2">
        {accordionList.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            icon={item.icon}
            links={item.links}
          />
        ))}
      </div>
    </nav>
  );
}
