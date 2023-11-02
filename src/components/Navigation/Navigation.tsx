import CartWidget from '../CartWidget/CartWidget'
import Link from 'next/Link'

export default function Navigation() {
    return (
        <nav
            className={'flex sticky top-0 items-center justify-between flex-wrap bg-gray-100 p-6 w-full z-10 pin-t'}
        >
            <div className={'flex items-center flex-no-shrink text-white mr-6'}>
                <Link href='/' className={'text-gray-700 no-underline'}>
                    <h1 className={'text-2xl pl-2'}>GH Assessment</h1>
                </Link>
            </div>
            <div className={'w-4 lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0'}>
                <CartWidget />
            </div>
        </nav>
    )
}