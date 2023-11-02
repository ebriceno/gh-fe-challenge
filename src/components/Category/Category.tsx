import { Category, Product } from '../../types/types'
import ProductCard from '../ProductCard/ProductCard'

type propsType = {
    category: Category
    products: Product[]
}

const CATEGORY_COLOR = {
    Oils: 'bg-red-300',
    Cleanser: 'bg-yellow-300',
    Actives: 'bg-green-300',
    Lotion: 'bg-blue-300',
    Mask: 'bg-indigo-300',
    Sunscreen: 'bg-purple-300',
    Haircare: 'bg-pink-300',
    Exfoliator: 'bg-gray-300'
}

export default function Category(props: propsType) {
    const { category, products } = props

    return (
        <section className={'flex-column space-x-5 space-y-10 pl-5 pr-5'}>
            <div className={`${CATEGORY_COLOR[category.name]} font-bold space-y-5 text-2xl mt-5 rounded text-gray-700`}>
                <h2 className={`font-bold p-2 ml-4`}>{category.name}</h2>
            </div>

            <div
                key={category.order}
                className={'flex space-x-10'}
            >
                {
                    products.slice(0, 15).filter(product => product?.category?.name === category.name).map(item => (
                        <>
                            <ProductCard product={item}/>
                        </>
                    ))
                }
            </div>
        </section>
    )
}