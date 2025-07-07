import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-headline font-bold text-foreground sm:text-5xl">Get in Touch</h1>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
              We&apos;re here to help. Contact us with any questions or for booking assistance.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-headline font-semibold mb-4">Contact Information</h2>
                  <ul className="space-y-4 text-foreground/80">
                    <li className="flex items-center gap-4">
                      <MapPin className="h-6 w-6 text-primary" />
                      <span>123 Luxury Lane, Tranquil City, 12345</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-primary" />
                      <span>(123) 456-7890</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <span>contact@lodgewell.com</span>
                    </li>
                  </ul>
                </div>
                 <div>
                  <h2 className="text-2xl font-headline font-semibold mb-4">Our Location</h2>
                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="Map to Lodgewell"
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                            data-ai-hint="city map"
                        />
                    </div>
                </div>
              </div>
              <div>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-1">
                        <Input id="name" placeholder="Your Name" />
                      </div>
                      <div className="space-y-1">
                        <Input id="email" type="email" placeholder="Your Email" />
                      </div>
                      <div className="space-y-1">
                        <Textarea id="message" placeholder="Your Message" rows={5} />
                      </div>
                      <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
