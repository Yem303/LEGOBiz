import { Metadata } from 'next';
import React from 'react'
// static metadata & opengraph
export const metadata: Metadata = {
  title: 'About',
  description: "This page is mentioned about mission, vision, and teamwork of the whole platform performance.",
  keywords:"About LEGOBiz, Mision LEGOBiz, Vision LEGOBiz, Team LEGOBiz",
  openGraph:{
    title: 'About',
     description: "This page is mentioned about mission, vision, and teamwork of the whole platform performance.",
    images:['thumnail.png']
  }
};

export default function page() {
  return (
    <div>
      this is about page 
    </div>
  )
}
