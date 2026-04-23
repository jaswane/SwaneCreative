import { Lightbulb } from 'lucide-react'; // Icon for creativity

// Updated Logo component: An icon followed by black text "SWANE CREATIVE"
const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center text-black ${className || ''} font-inter`}>
      {/* The icon color will be black due to 'text-black' on the parent div */}
      <Lightbulb className="h-10 w-10 md:h-12 md:w-12 mr-2.5 flex-shrink-0" /> {/* Increased size and margin */}
      <div> {/* Wrapper for text elements */}
        <span
          className="text-4xl md:text-5xl font-bold tracking-tight" /* Increased text size */
        >
          SWANE
        </span>
        <span
          className="text-4xl md:text-5xl font-medium tracking-tight ml-2" /* Increased text size and margin */
        >
          CREATIVE
        </span>
      </div>
    </div>
  );
};

export default Logo;
