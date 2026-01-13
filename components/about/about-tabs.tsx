"use client";

import { useState } from "react";

const tabs = [
  {
    title: "Our Mission",
    content:
      "To deliver quality, cost‑effective, and legally compliant construction solutions through professional design, accurate costing, and efficient project execution.",
  },
  {
    title: "Our Vision",
    content:
      "To be a leading and trusted construction company in Kenya and beyond, recognized for quality workmanship, integrity, and sustainable development.",
  },
  {
    title: "Our History",
    content:
      "Founded around 2010 by Sammy Ngigi, E‑Design Modules emerged with the goal of integrating design, cost management, and construction into a unified process. Over time, it has grown into a fully integrated firm offering comprehensive services across Kenya and internationally.",
  },
];

export default function AboutTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4 w-full">
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`w-full text-left p-6 rounded-2xl border transition-colors ${
            active === i
              ? "bg-muted text-foreground"
              : "bg-card text-foreground hover:border-primary/40"
          }`}
        >
          <h3 className="text-xl font-semibold mb-2">{tab.title}</h3>
          {active === i && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {tab.content}
            </p>
          )}
        </button>
      ))}
    </div>
  );
}