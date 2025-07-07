import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { ImageGallery } from '@/components/home/ImageGallery';
import { Amenities } from '@/components/home/Amenities';
import { Chatbot } from '@/components/chatbot/Chatbot';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ImageGallery />
        <Amenities />
      </main>
      <Chatbot />
    </div>
  );
}
