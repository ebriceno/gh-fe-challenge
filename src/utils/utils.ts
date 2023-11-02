type BagItem = {
    id: number
    quantity: number
}

export const getBagItemCount = (bag: BagItem[]) => {
    return bag.reduce((count, current) => {
        return count + current.quantity
    }, 0)
}