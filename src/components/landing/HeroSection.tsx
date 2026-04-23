import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/121E29/64B5F6.png?text=." // Dark background, primary color accents
          alt="Abstract creative background"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          data-ai-hint="abstract creative"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full py-1 px-4 text-sm text-accent bg-accent/10 border border-accent/20 mb-6 shadow-md">
            <Sparkles className="w-4 h-4 mr-2 text-accent" />
            Unleashing Creative Potential
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-8 leading-tight">
            Swane Creative: Innovate. Create. Inspire.
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            At Swane Creative, we transform visions into stunning digital realities. We blend cutting-edge design with strategic thinking to deliver solutions that captivate and convert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="#contact">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 hover:text-accent shadow-lg transition-transform hover:scale-105">
              <Link href="#portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
