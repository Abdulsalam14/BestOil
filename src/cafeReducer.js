export default  function cafeReducer (state, action){
    switch (action.type) {
      case "selectItem":
        const updatedItems = state.selectedItems.map((item, index) => {
          if (index === action.index) {
            return { ...item, enabled: !item.enabled };
          }
          return item;
        });
        return { ...state, selectedItems: updatedItems };
      case "changeQuantity":
        const updatedItemsWithQuantity = state.selectedItems.map((item, index) => {
          if (index === action.index) {
            return { ...item, quantity: action.quantity };
          }
          return item;
        });
        return { ...state, selectedItems: updatedItemsWithQuantity };
      case "calculateTotalPrice":
        const totalPrice = state.selectedItems.reduce((total, item) => {
          if (item.enabled && item.quantity>0) {
            return total + item.quantity * item.price;
          }
          return total;
        }, 0);
        return { ...state, totalPrice };
      default:
        return state;
    }
  };