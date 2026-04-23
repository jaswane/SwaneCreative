import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform Redesign',
    description: 'A complete overhaul of a leading online retailer\'s platform, focusing on UX and conversion rate optimization. Implemented a modern tech stack for scalability.',
    imageUrl: 'https://placehold.co/600x400/1A2B3C/76D2BB.png', // Darker card bg, accent text
    imageHint: "website design",
    tags: ['UX/UI Design', 'Web Development', 'E-commerce'],
    liveLink: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'Developed a secure and intuitive mobile banking application for a fintech startup, featuring biometric authentication and P2P payments.',
    imageUrl: 'https://placehold.co/600x400/1A2B3C/64B5F6.png', // Darker card bg, primary text
    imageHint: "mobile app",
    tags: ['Mobile App', 'Fintech', 'Security'],
    liveLink: '#',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Created a sophisticated dashboard for a data science company, visualizing complex datasets and providing actionable insights through AI.',
    imageUrl: 'https://placehold.co/600x400/1A2B3C/FFFFFF.png', // Darker card bg, white text
    imageHint: "dashboard analytics",
    tags: ['Data Visualization', 'AI/ML', 'SaaS'],
    liveLink: '#',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-4">Our Creative Portfolio</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore a selection of projects that showcase our passion for innovation and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden group">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-xl font-semibold text-foreground mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full border border-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" asChild className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
