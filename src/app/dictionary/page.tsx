import React from "react";
import type { Metadata } from "next";
import Dictionary from "./dictionary";
export const metadata: Metadata = {
  title: "😁 My Code Dictionary as Snippets",
  description: "Project i worked on",
};

export default function page() {
  return (
    <div>
      <Dictionary />
    </div>
  );
}
