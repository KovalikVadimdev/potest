import { useOrder } from "../contexts/OrderContext";
import { useNavigate } from "react-router-dom";

import foodIndianVegetablePulao from "../assets/images/food_indian_vegetable_pulao.png";
import foodPaneerBhunaMasala from "../assets/images/food_paneer_bhuna_masala.png";
import foodVermicalliUpma from "../assets/images/food_vermicalli_upma.png";

const FavoriteMenu = () => {
  const { addOrder } = useOrder();
  const navigate = useNavigate();

  const handleOrderNow = (item) => {
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
      id: 1,
      name: "Indian Vegetable Pulao",
      image: foodIndianVegetablePulao,
      price: 180,
    },
    {
      id: 2,
      name: "Paneer Bhuna Masala",
      image: foodPaneerBhunaMasala,
      price: 190,
    },
    {
      id: 3,
      name: "Vermicelli Upma",
      image: foodVermicalliUpma,
      price: 200,
    },
  ];

  return (
    <div className="favorite__body">
      <h3 className="visually-hidden">Favorite Menu</h3>
      <ul className="favorite__list">
        {foodItems.map((item) => (
          <li className="favorite__item" key={item.id}>
            <div className="card">
              <div className="card__preview">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card__preview-image"
                  width="300"
                  height="300"
                  loading="lazy"
                />
              </div>
              <div className="card__body">
                <h4 className="card__body-title">{item.name}</h4>
                <button
                  className="card__body-button"
                  onClick={() => handleOrderNow(item)}
                >
                  Order Now &gt;
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMenu;
