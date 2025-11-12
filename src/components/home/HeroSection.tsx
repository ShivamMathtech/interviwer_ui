import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4">
      <div className="absolute inset-0 bg-gradient-subtle -z-10" />
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Trusted by 10,000+ professionals
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Master Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Virtual Interviews
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Practice with AI-powered interview panels, live coding challenges, 
              and real-time feedback. Get ready for your dream job.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Start Practicing Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Interviews</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="Virtual interview platform interface"
              className="relative rounded-2xl shadow-elegant w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
