import React ,{useState} from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import Header from "./Header";
import Card from "./Card";
import Cart from "./Cart";
import stores from "./stored";

function App() {
 const [showCart, setShowCart] = useState(false);

  return (
    <Provider store={stores}>
      <Header setShowCart={setShowCart} />

      <Card />

      {showCart && <Cart setShowCart={setShowCart} />}
    </Provider>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)