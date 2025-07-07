import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Your Tranquil Escape Awaits
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Experience unparalleled luxury and comfort at Lodgewell. A perfect blend of modern amenities and timeless elegance, designed for your ultimate relaxation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="/rooms">Explore Rooms</Link>
            </Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
