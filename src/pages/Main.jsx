import FavoriteMenu from "../components/FavoriteFood";
import RegularMenu from "../components/PartialMenu";
import foodbowl from "../assets/images/foodbowl.png";
import fastDelivery from "../assets/images/fast-delivery.png";
import fresh from "../assets/images/fresh.png";
import personSupport from "../assets/images/person-support.png";
import CountrySlider from "../components/CountrySlider";
import Reviews from "../components/Reviews";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";

const MainPage = () => {
  return (
    <>
      <header className="header">
        <h1>HELLO WORLD</h1>
        <Header />
      </header>

      <main className="content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__main container">
            <div className="hero__body">
              <h1 className="hero__title" id="hero-title">
                <span className="hero__title--highlight">Quick</span> and{" "}
                <span className="hero__title--highlight">
                  Tasty Food Delivered{" "}
                </span>
                with <span className="hero__title--highlight">a Dash of</span>{" "}
                Speed
              </h1>
              <a className="hero__button button button-large" href="/menu">
                Order Now
              </a>
            </div>

            <img
              src={foodbowl}
              alt="Food bowl"
              className="hero__image"
              width="500"
              height="500"
            />
          </div>
        </section>
        <section className="overlap" id="about">
          <h2 className="visually-hidden">Our Advantages</h2>
          <div className="overlap__main container">
            <ul className="list">
              <li className="list__item">
                <img
                  src={fastDelivery}
                  alt="Fast truck"
                  className="list__image"
                  width="100"
                  height="100"
                />
                <div className="list__descriptions">
                  <h3 className="list__title">Fast Delivery</h3>
                  <p className="list__text">
                    Promise To Deliver Within 30 Mins
                  </p>
                </div>
              </li>

              <li className="list__item">
                <img
                  src={fresh}
                  alt="Fresh food"
                  className="list__image"
                  width="100"
                  height="100"
                />
                <div className="list__descriptions">
                  <h3 className="list__title">Fresh Food</h3>
                  <p className="list__text">
                    Your Food Will Be Delivered 100% Fresh To Your Home.
                  </p>
                </div>
              </li>

              <li className="list__item">
                <img
                  src={personSupport}
                  alt="Fast truck"
                  className="list__image"
                  width="100"
                  height="100"
                />
                <div className="list__descriptions">
                  <h3 className="list__title">24/7 Services</h3>
                  <p className="list__text">
                    Round-the-clock support and quick resolution of your issues.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="favorite" aria-labelledby="favorite-title">
          <div className="favorite__header-inner container">
            <header className="favorite__header">
              <h2 className="favorite__title" id="favorite-title">
                Our{" "}
                <span className="favorite__title--highlight">
                  Best Delivered
                </span>{" "}
                Indian Dish
              </h2>
              <p className="favorite__text">
                It’s Not Just About Bringing You Good Food From Restaurants, We
                Deliver You Experience
              </p>
            </header>
            <FavoriteMenu />
          </div>

          <CountrySlider />
        </section>
        <section className="regular">
          <RegularMenu />
        </section>
        <Reviews />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default MainPage;
