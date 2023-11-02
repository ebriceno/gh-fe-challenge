import React from 'react'
import Navigation from './Navigation/Navigation'

type Props = React.PropsWithChildren<{}>

export default function Layout({ children }:Props) {
    return (
        <div className={'bg-yellow-50 h-full'}>
            <Navigation />
            <main>{children}</main>
        </div>
    )
}