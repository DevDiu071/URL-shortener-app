"use client";

import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import clsx from "clsx";
import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOPen] = useState(false);

  function handleMenu() {
    setMenuOPen((menu) => !menu);
  }

  return (
    <nav className=" my-4 mt-7 mx-5 relative tablet:mx-10 laptop:mx-[60px] desktop:mx-[90px]">
      <div className="flex justify-between items-center ">
        <div className="tablet:flex tablet:items-center">
          <img src="/images/logo.svg" width={121} height={33} alt="logo" />
          <ul className="tablet:flex tablet:items-center tablet:gap-x-4 tablet:ml-6 tablet:text-sm hidden">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div className="tablet:flex tablet:gap-x-4 tablet:items-center tablet:text-xs transition-all">
          {!menuOpen && (
            <FiMenu
              className="text-4xl tablet:hidden"
              onClick={() => handleMenu()}
            />
          )}
          {menuOpen && (
            <IoMdClose
              className="text-4xl tablet:hidden"
              onClick={() => handleMenu()}
            />
          )}
          <button className=" hidden tablet:block">Login</button>
          <button className=" hidden tablet:block tablet:bg-cyan tablet:text-white tablet:font-semibold tablet:py-1.5 tablet:px-4 tablet:rounded-3xl">
            Sign up
          </button>
        </div>
      </div>
      <div
        className={clsx(
          "bg-darkgrayblue tablet:hidden text-white py-12 font-semibold px-4 text-center rounded-xl mt-[60px] absolute w-full top-0 right-0 m-auto",
          { "-top-[500px] transition-all": menuOpen === false }
        )}
      >
        <ul className="flex flex-col gap-y-5 text-xl border-b border-grayishviolet pb-8">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        <div className="flex flex-col">
          <button className="text-xl mt-8">Login</button>
          <button className="bg-cyan py-2.5 rounded-3xl mt-6 text-lg ">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
