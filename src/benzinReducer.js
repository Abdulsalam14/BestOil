export default function benzinReducer(state, action) {
  switch (action.type) {
    case "setSelectedItem":
      let priceValue = state.priceValue;
      let litreValue = state.litreValue;
      if (state.inputType === 'litr' && parseFloat(state.litreValue) > 0) {
        priceValue = (parseFloat(state.litreValue) * parseFloat(action.selectedItem)).toFixed(2);
      } else if (state.inputType === 'price' && parseFloat(state.priceValue) > 0) {
        litreValue = (parseFloat(state.priceValue) / parseFloat(action.selectedItem)).toFixed(2);
      }
      return {
        ...state,
        selectedItem: action.selectedItem,
        priceValue,
        litreValue
      };
    case "setChangedinput":
      return { ...state, inputType: action.payload };
    case "setLitrInput":
      let newPriceValue = (parseFloat(action.litreValue) * parseFloat(state.selectedItem)).toFixed(2);
      return {
        ...state,
        litreValue: action.litreValue,
        priceValue: newPriceValue
      };
      case "setPriceInput":
      let newLitreValue = (parseFloat(action.priceValue) / parseFloat(state.selectedItem)).toFixed(2);
      return {
        ...state,
        priceValue: action.priceValue,
        litreValue: newLitreValue
      };
    default:
      return state;
  }
}
