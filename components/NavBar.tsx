import React from "react";

function NavBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white shadow-2xl md:shadow-none md:static">
      <ul className="flex justify-between py-6 px-6 text-xs md:flex-col md:text-xl md:gap-8 md:mt-24">
        {["Home", "Reports", "Chat", "Budget", "Profile"].map((item) => (
          <li key={item} className="md:py-3 md:px-20">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
