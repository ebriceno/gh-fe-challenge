import { Product } from '../../types/types'
import AddToBag from '../AddToBag/AddToBag'

type propsType = {
    product: Product
}

export default function ProductSummary(props: propsType) {
    const { product } = props

    return (
        <div className={'w-auto bg-white shadow rounded h-40 m-10 flex pt-5 pl-5'} key={product.id}>
            <div className={'flex-column w-60'}>
                <div
                    style={{backgroundImage: `url(${product.image})`}}
                    className={'h-24 w-auto bg-gray-200 flex flex-col justify-between bg-cover bg-center'}
                />
                <p className="text-gray-400 font-light text-xs text-center">
                    {product.category.name}
                </p>
            </div>

            <div className="p-4 flex flex-col items-center h-40 w-1/4">
                <h3 className="text-gray-800 text-center mt-1">{product.name}</h3>
                <p className="text-center text-gray-800 mt-1 font-bold">{`£${product.price}`}</p>
            </div>
            <AddToBag product={product} />
        </div>
    )
}