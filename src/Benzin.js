import React, {  useEffect, useReducer } from "react";
import benzinReducer from "./benzinReducer";

const Benzin = ({ priceDispatch }) => {
  const initialState = {
    selectedItem: "1.00",
    inputType: "litr",
    litreValue: '',
    priceValue: '',
  };
  const [state, dispatch] = useReducer(benzinReducer, initialState);

  useEffect(() => {
    priceDispatch({
      type: "setBenzinPrice",
      payload: parseFloat(state.priceValue)?parseFloat(state.priceValue):0,
    });
  }, [state.priceValue, priceDispatch]);

  const handleSelectChange = (event) => {
    dispatch({
      type: "setSelectedItem",
      selectedItem: event.target.value,
    });
  };

  const handleInputTypeChange = (event) => {
    dispatch({ type: "setChangedinput", payload: event.target.value });
  };

  const handlePriceValueChange = (event) => {
    dispatch({
      type: "setPriceInput",
      priceValue: event.target.value,
    });
  };

  const handleLitreValueChange = (event) => {
    dispatch({
      type: "setLitrInput",
      litreValue: event.target.value,
    });
  };

  return (
    <div className="benzin">
      <h2>Benzin Section</h2>
      <div className="benzin-container">
        <div className="benzin-first">
          <h3>Benzin</h3>
          <select
            className="form-select"
            onChange={handleSelectChange}
            value={state.selectedItem}
          >
            <option value="1.00">A-92</option>
            <option value="2.00">A-95</option>
            <option value="0.80">Dizel</option>
          </select>
        </div>
        <div className="benzin-second">
          <h3>Price</h3>
          <div>
            <input value={state.selectedItem} disabled />
            <span>Azn</span>
          </div>
        </div>
        <div className="benzin-third">
          <div className="benzin-third-left">
            <div className="checkbox-benzin">
              <input
                type="radio"
                value="litr"
                checked={state.inputType === "litr"}
                onChange={handleInputTypeChange}
              />
              <span>Litr</span>
            </div>
            <div>
              <input
                type="radio"
                value="price"
                checked={state.inputType === "price"}
                onChange={handleInputTypeChange}
              />
              <span>Price</span>
            </div>
          </div>
          <div className="benzin-third-right">
            <div>
              <input
                type="number"
                min={0}
                style={{ marginBottom: "20px" }}
                placeholder="Enter litres"
                value={state.litreValue}
                onChange={handleLitreValueChange}
                disabled={state.inputType === "price"}
              />
              <span>l.</span>
            </div>
            <div>
              <input
                type="number"
                placeholder="Enter price"
                value={state.priceValue}
                onChange={handlePriceValueChange}
                disabled={state.inputType === "litr"}
              />
              <span>azn</span>
            </div>
          </div>
        </div>
      </div>
      <div className="amount">
        <span>Total Amount: {isNaN(state.priceValue) ? '0' : state.priceValue} Azn</span>
      </div>
    </div>
  );
};

export default Benzin;
