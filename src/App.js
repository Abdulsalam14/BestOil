
import { useReducer } from 'react';
import './App.css';
import Benzin from './Benzin';
import MiniCafe from './MiniCafe';

const appReducer = (state, action) => {
  switch (action.type) {
    case "setBenzinPrice":
      return { ...state, benzinPrice: action.payload };
    case "setCafePrice":
      return { ...state, miniCafePrice: action.payload };
    default:
      return state;
  }
};
function App() {
  
    const [state, priceDispatch] = useReducer(appReducer, {
      benzinPrice: 0,
      miniCafePrice: 0,
    });


    let totalPrice=state.benzinPrice + state.miniCafePrice
  return (

    <div className="App">
      <div style={{
        display:"flex",
        padding:'100px',
        justifyContent:'space-around',
        alignContent:'flex-end'
    }}>
      <Benzin priceDispatch={priceDispatch} ></Benzin>
      <MiniCafe priceDispatch={priceDispatch} ></MiniCafe>
    </div>
      <div className="amount">
        <span>Total Amount: {totalPrice?totalPrice:0}  Azn</span>
      </div>
    </div>
  );
}

export default App;
