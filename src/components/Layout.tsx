import Navigation from './Navigation/Navigation'

export default function Layout({ children }) {
    return (
        <div className={'bg-yellow-50 h-full'}>
            <Navigation />
            <main>{children}</main>
        </div>
    )
}