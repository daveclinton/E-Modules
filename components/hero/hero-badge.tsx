export default function HeroBadge() {
    return (
      <div className="absolute right-0 top-0 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-full border border-muted">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 text-[10px] text-muted-foreground flex items-center justify-center animate-spin-slow">
            E • Design • E • Design • E • Design
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-background rounded-full flex items-center justify-center font-bold">
            →
          </div>
        </div>
      </div>
    );
  }