import React from 'react'
import LearnTech from './learntech'

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "🧑‍🎓 Learn With Me",
  description: "Learn code with me ",
  
};

export default function about() {
  return (
    <div><LearnTech /></div>
  )
}