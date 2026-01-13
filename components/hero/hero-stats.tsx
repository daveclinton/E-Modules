export default function HeroStats() {
    const stats = [
      { number: "100+", label: "Complete Projects" },
      { number: "20+", label: "Team Members" },
      { number: "500+", label: "Client Reviews" },
      { number: "15+", label: "Years in Service" },
    ];
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
        {stats.map((item) => (
          <div key={item.label} className="text-center md:text-left">
            <div className="text-2xl font-bold">{item.number}</div>
            <div className="text-sm text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>
    );
  }