import { useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/constants'
import { getBagItemCount } from '../utils/utils'
import ProductSummary from '../components/ProductSummary/ProductSummary'

export default function Cart() {
    const [bag, setBag] = useState(null)
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false)

    let currentBag

    useEffect(() => {
        if (!loading || !products) {
            setLoading(true)
            fetch(`${BASE_API_URL}/products?norandom`)
                .then(response => response.json())
                .then(data => {
                    setProducts(data)
                    setLoading(false)
                })
                .catch(error => console.error(error))
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            currentBag = localStorage.getItem('ghBag')
            const bagProducts = JSON.parse(currentBag)
            setBag(bagProducts)
        }
    }, [])


    if (!bag || bag.length === 0 || !products) {
        return null
    }

    const getProductPrice = (cartItems, bagId) => {
        const item = cartItems.find(item => item.id === bagId)
        return item.price
    }

    const bagGrandTotal = (cartItems) => {
        return bag.reduce((total, current) => {
            return total + (current.quantity * getProductPrice(cartItems, current.id))
        }, 0)
    }

    const cartItems = bag.map(item => {
        return products.find(product => {
            return product.id === item.id
        })
    })

    const itemList = cartItems.map(item =>
        <li>
            <ProductSummary product={item} />
        </li>
    )

    return (
        <div className={'flex h-screen'}>
            <div className={'w-3/5 pl-5 pt-5'}>
                <h1 className={'text-2xl font-bold'}>YOUR CART</h1>
                <p>{`TOTAL (${getBagItemCount(bag)} products) £${bagGrandTotal(cartItems)}`}</p>
                <p>The items in your cart are not reserved. Complete your purchase to get them.</p>
                <ul>
                    {itemList}
                </ul>
            </div>
            <div className={'pt-5 justify-center ml-36 mr-10'}>
                <h2 className={'text-xl font-bold'}>ORDER SUMMARY</h2>
                <div className={'flex w-full justify-between'}>
                    <p>{getBagItemCount(bag)} products</p>
                    <span className={'font-bold self-end'}>£{bagGrandTotal(cartItems)}</span>
                </div>
                <div className={'flex w-full justify-between'}>
                    <p>Delivery</p>
                    <span className={'font-bold self-end'}>Free</span>
                </div>
                <div className={'flex w-full justify-between mt-2'}>
                    <p>Total</p>
                    <span className={'font-bold self-end'}>£{bagGrandTotal(cartItems)}</span>
                </div>

                <button
                    className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 active:bg-green-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                >
                    Place order
                </button>
            </div>
        </div>
    )
}