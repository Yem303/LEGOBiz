import { Metadata } from "next";
import Image from "next/image";
// static metadata & opengraph
export const metadata: Metadata = {
  title: 'HomePage',
  description: "LEGOBiz is the platform which review about the e-commerce products which supported with the store of clothes, trouser, for Cambodia.",
  keywords:"Clothes for women, Clothes for men, Clothes for kid, E-commerce, discount, popular T-Shirt, online shop.",
  openGraph:{
    title: {
    template:'%s | LEGOBiz',
    default: 'LEGOBiz'
  },
    description: "LEGOBiz is the platform which review about the e-commerce products which supported with the store of clothes, trouser, for Cambodia.",
    images:['thumnail.png']
  }
};

export default function Home() {
  return (
    <div>
      {/* <h1 className="text-6xl text-pink-500">Hello Next Js</h1>
      <button className=" bg-blue-600 py-2 px-3 rounded-md">Click Me</button> */}
    </div>
  );
}
