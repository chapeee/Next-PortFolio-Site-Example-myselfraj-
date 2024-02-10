import React from 'react'
import Projects from './projects';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "😁 My Projects",
  description: "Project i worked on",
  
};
export default function page() {
  return (
    <div>
        <Projects />
    </div>
  )
}