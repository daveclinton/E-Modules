export default function HeroStats() {
    const stats = [
      { number: "150+", label: "Complete Projects" },
      { number: "100+", label: "Team Members" },
      { number: "200+", label: "Client Reviews" },
      { number: "30", label: "Winning Awards" },
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