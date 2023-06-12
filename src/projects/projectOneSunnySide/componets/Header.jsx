import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";

const Header = ({ isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth > 768) {
  //     setIsOpen(true);
  //   } else {
  //     setIsOpen(false);
  //   }
  // }, []);



  return (
    <>
      <header className="absolute w-full flex items-center justify-between p-5">
        <div>
          <Logo />
        </div>

        {isOpen && (
          <nav>
            <Navbar />
          </nav>
        )}

        <div className="md:hidden">
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </>
  );
};

export default Header;
