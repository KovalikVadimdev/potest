import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOrder } from "../contexts/OrderContext";

import trashCan from "../assets/icons/trash_can.svg";
import person from "../assets/icons/person.svg";

const OrderPage = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate();
  const { orders, removeOrder, increaseOrderQuantity, decreaseOrderQuantity } =
    useOrder();

  const goBack = () => {
    navigate(-1);
  };

  const subtotal = orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
  const shippingCost = orders.length > 0 ? 80 : 0;
  const total = subtotal + shippingCost;

  const [animatedSubtotal, setAnimatedSubtotal] = useState(0);
  const [animatedTotal, setAnimatedTotal] = useState(0);

  useEffect(() => {
    const animationDuration = 300;
    const frameRate = 10;

    let frames = animationDuration / frameRate;
    let stepSubtotal = (subtotal - animatedSubtotal) / frames;
    let stepTotal = (total - animatedTotal) / frames;

    const interval = setInterval(() => {
      setAnimatedSubtotal((prev) => {
        const next = prev + stepSubtotal;
        if (
          (stepSubtotal > 0 && next >= subtotal) ||
          (stepSubtotal < 0 && next <= subtotal)
        ) {
          return subtotal;
        }
        return next;
      });

      setAnimatedTotal((prev) => {
        const next = prev + stepTotal;
        if (
          (stepTotal > 0 && next >= total) ||
          (stepTotal < 0 && next <= total)
        ) {
          return total;
        }
        return next;
      });
    }, frameRate);

    return () => clearInterval(interval);
  }, [subtotal, total]);

  const handleExpirationDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length >= 3) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }

    setExpirationDate(value.slice(0, 5));
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.match(/.{1,4}/g)?.join(" ") || "";
    setCardNumber(value.slice(0, 19));
  };

  return (
    <div className="order">
      <main className="content-alt">
        <section className="checkout">
          <h1 className="visually-hidden">Purchases</h1>
          <div className="checkout__body tabs container" data-js-tabs>
            <h2 className="visually-hidden" id="checkout-category-title">
              Checkout Category
            </h2>
            <div className="tabs__body">
              <div
                className={`tabs__content ${
                  activeTab === "tab-1" ? "is-active" : ""
                }`}
                id="tabpanel-1"
                aria-labelledby="tab-1"
                tabIndex="0"
                data-js-tabs-content
              >
                <div className="shopping-cart">
                  <h3 className="visually-hidden">Shopping</h3>
                  <div className="shopping-cart__content">
                    <div className="shopping-cart__card">
                      <div className="shopping-cart__back">
                        <h4 className="shopping-cart__back-title">
                          <button
                            onClick={goBack}
                            className="shopping-cart__back-button"
                          >
                            &lt; Shopping Countinue
                          </button>
                        </h4>
                      </div>

                      <p className="shopping-cart__text">Shopping Item</p>

                      <ul className="shopping-cart__list-product list-product">
                        {orders.map((order) => (
                          <li key={order.id} className="list-product__item">
                            <div className="list-product__product-card product-card">
                              <img
                                src={order.image}
                                alt={order.name}
                                className="product-card__image"
                                width="80"
                                height="80"
                              />

                              <h5 className="product-card__title">
                                {order.name}
                              </h5>
                              <div className="product-card__actions product-actions">
                                <button
                                  className="product-actions__button button"
                                  type="button"
                                  aria-label="Minus one"
                                  title="Minus one"
                                  onClick={() =>
                                    decreaseOrderQuantity(order.id)
                                  }
                                  disabled={order.quantity === 0}
                                >
                                  -
                                </button>
                                <p className="product-actions__count">
                                  {String(order.quantity).padStart(2, "0")}
                                </p>
                                <button
                                  className="product-actions__button button"
                                  type="button"
                                  aria-label="Plus one"
                                  title="Plus one"
                                  onClick={() =>
                                    increaseOrderQuantity(order.id)
                                  }
                                >
                                  +
                                </button>
                              </div>
                              <p className="product-card__price">
                                ₴{order.price}
                              </p>

                              <button
                                className="product-card__remove button"
                                type="button"
                                aria-label="Remove product"
                                title="Remove product"
                                onClick={() => {
                                  removeOrder(order.id);
                                }}
                              >
                                <img
                                  src={trashCan}
                                  alt="Remove"
                                  className="product-card__remove-image"
                                />
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`tabs__content ${
                  activeTab === "tab-2" ? "is-active" : ""
                }`}
                id="tabpanel-2"
                aria-labelledby="tab-2"
                tabIndex="0"
                data-js-tabs-content
              >
                <div className="receipt">
                  <h3 className="visually-hidden">Receipt</h3>
                  <div className="receipt__content">
                    <div className="receipt__card">
                      <header className="receipt__header">
                        <h4 className="receipt__title">Card Details</h4>
                        <img
                          src={person}
                          alt="User Icon"
                          className="receipt__image"
                          width="100"
                          height="100"
                        />
                      </header>

                      <div className="receipt__body">
                        <form action="/" className="card-info">
                          <div className="card-info__inner">
                            <div className="card-info__cell card-info__cell--wide field">
                              <label
                                className="field__label"
                                htmlFor="firstName"
                              >
                                Name on card
                              </label>
                              <input
                                className="field__control"
                                id="firstName"
                                placeholder="Name"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                              />
                            </div>

                            <div className="card-info__cell card-info__cell--wide field">
                              <label
                                className="field__label"
                                htmlFor="cardNumber"
                              >
                                Card Number
                              </label>
                              <input
                                className="field__control"
                                id="cardNumber"
                                placeholder="1111 2222 3333 4444"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                              />
                            </div>

                            <div className="card-info__cell field">
                              <label
                                className="field__label"
                                htmlFor="exprationDate"
                              >
                                Expiration date
                              </label>
                              <input
                                className="field__control"
                                id="expirationDate"
                                placeholder="mm/yy"
                                value={expirationDate}
                                onChange={handleExpirationDateChange}
                              />
                            </div>

                            <div className="card-info__cell field">
                              <label className="field__label" htmlFor="cvv">
                                CVV
                              </label>
                              <input
                                className="field__control"
                                id="cvv"
                                placeholder="123"
                                type="text"
                                maxLength="3"
                                pattern="\d*"
                                inputMode="numeric"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="card-info__cell card-info__cell--wide field">
                            <div className="card-info__price">
                              <div className="card-info__title">
                                <p className="card-info__title-subtotal">
                                  Subtotal
                                </p>
                                <p className="card-info__title-shipping">
                                  Shipping
                                </p>
                                <p className="card-info__title-total">
                                  Total (Tax incl.)
                                </p>
                              </div>

                              <div className="card-info__currency">
                                <p className="card-info__currency-subtotal">
                                  ₴{animatedSubtotal.toFixed(2)}
                                </p>
                                <p className="card-info__currency-shipping">
                                  ₴{shippingCost.toFixed(2)}
                                </p>
                                <p className="card-info__currency-total">
                                  ₴{animatedTotal.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="card-info__cell card-info__cell--wide card-info__cell-checkout field">
                            <button
                              className="card-info__checkout button button-x-large-accent"
                              type="button"
                              aria-label="Checkout"
                              title="Checkout"
                            >
                              Checkout
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tabs__control">
              <div
                className="tabs__buttons"
                role="tablist"
                aria-labelledby="checkout-category-title"
              >
                <button
                  className={`tabs__button button-small ${
                    activeTab === "tab-1" ? "is-active" : ""
                  }`}
                  id="tab-1"
                  type="button"
                  role="tab"
                  aria-controls="tabpanel-1"
                  aria-selected={activeTab === "tab-1"}
                  onClick={() => handleTabClick("tab-1")}
                >
                  Shopping Cart
                </button>

                <button
                  className={`tabs__button button-small ${
                    activeTab === "tab-2" ? "is-active" : ""
                  }`}
                  id="tab-2"
                  type="button"
                  role="tab"
                  aria-controls="tabpanel-2"
                  aria-selected={activeTab === "tab-2"}
                  onClick={() => handleTabClick("tab-2")}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OrderPage;
