import CartWidget from '../CartWidget/CartWidget'
import Link from 'next/Link'

export default function Navigation() {
    return (
        <nav>
            <Link href='/'>
                <h1>GH Assessment</h1>
            </Link>
            <CartWidget />
        </nav>
    )
}