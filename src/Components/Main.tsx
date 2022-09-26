import Product from '../Components/Product'
import { IProduct } from "../types";

interface IMainProps {
    cartItems: IProduct[],
    onAdd: (product: IProduct) => void
    onRemove: (product: IProduct) => void
    products: IProduct[]
}

export default function Main(props: IMainProps) {
    const { cartItems, products, onAdd, onRemove } = props;

    return (
        <div className='block col-2'>
            <h2>Products</h2>
            <div className='row'>
                {products?.map((product) => (
                    <Product
                        item={cartItems.find((x) => x.id === product.id) || product}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    );
}