import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Hotel } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Hotel className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline text-foreground">Lodgewell</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/rooms" className="text-foreground/60 transition-colors hover:text-foreground/80">Rooms</Link>
          <Link href="/contact" className="text-foreground/60 transition-colors hover:text-foreground/80">Contact</Link>
        </nav>
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
