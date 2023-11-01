export type Category = {
    name: string
    order: number
}

export type Product = {
    category: Category
    description: string
    id: number
    image: string
    name: string
    price: number
}