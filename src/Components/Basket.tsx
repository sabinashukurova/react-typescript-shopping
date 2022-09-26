import { IProduct } from "../types";

interface IBasketProps {
  cartItems: IProduct[],
  onAdd: (product: IProduct) => void
  onRemove: (product: IProduct) => void
}

function Basket(props: IBasketProps) {
  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + (c.count ?? 0) * c.price, 0);


  return (
    <aside className='block col-1'>
      <h2>Cart items</h2>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="row">
            <div className="col-2">{product.name}</div>
            <div className="col-3">${product.price}</div>
            <div className="col-2">
              <button onClick={() => onRemove(product)} className="remove"> - </button>{''}
              <button className="count"> {(product.count ?? 0)} </button>
              <button onClick={() => onAdd(product)} className="add"> + </button>
              <div className="col-2 text-right">${(product.price * (product.count ?? 0)).toFixed(2)}</div>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Total Price</div>
              <div className="col-2 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <button onClick={() => alert('Well done')}>Checkout</button>
            </div>
          </>
        )

        }

      </div>
    </aside>
  );
}

export default Basket;
