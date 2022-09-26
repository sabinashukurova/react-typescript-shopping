import { IProduct } from "../types";

interface IProductProps {
    item: IProduct | undefined
    onAdd: (product: IProduct) => void
    onRemove: (product: IProduct) => void
}

export default function Product(props: IProductProps) {
    const { item, onAdd, onRemove } = props;

    if (!item) {
        return <></>
    }

    return (
        <div className='card'>
            <img className='small' src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <div>${item.price}</div>
            <div>
                {item ? (
                    <div>
                        <button onClick={() => onRemove(item)} className="remove"> - </button>
                        <span className="span">{item.count ?? 0}</span>
                        <button onClick={() => onAdd(item)} className="add"> + </button>
                    </div>
                ) : (
                    <button onClick={() => onAdd(item)}>Add to cart</button>
                )}
            </div>
        </div>
    );
}