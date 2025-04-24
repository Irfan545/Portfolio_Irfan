import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" text-white flex justify-between  h-16 items-center px-4 nav-container   md:w-100%">
      <ul className=" flex justify-between items-center">
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Education</Link>
        </li>
        <li>
          <Link href="#">Experince</Link>
        </li>
        <li>
          <Link href="#">Social Media</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
