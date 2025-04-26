import { useState } from "react";
import { useOrder } from "../contexts/OrderContext";
import Rating from "./Rating";

import foodIndianVegetablePulao from "../assets/images/food_indian_vegetable_pulao.png";
import foodPaneerBhunaMasala from "../assets/images/food_paneer_bhuna_masala.png";
import foodVermicalliUpma from "../assets/images/food_vermicalli_upma.png";

const PopularFood = () => {
  const { addOrder } = useOrder();

  const [foodItems, setFoodItems] = useState([
    {
      id: 1,
      name: "Indian Vegetable Pulao",
      orderName: "Indian Vegetable Pulao",
      image: foodIndianVegetablePulao,
      reviews: 20,
      price: 180,
      quantity: 0,
    },
    {
      id: 2,
      name: "Paneer Bhuna Masala",
      orderName: "Paneer Bhuna Masala",
      image: foodPaneerBhunaMasala,
      reviews: 30,
      price: 190,
      quantity: 0,
    },
    {
      id: 3,
      name: ["Vermicelli", <br key="1" />, "Upma"],
      orderName: "Vermicelli Upma",
      image: foodVermicalliUpma,
      reviews: 40,
      price: 200,
      quantity: 0,
    },
  ]);

  const handleIncrease = (id) => {
    setFoodItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setFoodItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
          : item
      )
    );
  };

  const handleAddToCart = (item) => {
    if (item.quantity > 0) {
      for (let i = 0; i < item.quantity; i++) {
        addOrder({
          id: item.id,
          name: item.orderName,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        });
      }

      setFoodItems((prevItems) =>
        prevItems.map((food) =>
          food.id === item.id ? { ...food, quantity: 0 } : food
        )
      );
    }
  };

  return (
    <div className="menu__header-inner container">
      <header className="menu__header">
        <h2 className="menu__description">
          Our <span className="menu__description--highlight">Best Popular</span>{" "}
          Indian Dish
        </h2>
      </header>

      <div className="menu__body">
        <h3 className="visually-hidden">Best Menu</h3>
        <ul className="menu__list">
          {foodItems.map((item) => (
            <li className="menu__item" key={item.id}>
              <div className="menu__card">
                <img
                  src={item.image}
                  alt={typeof item.name === "string" ? item.name : "Food"}
                  className="menu__image"
                  width="250"
                  height="250"
                />

                <h4 className="menu__title">{item.name}</h4>

                <div className="menu__rating">
                  <Rating />
                  <p className="menu__text">({item.reviews})</p>
                </div>

                <p className="menu__price">₴{item.price}</p>

                <div className="menu__action">
                  <button
                    className="menu__action-remove button"
                    onClick={() => handleDecrease(item.id)}
                    disabled={item.quantity === 0}
                  >
                    -
                  </button>
                  <p className="menu__action-count">
                    {String(item.quantity).padStart(2, "0")}
                  </p>
                  <button
                    className="menu__action-add button"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="menu__add button"
                  onClick={() => handleAddToCart(item)}
                  disabled={item.quantity === 0}
                >
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularFood;
