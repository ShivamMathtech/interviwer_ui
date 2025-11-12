import { UserPlus, Calendar, Video, Award } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your free account in seconds",
    step: "01",
  },
  {
    icon: Calendar,
    title: "Book Session",
    description: "Choose a time that works for you",
    step: "02",
  },
  {
    icon: Video,
    title: "Practice Interview",
    description: "Join live sessions with coding and whiteboard",
    step: "03",
  },
  {
    icon: Award,
    title: "Get Feedback",
    description: "Review detailed analytics and improve",
    step: "04",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Get started in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary -translate-x-1/2" />
              )}
              
              <div className="relative text-center space-y-4">
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-full" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
