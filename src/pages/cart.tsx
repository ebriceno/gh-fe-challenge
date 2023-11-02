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
            <div className={'w-3/5'}>
                <h1>YOUR CART</h1>
                <p>{`TOTAL (${getBagItemCount(bag)} products) £${bagGrandTotal(cartItems)}`}</p>
                <p>The items in your cart are not reserved. Complete your purchase to get them.</p>
                <ul>
                    {itemList}
                </ul>
            </div>
            <div>
                <h2>ORDER SUMMARY</h2>
                <p>{getBagItemCount(bag)} products £{bagGrandTotal(cartItems)}</p>
                <p>Delivery: Free</p>
                <p>Total: £{bagGrandTotal(cartItems)}</p>
                <button
                    className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 active:bg-green-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                >
                    Place order
                </button>
            </div>
        </div>
    )
}