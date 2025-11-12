import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Video className="w-6 h-6 text-primary" />
          <span className="bg-gradient-primary bg-clip-text text-transparent">InterviewPro</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </Link>
          <Link to="/#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link to="/#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="hero">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
