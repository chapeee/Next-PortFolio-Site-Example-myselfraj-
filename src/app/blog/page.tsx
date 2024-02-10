import React from 'react'
import Writing from './writing'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "My Blogs",
  description: "Blogs by Rajneesh Aka Raj ",
  
};
export default function page() {
  return (
    <div><Writing /></div>
  )
}