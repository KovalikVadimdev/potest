import { useOrder } from "../contexts/OrderContext";
import { useNavigate } from "react-router-dom";

import foodAngooriRasmalai from "../assets/images/food_angoori_rasmalai.png";
import starYellow from "../assets/icons/star_yellow.svg";
import foodTeaTimeSnacks from "../assets/images/food_tea_time_snacks.png";
import foodTeaTimeSnacks2 from "../assets/images/food_tea_time_snacks_2.png";
import foodMasalaDosa from "../assets/images/food_masala_dosa.png";
import foodPavBhaji from "../assets/images/food_pav_bhaji.png";
import foodDalBatiChurma from "../assets/images/food_dal_bati_churma.png";

const RegularMenu = () => {
  const { addOrder } = useOrder();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    addOrder({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: 1,
    });
    navigate("/order");
  };

  const foodItems = [
    {
      id: 4,
      nameHighlight: "Indian Dessert",
      name: "Angoori Rasmalai",
      image: foodAngooriRasmalai,
      reviews: 20,
      price: 180,
    },
    {
      id: 5,
      nameHighlight: "Indian",
      name: "Tea Time Snacks",
      image: foodTeaTimeSnacks,
      reviews: 30,
      price: 190,
    },
    {
      id: 6,
      nameHighlight: "Indian",
      name: "Tea Time Snacks",
      image: foodTeaTimeSnacks2,
      reviews: 40,
      price: 200,
    },
    {
      id: 7,
      nameHighlight: "South Indian",
      name: "Masala Dosa",
      image: foodMasalaDosa,
      reviews: 50,
      price: 210,
    },
    {
      id: 8,
      nameHighlight: "Gujarati",
      name: "Pav Bhaji",
      image: foodPavBhaji,
      reviews: 60,
      price: 220,
    },
    {
      id: 9,
      nameHighlight: "Rajasthan",
      name: "Dal Bati Churma",
      image: foodDalBatiChurma,
      reviews: 70,
      price: 230,
    },
  ];

  return (
    <div className="regular__header-inner container">
      <header className="regular__header">
        <div className="regular__content">
          <h2 className="regular__title" id="favorite-title">
            Our <span className="regular__title--highlight">Regular</span> Menu
          </h2>
          <a href="/menu" className="regular__link button button-medium">
            See All
          </a>
        </div>
        <p className="regular__text">
          There Are Our Regular Menus. You Can Order Anything You Like.
        </p>
      </header>

      <div className="regular__body">
        <h3 className="visually-hidden">Partial Menu</h3>
        <ul className="regular__list">
          {foodItems.map((item) => (
            <li className="regular__item" key={item.id}>
              <div className="regular__card">
                <div className="regular__card-preview">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="regular__card-image"
                    width="262"
                    height="262"
                  />
                </div>
                <div className="regular__card-body">
                  <div className="regular__card-description">
                    <h4 className="regular__card-title">
                      <span className="regular__card-title--highlight">
                        {item.nameHighlight}
                      </span>
                      {item.name}
                    </h4>
                    <div className="regular__card-rating">
                      <img
                        src={starYellow}
                        alt="Star"
                        className="regular__card-star"
                      />
                      <img
                        src={starYellow}
                        alt="Star"
                        className="regular__card-star"
                      />
                      <img
                        src={starYellow}
                        alt="Star"
                        className="regular__card-star"
                      />
                      <img
                        src={starYellow}
                        alt="Star"
                        className="regular__card-star"
                      />
                      <img
                        src={starYellow}
                        alt="Star"
                        className="regular__card-star"
                      />
                      <p className="regular__card-rating-text">
                        ({item.reviews})
                      </p>
                    </div>
                  </div>
                  <div className="regular__card-action">
                    <p className="regular__card-price">₴{item.price}</p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="regular__card-button button button-small"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <a href="/menu" className="regular__button button">
            See All
          </a>
        </ul>
      </div>
    </div>
  );
};

export default RegularMenu;
