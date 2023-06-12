import transformMobile from "../assets/mobile/image-transform.jpg";
import transformDesktop from "../assets/desktop/image-transform.jpg";

const Transform = () => {
  return (
    <>
      <section className="lg:flex flex-row-reverse items-center 2xl:max-w-8xl 2xl:mx-auto">
        <div>
          <picture>
            <source media="(min-width: 768px)" srcSet={transformDesktop} />
            <img src={transformMobile} alt="" className="w-full" />
          </picture>
        </div>

        <div className="p-5 text-center lg:text-left lg:w-1/2 lg:p-10">
          <h2 className="text-2xl my-1 lg:text-4xl">Transform your brand</h2>
          <p className="mb-5">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="btn-transform">Learn More</button>
        </div>
      </section>
    </>
  );
};

export default Transform;
