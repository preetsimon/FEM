import transformMobile from "../assets/mobile/image-transform.jpg";
import transformDesktop from "../assets/desktop/image-transform.jpg";

const Transform = () => {
  return (
    <>
      <section>
        <div>
          <picture>
            <source media="(min-width: 768px" srcSet={transformDesktop} />
            <img src={transformMobile} alt="transform"></img>
          </picture>
        </div>

        <div>
          <h2>Transform your brand</h2>
          <p>
            {" "}
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
