import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="w-full h-auto mt-4 max-w-screen-2xl px-7 mx-auto  flex items-center justify-between gap-6 ">
      <Link
        href="/"
        className="w-[20rem] h-14  rounded-2xl text-4xl bg-white flex items-center justify-center"
      >
        <p>Web mosiac</p>
      </Link>

      <nav className="w-full h-14 rounded-2xl text-white border-2 border-white">
        <ul className="w-fit h-full m-auto text-xl flex justify-center items-center gap-12">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Link
        href="/"
        className="w-[18rem] h-14 rounded-2xl text-2xl bg-white  flex items-center justify-center"
      >
        <p>Contact Us</p>
      </Link>
    </header>
  );
};

export default NavBar;
