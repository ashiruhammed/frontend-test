import React from "react";
import HomeIcon from "./icon/HomeIcon";
import ReportIcon from "./icon/ReportIcon";
import ChatIcon from "./icon/ChatICon";
import BudgetIcon from "./icon/BudgetIcon";
import ProfileIcon from "./icon/ProfileIcon";

function NavBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white shadow-2xl md:shadow-none md:static">
      <ul className="flex justify-between py-6 px-6 text-xs md:flex-col md:text-xl md:gap-8 md:mt-24">
        {[
          { Icon: HomeIcon, label: "Home" },
          { Icon: ReportIcon, label: "Reports" },
          { Icon: ChatIcon, label: "Chat" },
          { Icon: BudgetIcon, label: "Budget" },
          { Icon: ProfileIcon, label: "Profile" },
        ].map((item) => (
          <li
            key={item.label}
            className="md:py-3 md:px-20 flex flex-col md:flex-row items-center gap-3">
            <item.Icon width={25} height={20} /> {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
