import { useState } from "react";
import "./LandingProduct.css";
import { data } from "../data/data";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";

import Lightbox from "../components/LightBox";
import Header from "../components/Header";



export const LandingProductPage = () => {
  const [products] = useState(data);
  let [value, setValue] = useState(0);
  let [amount, setAmount] = useState(0);
  let [slideIndex, setSlideIndex] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);
  const { mainImage } = products[value];

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };
  return (
    <>
      <Header />

      {showLightbox && (
        <Lightbox
          products={products}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          setShowLightbox={setShowLightbox}
        />
      )}

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-20 ">
        <article>
          <div className="lg:hidden">
            {products.map((item, index) => (
              <div key={index} className={slideIndex==index+1?"relative":"hidden"}>
                <img src={item.mainImage} alt="" className="w-full lg:rounded-2xl" />
                <ul className="lg:hidden">
                  <li>
                    <button
                      onClick={previousSlide}
                      className="bg-white rounded-full p-5 shadow absolute left-2 top-1/2 -translate-y-1/2"
                    >
                      <FiChevronLeft />
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={nextSlide}
                      className="bg-white rounded-full p-5 shadow absolute right-2 top-1/2 -translate-y-1/2"
                    >
                      <FiChevronRight />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>

{/* large screen product image */}
          <div className="hidden lg:block">
            <img
              src={mainImage}
              alt=""
              className="w-full lg:rounded-2xl cursor-pointer"
              onClick={() => setShowLightbox(true)}
            />
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
          <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
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

          <div className="mt-10 lg:flex items-center justify-between gap-2 ">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
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
            <button className="flex items-center justify-center gap-4 bg-orange-400 py-2 px-4 text-white rounded-lg shadow mt-5 w-full lg:flex-1 lg:mt-0 hover:bg-orange-600 transition-all duration-200">
              <AiOutlineShoppingCart /> Add to cart
            </button>
          </div>
        </article>
      </section>
    </>
  );
};
