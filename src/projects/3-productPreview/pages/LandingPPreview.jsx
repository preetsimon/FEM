import "./pPreviewLanding.css";
import productImgDsk from "../assets/image-product-desktop.jpg";
import productImgMob from "../assets/image-product-mobile.jpg";
import cartIcon from "../assets/icon-cart.svg";

function LandingPPreview() {
  return (
    <>
      <main>
        <article className="p3--product">
          <picture className="p3--product--img">
            <img src={productImgMob} alt="" />
          </picture>

          <div className="product--content">
            <p className="product--category">Preview </p>
            <h1 className="product--title">Gabrielle Essence Eau De Parfum</h1>
            {/* no multiple h1's are allowed! */}
            <p className="product--description">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex-group">
              <p className="product--discount--price">
                <span className="sr-only">Current price:</span>
                $149.99
              </p>
              <p className="product--original--price">
                <span className="sr-only">Original price:</span>
                <s>$169.99</s>
              </p>
            </div>
            <button data-icon="shopping-cart" className="add-to-cart-button">Add to Cart</button>
          </div>
        </article>
      </main>
    </>
  );
}

export default LandingPPreview;
