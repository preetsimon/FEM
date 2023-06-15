import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatar from "../assets/image-avatar.png";


const Header = () => {
  return (
    <>
    <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
      <div className="flex items-center justify-start gap-4">
        <img src={logo} alt="" />
        <nav className="hidden">
          <ul className="flex items-center justify-start gap-4">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      <div>
        <ul className="flex items-center justify-start gap-4">
          <li>
            <button>
              <AiOutlineShoppingCart className="text-2xl text-slate-700" />
            </button>
          </li>
          <li>
            <img src={avatar} alt="" className="w-10" />
          </li>
        </ul>
      </div>
    </header>
  </>
  )
}

export default Header