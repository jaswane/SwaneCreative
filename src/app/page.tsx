
import { Mail, ExternalLink, ShoppingCart, Link2, Briefcase, Gift, Hospital, Camera, Smartphone, Image as ImageIcon, Instagram as InstagramIcon, Smile, Facebook, Bike, Linkedin as LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const websites = [
  {
    name: 'eButikker',
    description: 'Oppdag Norges tryggeste nettbutikker – din guide til en smartere netthandel.',
    url: 'https://www.ebutikker.no/',
    icon: ShoppingCart,
  },
  {
    name: 'Affiliate Programmer',
    description: 'Finn affiliateprogrammer som passer for din nisje og øk inntektene dine.',
    url: 'https://www.affiliateprogrammer.no/',
    icon: Link2,
  },
  {
    name: 'Alt Gratis',
    description: 'Alt du kan få gratis på nett — produkter, prøver og tjenester.',
    url: 'https://www.altgratis.no/',
    icon: Gift,
  },
  {
    name: 'Velno',
    description: 'Finn apotek i hele Norge.',
    url: 'https://velno.no/',
    icon: Hospital,
  },
  {
    name: 'RealElectricBikes.com',
    description: 'En nettside under bygging om elektriske sykler.',
    url: 'https://realelectricbikes.com/',
    icon: Bike,
  },
  {
    name: 'Min Egen Sjef',
    description: 'En gammel nettside om det å tjene penger på nett. Ikke oppdatert.',
    url: 'https://minegensjef.no/',
    icon: Briefcase,
  },
  {
    name: 'AirBuzz.One',
    description: 'Side om dronehobby, FPV droner og dronefoto. Ikke oppdatert.',
    url: 'https://airbuzz.one/',
    icon: Camera,
  },
  {
    name: 'New Fitness Gadgets',
    description: 'Min første affiliate side med Amazon Associates. Ikke oppdatert.',
    url: 'https://newfitnessgadgets.com/',
    icon: Smartphone,
  },
];

const otherProjects = [
  {
    name: 'Flickr Photostream',
    description: 'Mine foto fra da jeg drev med Urbex (Urban Exploring) og andre ting.',
    url: 'http://www.flickr.com/photos/norue/',
    icon: ImageIcon,
  },
  {
    name: 'Instagram',
    description: 'Follow my visual journey and creative updates on Instagram.',
    url: 'https://instagram.com/andreas_swane/',
    icon: InstagramIcon,
  },
  {
    name: 'Bilder av meg',
    description: 'En samling bilder hvor jeg er med, på Flickriver.',
    url: 'https://www.flickriver.com/people/norue/photosof/',
    icon: Smile,
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground border-t-2 border-secondary">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero Brand Section */}
        <section id="hero-brand" className="flex justify-center text-center pt-12 pb-8 md:pt-20 md:pb-12">
          <h1 className="sr-only">SWANE CREATIVE</h1> {/* For accessibility */}
          <Logo className="h-16 md:h-20 lg:h-24 w-auto" />
        </section>

        {/* Intro Section */}
        <section id="intro" className="text-center my-10 md:my-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 mx-auto max-w-3xl !text-secondary">
            Velkommen til min samleside
          </h2>
          <p className="text-lg md:text-xl text-secondary mx-auto max-w-3xl">
            En samleside for mine nettprosjekter innen ehandel, læring, affiliate, SEO og kreative uttrykk. Bli kjent med noen av mine initiativer nedenfor.
          </p>
        </section>

        {/* Websites List Section */}
        <section id="websites" className="my-12 md:my-16 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center !text-secondary">
            Mine Nettsider
          </h2>
          <div className="space-y-6">
            {websites.map((site) => {
              const IconComponent = site.icon;
              return (
                <Link
                  key={site.name}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-accent hover:-translate-y-0.5 transition-all duration-300 ease-linear group relative"
                >
                  <div className="flex items-center mb-2">
                    {IconComponent && <IconComponent className="mr-3 h-6 w-6 !text-primary-foreground" />}
                    <h3 className="text-xl font-semibold !text-primary-foreground">
                      {site.name}
                    </h3>
                  </div>
                  <p className="text-sm !text-primary-foreground/80">
                    {site.description}
                  </p>
                  <ExternalLink className="absolute top-4 right-4 h-5 w-5 text-primary-foreground/50 group-hover:text-primary-foreground/80 transition-colors" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Other Projects Section */}
        <section id="other-projects" className="my-12 md:my-16 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center !text-secondary">
            Andre Prosjekter
          </h2>
          <div className="space-y-6">
            {otherProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Link
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-accent hover:-translate-y-0.5 transition-all duration-300 ease-linear group relative"
                >
                  <div className="flex items-center mb-2">
                    {IconComponent && <IconComponent className="mr-3 h-6 w-6 !text-primary-foreground" />}
                    <h3 className="text-xl font-semibold !text-primary-foreground">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-sm !text-primary-foreground/80">
                    {project.description}
                  </p>
                   <ExternalLink className="absolute top-4 right-4 h-5 w-5 text-primary-foreground/50 group-hover:text-primary-foreground/80 transition-colors" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="my-12 md:my-16 text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 !text-secondary">Om Swane Creative</h2>
            <p className="text-secondary mb-4">
                Swane Creative er et enkeltmannsforetak drevet av Andreas, en seriegründer og kreativ entusiast med lidenskap for netthandel og digitale prosjekter.
            </p>
            <p className="text-secondary mb-6">
                I tillegg til nettpublikasjoner arbeider jeg også med 3D-visualisering ved bruk av 3ds Max, Unreal Engine og V-Ray, 3D-printing, RC-bygging med 3D-print, dronebygging, vibe coding og animasjon innen ingeniørfaget.
            </p>
            <p className="text-secondary mb-4 text-center">
               <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/andreas-swane/" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </p>
             <p className="text-center mb-6">
              <Button asChild variant="outline">
                <a href="https://www.facebook.com/AndreasSphoto/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-4 w-4" /> Facebook
                </a>
              </Button>
            </p>
            <p className="text-center mb-6">
              <Button asChild variant="outline">
                <a href="https://www.instagram.com/andreas_swane/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="mr-2 h-4 w-4" /> Instagram
                </a>
              </Button>
            </p>
            <p className="text-center mb-6">
              <Button asChild variant="outline">
                <a href="https://www.wealthyaffiliate.com/?a_aid=fe112df7" target="_blank" rel="noopener noreferrer">
                  Wealthy Affiliate
                </a>
              </Button>
            </p>
            <div className="flex justify-center mb-6">
              <Image
                src="/bilder/grunnlegger-andreas-1-1-1024x767.jpg"
                alt="Andreas Swane - Swane Creative"
                width={1024}
                height={767}
                className="rounded-lg shadow-md max-w-full h-auto"
                data-ai-hint="portrait person"
              />
            </div>
            <p className="text-sm text-secondary/80">
              Denne nettsiden ble laget på én time ved hjelp av en AI-agent i ChatGPT og Typingmind, kombinert med rask utvikling i Firebase, versjonskontroll via GitHub, og publisering/hosting på Vercel.
            </p>
        </section>

      </main>

      {/* Footer Section */}
      <footer className="bg-secondary text-secondary-foreground py-10 md:py-12 border-t border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm">Organisasjonsnummer: 917 248 834</p>
          </div>

          <div className="text-center text-sm mt-8 pt-8 border-t border-border/10">
            <p>&copy; {new Date().getFullYear()} Swane Creative. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

