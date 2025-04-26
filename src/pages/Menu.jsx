import Header from "../blocks/Header";
import PopularFood from "../components/PopularFood";
import SnackFood from "../components/SnackFood";
import RegularFood from "../components/RegularFood";
import Footer from "../blocks/Footer";

const MenuPage = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>

      <main className="content">
        <h1 className="visually-hidden">Menu</h1>
        <section className="menu">
          <PopularFood />
        </section>

        <section className="menu">
          <SnackFood />
        </section>

        <section className="menu">
          <RegularFood />
        </section>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default MenuPage;
