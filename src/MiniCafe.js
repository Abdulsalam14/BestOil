import React, {  useEffect, useReducer } from "react";
import "./App.css";
import cafeReducer from "./cafeReducer";

export default function MiniCafe({ priceDispatch }) {
  const initialState = {
    selectedItems: [
      { name: "Hot-Dog", price: 4, quantity: 0, enabled: false },
      { name: "Hamburger", price: 5.4, quantity: 0, enabled: false },
      { name: "Free", price: 7.2, quantity: 0, enabled: false },
      { name: "Coca-Cola", price: 4.4, quantity: 0, enabled: false },
    ],
    totalPrice: 0,
  };

  const [state, dispatch] = useReducer(cafeReducer, initialState);

  useEffect(() => {
    priceDispatch({
      type: "setCafePrice",
      payload: parseFloat(state.totalPrice),
    });
  }, [state.totalPrice, priceDispatch]);

  const handleItemCheckboxChange = (index) => {
    dispatch({ type: "selectItem", index });
    dispatch({ type: "calculateTotalPrice" });
  };

  const handleQuantityChange = (index, event) => {
    const quantity = parseInt(event.target.value);
    dispatch({ type: "changeQuantity", index, quantity });
    dispatch({ type: "calculateTotalPrice" });
  };

  return (
    <div className="miniCafe">
      <h2>Mini Cafe</h2>
      <div className="cafe-first">
        <div>
          <h5
            style={{
              textAlign: "right",
              marginRight: "30px",
            }}
          >
            Price
          </h5>
          {state.selectedItems.map((item, index) => (
            <div key={index} className="cafe-sect">
              <input
                type="checkbox"
                checked={item.enabled}
                onChange={() => handleItemCheckboxChange(index)}
              />
              <span>{item.name}</span>

              <div>
                <input
                  type="number"
                  value={item.price}
                  disabled={!item.enabled}
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <h5>Quantity</h5>
          {state.selectedItems.map((item, index) => (
            <div key={index} className="cafe-sect">
              <div>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(index, e)}
                  disabled={!item.enabled}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="amount">
        <span>Total Amount: {state.totalPrice.toFixed(2)} Azn</span>
      </div>
    </div>
  );
}
