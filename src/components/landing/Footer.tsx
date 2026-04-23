import Link from 'next/link';
import Logo from '@/components/Logo';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <Link href="/" aria-label="Swane Creative Home">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Swane Creative. All rights reserved.</p>
            <p>Crafting digital experiences with passion and precision.</p>
          </div>

          <div className="flex justify-center md:justify-end space-x-3">
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
