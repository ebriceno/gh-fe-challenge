import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Category from '../components/Category/Category'
import { BASE_API_URL } from '../utils/constants'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
	const [products, setProducts] = useState(null)
	const [categories, setCategories] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (!loading || !products || !categories) {
			setLoading(true)
			Promise.all([fetch(`${BASE_API_URL}/products?norandom`), fetch(`${BASE_API_URL}/categories?norandom`)])
				.then(responses => Promise.all(responses.map( response => response.json())))
				.then(data => {
					setProducts(data[0])
					setCategories(data[1])
					setLoading(false)
				})
				.catch(error => console.error(error))
		}
	}, [])

	if (!products || !categories) {
		return <div>Loading...</div>
	}

	return (
		<main className={`flex ${inter.className}`}>
			<div>
				{
					categories.map(category => (
						<Category category={category} products={products}/>
					))
				}
			</div>
		</main>
	)
}
