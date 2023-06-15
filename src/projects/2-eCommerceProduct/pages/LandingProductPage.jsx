import { useState } from "react";
import "./LandingProduct.css";
import { data } from "../data/data";
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import avatar from "../assets/image-avatar.png";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";

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
  );
};

export const LandingProductPage = () => {
  const [products] = useState(data);
  let [value, setValue] = useState(0);
  let [amount, setAmount] = useState(0);

  const { mainImage } = products[value];
  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-10 mr-1 ml-1">
        <article>
          <div className="relative">
            <img src={mainImage} alt="" className="w-full lg:rounded-2xl" />
            <ul>
              <li>
                <button className="bg-white rounded-full p-5 shadow absolute left-2 top-1/2 -translate-y-1/2">
                  <FiChevronLeft />
                </button>
              </li>

              <li>
                <button className="bg-white rounded-full p-5 shadow absolute right-2 top-1/2 -translate-y-1/2">
                  <FiChevronRight />
                </button>
              </li>
            </ul>
          </div>
          <ul className="hidden lg:flex justify-start items-center gap-11 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-orange-500 opacity-70"
                } border-2  lg:rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img src={item.thumbnail} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>
        <article className="px-8 pb-10">
          <h2 className="bg-slate-100 py-1 px-2 text-orange-500 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
            Sneakers Company
          </h2>
          <h1 className="text-slate-900 mb-10 text-3xl lg:4xl font-bold">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-slate-600 mb-10 leading-relaxed">
            {" "}
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-wrap items-center justify-between">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">$125</li>
              <li className="bg-orange-100 py-1 px-2 text-orange-500 tracking-wide text-sm font-bold inline-block rounded shadow">
                50%
              </li>
            </ul>
            <p className="text-slate-600 text-sm">
              <s>$250</s>
            </p>
          </div>

          <div className="mt-10 ">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow">
              <li
                className="cursor-pointer"
                onClick={() => setAmount(Math.max(amount - 1, 0))}
              >
                <img src={minus} alt="" />
              </li>
              <li>{amount}</li>
              <li
                className="cursor-pointer"
                onClick={() => setAmount(++amount)}
              >
                <img src={plus} alt="" />
              </li>
            </ul>
            <button className="flex items-center justify-center gap-4 bg-orange-400 py-2 px-4 text-white rounded-lg shadow mt-5 w-full">
              <AiOutlineShoppingCart /> Add to cart
            </button>
          </div>
        </article>
      </section>
    </>
  );
};
