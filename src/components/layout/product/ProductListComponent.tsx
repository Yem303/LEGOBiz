
'use client'

import { useEffect, useState } from "react"
import ProductComponent, {
    ProductType
} from "./ProductComponentCard"

export default function ProductListComponent() {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        async function fetchingData() {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                )

                if (!response.ok) {
                    throw new Error("Failed to fetch products")
                }

                const data: ProductType[] = await response.json()

                setProducts(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchingData()
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item) => (
                <ProductComponent
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    )
}
