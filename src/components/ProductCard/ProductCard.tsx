import { Product } from '../../types/types'
import AddToBag from '../AddToBag/AddToBag'

type propsType = {
    products: Product
}

export default function ProductCard(props: propsType) {
    const { product } = props

    return (
        <div className={'w-80 bg-white shadow rounded h-200'} key={product.id}>
            <div
                style={{backgroundImage: `url(${product.image})`}}
                className={'h-24 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center'}
            />
            <div className="p-4 flex flex-col items-center h-40">
                <p className="text-gray-400 font-light text-xs text-center">
                    {product.category.name}
                </p>
                <h1 className="text-gray-800 text-center mt-1">{product.name}</h1>
                <p className="text-center text-gray-800 mt-1 text-ellipsis">{product.description.substring(0, 24)}</p>
                <p className="text-center text-gray-800 mt-1 font-bold">{`£${product.price}`}</p>
            </div>
            <AddToBag product={product} />
        </div>
    )
}