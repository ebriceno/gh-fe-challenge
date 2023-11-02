import { useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/constants'

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
        console.log(typeof window)
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

    const bagItemCount = () => {
        return bag.reduce((count, current) => {
            return count + current.quantity
        }, 0)
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
            <p>{item.name}</p>
            <p>{item.price}</p>
        </li>
    )

    return (
        <>
            <h1>Your cart</h1>
            <p>{`TOTAL (${bagItemCount()} products) £${bagGrandTotal(cartItems)}`}</p>
            <p>The items in your cart are not reserved. Complete your purchase to get them.</p>
            <ul>
                {itemList}
            </ul>
        </>
    )
}