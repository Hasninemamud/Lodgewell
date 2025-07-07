import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  { src: "https://placehold.co/800x600.png", alt: "Luxurious hotel lobby with modern decor", hint: "hotel lobby" },
  { src: "https://placehold.co/800x600.png", alt: "Spacious and elegant hotel room with a king-sized bed", hint: "hotel room" },
  { src: "https://placehold.co/800x600.png", alt: "Outdoor swimming pool surrounded by lounge chairs and palm trees", hint: "swimming pool" },
  { src: "https://placehold.co/800x600.png", alt: "Fine dining restaurant within the hotel with ambient lighting", hint: "hotel restaurant" },
  { src: "https://placehold.co/800x600.png", alt: "Hotel exterior at dusk with beautiful lighting", hint: "hotel exterior" },
  { src: "https://placehold.co/800x600.png", alt: "Serene hotel spa with massage tables", hint: "hotel spa" },
];

export function ImageGallery() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold font-headline text-center mb-8 sm:text-4xl">
          Discover Our World
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-[4/3] items-center justify-center p-0 overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        data-ai-hint={image.hint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
