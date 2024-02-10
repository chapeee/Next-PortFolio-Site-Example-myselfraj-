import React from 'react'
import About from './about';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "🫠 About Raj Aka Me",
  description: "Know about me in detail.",
  
};


export default function page() {
  return (
   <div>
    <About />
   </div>
  )
}