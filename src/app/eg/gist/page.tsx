import React from 'react'

import type { Metadata } from "next";
import Examples from './Examples';
export const metadata: Metadata = {
  title: "Code Examples",
  description: "Examples of Code from my libraries or other libraries",
};

export default function page() {
  return (
    <div><Examples /> </div>
  )
}