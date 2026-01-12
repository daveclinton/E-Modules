"use client";

import { useState } from "react";

const tabs = [
  {
    title: "Our Mission",
    content:
      "To provide exceptional construction services that exceed client expectations through innovation, quality craftsmanship, and a commitment to sustainability. We aim to build lasting relationships and create spaces that enhance communities.",
  },
  {
    title: "Our Vision",
    content:
      "To be recognized as a leading force in modern construction, inspiring trust through technological advancement, integrity, and a passion for excellence.",
  },
  {
    title: "Our History",
    content:
      "Founded with a vision to transform construction, our company has grown from humble beginnings into a trusted partner for residential and commercial projects alike.",
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