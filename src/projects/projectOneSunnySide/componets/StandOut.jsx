import imgStandOut from "../assets/desktop/image-stand-out.jpg";
import imgStandOutMobile from "../assets/mobile/image-stand-out.jpg";

const StandOut = () => {
  return (
    <>
      <section className="lg:flex items-center 2xl:max-w-8xl 2xl:mx-auto mx-0">
        <div>
          <picture>
            <source media="(min-width: 768px)" srcSet={imgStandOut} />
            <img src={imgStandOutMobile} alt="" className="w-full" />
          </picture>
        </div>

        <div className="p-5 text-center lg:text-left lg:w-1/2 lg:p-10 lg:ml-1">
          <h2 className="text-2xl my-5 lg:text-4xl">
            Stand out to the right audience
          </h2>
          <p className="mb-5">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="btn-standout">Learn More</button>
        </div>
      </section>
    </>
  );
};

export default StandOut;
