import { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Basket from './Components/Basket';
import { data } from './data';
import { IProduct } from "./types";
import './index.css';


function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const onAdd = (product: IProduct, action = "add") => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist && exist.count) {



      if (action === "remove") {
        exist.count--;
      } else {
        exist.count++
      }

      return setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? exist : x
        ).filter((x) => (x.count ?? 0) !== 0)
      );
    }

    setCartItems([...cartItems, { ...product, count: 1 }]);
  }

  const onRemove = (product: IProduct) => {
    onAdd(product, "remove")
  }

  return (
    <div>
      <Header countCartItems={cartItems.length} />
      <div className="row" >
        <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
};

export default App