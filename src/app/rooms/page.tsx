import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Check } from 'lucide-react';

const rooms = [
  {
    name: 'Deluxe King Room',
    description: 'A spacious room with a king-sized bed, perfect for couples or solo travelers seeking comfort and style.',
    price: 199,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'Deluxe King Room with a large bed and modern furniture',
      hint: 'hotel room interior'
    },
    features: ['King-sized Bed', 'City View', '4K Television', 'Mini-bar'],
  },
  {
    name: 'Executive Suite',
    description: 'Experience luxury in our executive suite, featuring a separate living area and premium amenities.',
    price: 299,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'Executive Suite with a separate living area and elegant decor',
      hint: 'luxury suite'
    },
    features: ['Separate Living Area', 'Panoramic View', 'Jacuzzi Bathtub', 'Complimentary Breakfast'],
  },
  {
    name: 'Family Garden View',
    description: 'Ideal for families, this room offers two queen beds and a beautiful view of our private gardens.',
    price: 249,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'Family room with two queen beds overlooking a lush garden',
      hint: 'family room'
    },
    features: ['Two Queen Beds', 'Garden View', 'Connecting Rooms Available', 'Kids Play Area Access'],
  },
];

export default function RoomsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-headline font-bold text-foreground sm:text-5xl">Our Rooms & Suites</h1>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
              Find the perfect space for your stay. Each room is designed with your comfort in mind.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rooms.map((room) => (
                <Card key={room.name} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={room.image.src}
                      alt={room.image.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={room.image.hint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline">{room.name}</CardTitle>
                    <CardDescription>{room.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {room.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="bg-secondary/50 p-4 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-xl">${room.price}</span>
                      <span className="text-sm text-muted-foreground"> / night</span>
                    </div>
                    <Button>Book Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
