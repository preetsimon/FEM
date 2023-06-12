import arrow from "../assets/icon-arrow-down.svg";

const Showcase = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <section onClick={()=>setIsOpen(false)} className="showcase">
        <div className="overlay">
          <h1 className="text-4xl uppercase text-white tracking-widest p-2.5 flex items-center justify-center">
            We are creatives
          </h1>
          <img src={arrow} alt="" className="mt-20" />
        </div>
      </section>
    </>
  );
};

export default Showcase;
