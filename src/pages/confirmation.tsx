import { LOCAL_STORAGE_ORDER_NUMBER } from '../utils/constants'
import {useEffect, useState} from "react";

export default function Confirmation() {
    const [order, setOrder] = useState('')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const orderNumber = localStorage.getItem(LOCAL_STORAGE_ORDER_NUMBER)
            console.log(orderNumber)
            if (orderNumber) {
                setOrder(orderNumber)
            }
        }
    }, [order])

    return (
        <div className={'flex-column h-screen ml-10 mt-10'}>
            <h1 className={'text-2xl'}>Order #{order} placed successfully</h1>
            <p className={'text-xl'}>Thank you for your purchase!</p>
            <p>Team GetHarley</p>
        </div>
    )
}