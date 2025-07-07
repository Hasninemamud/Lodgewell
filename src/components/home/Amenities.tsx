import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, ParkingSquare, UtensilsCrossed, ConciergeBell, Sparkles, Dumbbell } from 'lucide-react';

const amenities = [
  {
    icon: <Wifi className="w-8 h-8 text-primary" />,
    title: 'High-Speed Wi-Fi',
    description: 'Stay connected with complimentary high-speed internet access throughout the hotel.',
  },
  {
    icon: <ParkingSquare className="w-8 h-8 text-primary" />,
    title: 'Valet Parking',
    description: 'Enjoy the convenience and security of our professional valet parking service.',
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
    title: 'Gourmet Restaurant',
    description: 'Indulge in exquisite culinary creations at our on-site fine dining restaurant.',
  },
  {
    icon: <ConciergeBell className="w-8 h-8 text-primary" />,
    title: '24/7 Concierge',
    description: 'Our dedicated concierge team is available around the clock to assist with your needs.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: 'Daily Housekeeping',
    description: 'Impeccable daily housekeeping to ensure your room is always pristine.',
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-primary" />,
    title: 'Fitness Center',
    description: 'A state-of-the-art fitness center to keep up with your workout routine.',
  },
];

export function Amenities() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold font-headline text-center mb-12 sm:text-4xl">
          Services & Amenities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 bg-background shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0 mb-4">
                <div className="bg-secondary rounded-full p-4">
                  {amenity.icon}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-xl font-headline mb-2">{amenity.title}</CardTitle>
                <p className="text-muted-foreground">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
