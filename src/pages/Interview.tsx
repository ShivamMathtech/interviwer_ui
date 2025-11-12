import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  PhoneOff, 
  Share2,
  MessageSquare,
  Code2,
  PenTool,
  Clock,
  User
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Interview = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [codeContent, setCodeContent] = useState(`// Write your solution here\nfunction solution() {\n  \n}`);
  const [language, setLanguage] = useState("javascript");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleEndInterview = () => {
    toast.success("Interview session ended");
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <div className="h-16 border-b border-border bg-background/80 backdrop-blur-lg flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-primary" />
            <span className="font-semibold">Technical Interview - Frontend</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            {formatTime(timeElapsed)}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1 bg-accent/50 rounded-full text-sm">
            <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            Recording
          </div>
          <Button variant="destructive" size="sm" onClick={handleEndInterview}>
            <PhoneOff className="w-4 h-4" />
            End Interview
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Video & Chat */}
        <div className="w-80 border-r border-border flex flex-col">
          {/* Video Tiles */}
          <div className="p-4 space-y-4">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <User className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-background/80 backdrop-blur rounded text-xs font-medium">
                  You
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <User className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-background/80 backdrop-blur rounded text-xs font-medium">
                  Sarah Johnson (Interviewer)
                </div>
              </div>
            </Card>
          </div>

          {/* Controls */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Button
                variant={isMuted ? "destructive" : "outline"}
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className="flex-1"
              >
                {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
              <Button
                variant={isVideoOff ? "destructive" : "outline"}
                size="sm"
                onClick={() => setIsVideoOff(!isVideoOff)}
                className="flex-1"
              >
                {isVideoOff ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Chat */}
          <div className="flex-1 border-t border-border flex flex-col">
            <div className="p-3 border-b border-border">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Chat</span>
              </div>
            </div>
            <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">Interviewer • 10:30 AM</span>
                <div className="bg-muted p-2 rounded">
                  Welcome! Let's start with the coding challenge.
                </div>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <span className="text-xs text-muted-foreground">You • 10:31 AM</span>
                <div className="bg-primary text-primary-foreground p-2 rounded">
                  Thank you! I'm ready.
                </div>
              </div>
            </div>
            <div className="p-3 border-t border-border">
              <Textarea placeholder="Type a message..." className="min-h-[60px]" />
            </div>
          </div>
        </div>

        {/* Center Panel - Code Editor & Whiteboard */}
        <div className="flex-1 flex flex-col">
          <Tabs defaultValue="code" className="flex-1 flex flex-col">
            <div className="border-b border-border px-4">
              <TabsList>
                <TabsTrigger value="code">
                  <Code2 className="w-4 h-4 mr-2" />
                  Code Editor
                </TabsTrigger>
                <TabsTrigger value="whiteboard">
                  <PenTool className="w-4 h-4 mr-2" />
                  Whiteboard
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="code" className="flex-1 m-0 p-4">
              <div className="h-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="cpp">C++</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Run Tests</Button>
                    <Button variant="hero" size="sm">Submit</Button>
                  </div>
                </div>

                <Card className="flex-1 overflow-hidden">
                  <CardContent className="p-0 h-full">
                    <Textarea
                      value={codeContent}
                      onChange={(e) => setCodeContent(e.target.value)}
                      className="h-full font-mono text-sm border-0 resize-none"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm font-medium mb-2">Output Console</div>
                    <div className="bg-muted p-3 rounded font-mono text-xs">
                      <div className="text-muted-foreground">Run your code to see output...</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="whiteboard" className="flex-1 m-0 p-4">
              <Card className="h-full">
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <Button variant="outline" size="sm">Pen</Button>
                    <Button variant="outline" size="sm">Rectangle</Button>
                    <Button variant="outline" size="sm">Circle</Button>
                    <Button variant="outline" size="sm">Arrow</Button>
                    <Button variant="outline" size="sm">Text</Button>
                    <div className="flex-1" />
                    <Button variant="outline" size="sm">Clear</Button>
                  </div>
                  <div className="flex-1 border-2 border-dashed border-border rounded-lg flex items-center justify-center text-muted-foreground">
                    Draw your diagrams here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Panel - Question */}
        <div className="w-96 border-l border-border flex flex-col overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-accent/50 rounded text-xs font-medium">Medium</span>
                <span className="text-xs text-muted-foreground">Array • Hash Table</span>
              </div>
              <h2 className="text-xl font-bold mb-4">Two Sum</h2>
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  Given an array of integers <code>nums</code> and an integer <code>target</code>, 
                  return indices of the two numbers such that they add up to <code>target</code>.
                </p>
                <p className="text-muted-foreground">
                  You may assume that each input would have exactly one solution, and you may not 
                  use the same element twice.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Example 1:</h3>
              <Card>
                <CardContent className="p-3 font-mono text-sm space-y-1">
                  <div><strong>Input:</strong> nums = [2,7,11,15], target = 9</div>
                  <div><strong>Output:</strong> [0,1]</div>
                  <div className="text-muted-foreground">Explanation: nums[0] + nums[1] = 9</div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Constraints:</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>2 ≤ nums.length ≤ 10⁴</li>
                <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                <li>-10⁹ ≤ target ≤ 10⁹</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
