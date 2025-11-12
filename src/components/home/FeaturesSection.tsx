import { Video, Code2, PenTool, BarChart3, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Video,
    title: "Live Video Interviews",
    description: "Practice with realistic video interviews and get comfortable with the format.",
  },
  {
    icon: Code2,
    title: "Coding Challenges",
    description: "Solve problems in real-time with our integrated code editor supporting multiple languages.",
  },
  {
    icon: PenTool,
    title: "Interactive Whiteboard",
    description: "Draw diagrams, explain system designs, and collaborate visually during interviews.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Get comprehensive feedback on your performance with AI-powered insights.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions at your convenience with our easy-to-use calendar system.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data and interview recordings are encrypted and completely confidential.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive tools and features designed to help you ace your next interview
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border hover:shadow-soft transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
