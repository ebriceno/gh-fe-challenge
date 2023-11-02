import { Product } from '../../types/types'
import { useState } from 'react'

type propsType = {
    products: Product
}

export default function AddToBag(props: propsType) {
    const [quantity, setQuantity] = useState(0)
    const [bag, setBag] = useState([])
    const { product } = props

    const addQuantity = () => {
        let currentQty = quantity
        currentQty++
        setQuantity(currentQty)
    }

    const substractQuantity = () => {
        let currentQty = quantity
        currentQty--
        if (currentQty >= 0) {
            setQuantity(currentQty)
        }
    }

    const addToBag = (productId, quantity) => {
        if (quantity === 0) {
            // TODO Handle quantity === 0 error
            return null
        }

        const currentBag = localStorage.getItem('ghBag')

        if (!currentBag) {
            localStorage.setItem('ghBag', JSON.stringify([{ id: productId, quantity: quantity}]))
            setBag([{ id: productId, quantity: quantity}])
        } else {
            const bagItems = JSON.parse(currentBag)
            console.log(bagItems)

            const shouldUpdateBagItem = bagItems.map(item => item.id).indexOf(productId)

            if (shouldUpdateBagItem !== -1) {
                const bagItem = bagItems[shouldUpdateBagItem]
                if (quantity === 0) {
                    bagItems.splice(shouldUpdateBagItem, 1)
                    localStorage.setItem('ghBag', JSON.stringify(bagItems))
                    setBag(bagItems)
                } else {
                    bagItem.quantity = quantity
                    localStorage.setItem('ghBag', JSON.stringify(bagItems))
                    setBag(bagItems)
                }
            } else {
                const newItem = { id: productId, quantity: quantity }
                bagItems.push(newItem)
                localStorage.setItem('ghBag', JSON.stringify(bagItems))
                setBag(bagItems)
            }
        }
    }

    console.log('Bag state', bag)
    const isBagItem = bag.map(item => item.id).indexOf(product.id)

    return (
        <div className={'flex-column space-y-5'}>
            <div className="inline-flex">
                <button
                    className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                    disabled={quantity === 0}
                    onClick={substractQuantity}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                        />
                    </svg>
                </button>
                <div
                    className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none"
                >
                    {quantity}
                </div>
                <button
                    className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                    onClick={addQuantity}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </button>
            </div>

            <button
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                onClick={() => addToBag(product.id, quantity)}
            >
                { isBagItem !== -1 ? 'Update order' : 'Add to order'}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            </button>
        </div>
    )
}