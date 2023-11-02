import { useEffect, useState } from 'react'
import { getBagItemCount } from '../../utils/utils'
import Link from 'next/link'

export default function CartWidget() {
    const [itemCount, setItemCount] = useState(0)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const currentBag = localStorage.getItem('ghBag')
            const totalItemCount = currentBag ? getBagItemCount(JSON.parse(currentBag)) : 0
            setItemCount(totalItemCount)
        }
    }, [])

    if (!itemCount) {
        return null
    }

    return (
        <Link
            href='/cart'
            className="py-2 px-4 bg-yellow-500 text-gray-700 rounded hover:bg-yellow-600 active:bg-yellow-500 disabled:opacity-50 flex items-center right"
        >
            <span>{itemCount ? itemCount : ''}</span>
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
        </Link>
    )
}