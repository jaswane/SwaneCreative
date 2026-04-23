import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alice Wonderland',
    role: 'CEO, Innovatech Solutions',
    avatarUrl: 'https://placehold.co/100x100/76D2BB/121E29.png', // Accent bg, dark text
    avatarFallback: 'AW',
    avatarHint: "woman portrait",
    testimonial: "Swane Creative transformed our online presence. Their attention to detail and creative approach exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: 'Bob The Builder',
    role: 'Founder, BuildIt Co.',
    avatarUrl: 'https://placehold.co/100x100/64B5F6/121E29.png', // Primary bg, dark text
    avatarHint: "man portrait",
    avatarFallback: 'BB',
    testimonial: "Working with Swane Creative was a breeze. They understood our vision perfectly and delivered a product that has significantly boosted our engagement.",
    rating: 5,
  },
  {
    name: 'Charlie Chaplin',
    role: 'Marketing Director, Media Moguls',
    avatarUrl: 'https://placehold.co/100x100/FFFFFF/121E29.png', // White bg, dark text
    avatarHint: "person smiling",
    avatarFallback: 'CC',
    testimonial: "The team at Swane is not only talented but also incredibly professional. They delivered on time and were always responsive to our needs.",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-accent mb-4">Words From Our Clients</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover why businesses trust Swane Creative to bring their ideas to life with creativity and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50 shadow-lg flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 p-6 pb-4">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                  <AvatarFallback className="bg-muted text-muted-foreground">{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-md font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <div className="flex mb-3">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`} />
                  ))}
                </div>
                <blockquote className="text-foreground/90 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
