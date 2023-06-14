import { useState } from "react";
import "./LandingProduct.css";
import { data } from "../data/data";
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatar from "../assets/image-avatar.png";
import minus from "../assets/icon-minus.svg"
import plus from "../assets/icon-plus.svg"


const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-4">
          <img src={logo} alt="" />
          <nav>
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
                <AiOutlineShoppingCart />
              </button>
            </li>
            <li>
              <img src={avatar} alt="" className="w-10" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export const LandingProductPage = () => {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);

  const { mainImage } = products[value];
  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 mr-1 ml-1">
        <article>
          <img src={mainImage} alt="" className="w-full rounded-2xl" />
          <ul className="flex justify-start items-center gap-11 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={
                  `${index===value && "border-orange-500 opacity-70"} border-2  rounded-2xl overflow-hidden cursor-pointer`
                }
              >
                <img src={item.thumbnail} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Sneakers Company</h2>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>  These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
  <div>
    <ul>
        <li>$125</li>
        <li>50%</li>
    </ul>
    <p><s>$250</s></p>
  </div>

  <div>
    <ul>
        <li><img src={minus} alt="" /></li>
        <li>{amount}</li>
        <li><img src={plus} alt="" /></li>
    </ul>
    <button>
        <AiOutlineShoppingCart/> Add to cart
    </button>
  </div>
        </article>
      </section>
    </>
  );
};
