import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Video, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Sessions = () => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const availableSlots = [
    { date: "2025-01-15", time: "10:00 AM", interviewer: "Sarah Johnson", available: true },
    { date: "2025-01-15", time: "2:00 PM", interviewer: "Michael Chen", available: true },
    { date: "2025-01-15", time: "4:00 PM", interviewer: "Emma Davis", available: false },
    { date: "2025-01-16", time: "9:00 AM", interviewer: "Sarah Johnson", available: true },
    { date: "2025-01-16", time: "11:00 AM", interviewer: "Michael Chen", available: true },
    { date: "2025-01-16", time: "3:00 PM", interviewer: "Emma Davis", available: true },
  ];

  const handleBookSession = () => {
    if (selectedSkill && selectedDate && selectedTime) {
      toast.success("Session booked successfully!");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <nav className="bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Video className="w-6 h-6 text-primary" />
            <span className="bg-gradient-primary bg-clip-text text-transparent">InterviewPro</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost">Profile</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold mb-2">Book Interview Session</h1>
          <p className="text-muted-foreground">Choose your preferred time and skill area</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Session Details</CardTitle>
                <CardDescription>Configure your interview session</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Skill Area</Label>
                  <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select skill area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frontend">Frontend Development</SelectItem>
                      <SelectItem value="backend">Backend Development</SelectItem>
                      <SelectItem value="fullstack">Full Stack</SelectItem>
                      <SelectItem value="system-design">System Design</SelectItem>
                      <SelectItem value="algorithms">Algorithms & Data Structures</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Duration</Label>
                  <Select defaultValue="60">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="90">90 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Flexible scheduling</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Video className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">HD video quality</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Expert interviewers</span>
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  className="w-full mt-6"
                  onClick={handleBookSession}
                >
                  Book Session
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Available Time Slots</CardTitle>
                <CardDescription>Select a time that works best for you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {["2025-01-15", "2025-01-16"].map((date) => (
                    <div key={date}>
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">
                          {new Date(date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })}
                        </h3>
                      </div>
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {availableSlots
                          .filter((slot) => slot.date === date)
                          .map((slot, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSelectedDate(slot.date);
                                setSelectedTime(slot.time);
                              }}
                              disabled={!slot.available}
                              className={`p-4 rounded-lg border text-left transition-all ${
                                selectedDate === slot.date && selectedTime === slot.time
                                  ? "border-primary bg-primary/10"
                                  : slot.available
                                  ? "border-border hover:border-primary hover:shadow-soft"
                                  : "border-border opacity-50 cursor-not-allowed"
                              }`}
                            >
                              <div className="font-semibold mb-1">{slot.time}</div>
                              <div className="text-sm text-muted-foreground">{slot.interviewer}</div>
                              {!slot.available && (
                                <div className="text-xs text-destructive mt-1">Unavailable</div>
                              )}
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sessions;
