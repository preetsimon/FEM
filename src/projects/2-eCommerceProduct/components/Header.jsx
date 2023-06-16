import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import Cart from "./Cart";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      <header className="relative flex items-center justify-between lg:p-8 p-4 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-4">
          <ul className="flex items-center justify-start gap-4">
            {!isOpen && (
              <li onClick={() => setIsOpen(true)} className="lg:hidden">
                <img src={menu} alt="" className="cursor-pointer" />
              </li>
            )}
            {isOpen && (
              <li onClick={() => setIsOpen(false)} className="lg:hidden close">
                <img src={close} alt="" className="cursor-pointer w-6" />
              </li>
            )}
            <li>
              <img src={logo} alt="" />
            </li>
          </ul>

          <nav className={isOpen ? "open" :""}>
            <ul className="lg:flex-row flex-col items-center justify-start gap-4 ml-20 text-slate-600">
              <li className="cursor-pointer" >Collections</li>
              <li className="cursor-pointer">Men</li>
              <li className="cursor-pointer">Women</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </nav>
        </div>

        <div>
          <ul className="flex items-center justify-start gap-1 lg:gap-4">
            <li>
              <button onClick={() => setCartIsOpen(!cartIsOpen)}>
                <AiOutlineShoppingCart className="text-2xl text-slate-600" />
              </button>
            </li>
            <li>{cartIsOpen && <Cart />}</li>
            <li>
              <img src={avatar} alt="" className="w-12" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}