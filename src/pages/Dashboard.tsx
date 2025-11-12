import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Video, BarChart3, Clock, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const upcomingSessions = [
    {
      id: 1,
      title: "Technical Interview - Frontend",
      date: "Today, 3:00 PM",
      interviewer: "Sarah Johnson",
      duration: "60 min",
    },
    {
      id: 2,
      title: "System Design Discussion",
      date: "Tomorrow, 10:00 AM",
      interviewer: "Michael Chen",
      duration: "90 min",
    },
  ];

  const stats = [
    { label: "Interviews Completed", value: "12", icon: Video },
    { label: "Average Score", value: "85%", icon: BarChart3 },
    { label: "Total Practice Time", value: "18h", icon: Clock },
    { label: "Upcoming Sessions", value: "2", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <nav className="bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Video className="w-6 h-6 text-primary" />
            <span className="bg-gradient-primary bg-clip-text text-transparent">InterviewPro</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/sessions">
              <Button variant="outline">My Sessions</Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost">Profile</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here's your interview practice overview</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Your scheduled interview practice sessions</CardDescription>
                </div>
                <Link to="/sessions">
                  <Button variant="hero" size="sm">
                    <Plus className="w-4 h-4" />
                    Book Session
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-soft transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Video className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{session.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {session.date} • {session.duration}
                        </p>
                        <p className="text-sm text-muted-foreground">with {session.interviewer}</p>
                      </div>
                    </div>
                    <Link to="/interview/1">
                      <Button variant="outline" size="sm">
                        Join
                      </Button>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/sessions">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4" />
                    Book New Session
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4" />
                  View All Results
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Video className="w-4 h-4" />
                  Practice Now
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Technical Skills</span>
                    <span className="text-sm font-semibold">85%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary" style={{ width: "85%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Communication</span>
                    <span className="text-sm font-semibold">92%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary" style={{ width: "92%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Problem Solving</span>
                    <span className="text-sm font-semibold">78%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary" style={{ width: "78%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
