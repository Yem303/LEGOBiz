import ProductListComponent from "@/components/layout/product/ProductListComponent";
import { Metadata } from "next";

// static metadata & opengraph
export const metadata: Metadata = {
  title: 'Products',
  description: "LEGOBiz Product Page will mentioned about listing popular product, arrival and modern clothes for men, women, and kids",
  keywords:"Sell, clothing, T-Shirt for men, T-shirt for women, discount products, free shiping, payment, credit card.",
  openGraph:{
    title: 'Products',
    description: "LEGOBiz Product Page will mentioned about listing popular product, arrival and modern clothes for men, women, and kids",
    images:['thumnail.png']
  }
};

export default function ProductPage() {
    return (
        <section>
         <ProductListComponent/>
        </section>
    )
}