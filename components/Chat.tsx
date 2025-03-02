"use client";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Bot, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";

// Define the message type
interface Message {
  role: "user" | "assistant";
  content: string;
}

function Chat() {
  const [input, setInput] = useState("");

  // Default welcome message
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your Leetcode Buddy. Share a LeetCode problem link and ask me a question about it. I'll help guide you without giving away the solution.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [problemLink, setProblemLink] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    const doubt = input.trim();
    const link = problemLink.trim();

    // Send the user input to the OpenAI API and fetching the response
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ link, doubt }),
    });
    const data = await response.json();

    // Storing GPT's response
    const aiResponse: Message = {
      role: "assistant",
      content: data.response,
    };

    setMessages((prev) => [...prev, aiResponse]);
    setIsLoading(false);

    setInput("");
  };

  // Function to handle Enter button submission
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="h-screen w-full px-64 flex flex-col items-center">
      <div className="p-2 h-[80vh] w-full">
        {/* Chat COntainer */}
        <Card className="min-h-full flex flex-col border-primary/20">
          <ScrollArea className="h-full w-full p-2 md:p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 max-h-full ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                {msg.role === "user" ? (
                  <div className="inline-block p-2 md:p-3 rounded-lg text-sm md:text-base max-w-[85%] bg-primary text-primary-foreground">
                    {msg.content}
                  </div>
                ) : (
                  <div className="flex flex-row items-center gap-x-4">
                    <Bot className="h-8 w-8 text-foreground" />
                    <div className="inline-block p-2 md:p-3 rounded-lg text-sm md:text-base max-w-[85%] bg-muted">
                      {msg.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ScrollArea>
        </Card>
      </div>

      {/* Input Box */}
      <div className="bg-background flex justify-center items-center w-full rounded-lg p-4 border border-primary/20">
        <form
          onSubmit={handleSubmit}
          className="w-full text-center flex flex-col gap-2"
        >
          <div className="space-y-2">
            <Input
              id="problem-link"
              placeholder="Enter Leetcode problem URL - https://leetcode.com/problems/..."
              value={problemLink}
              onChange={(e) => setProblemLink(e.target.value)}
            />
          </div>
          <div className="flex-1 relative">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question about your DSA problem..."
              disabled={isLoading}
              className="resize-none min-h-[44px] max-h-[200px] pr-[56px] text-sm md:text-base"
              rows={1}
              style={{
                height: "auto",
                minHeight: "44px",
                maxHeight: "200px",
              }}
            />
            <Button
              type="submit"
              disabled={isLoading}
              size="icon"
              className="absolute right-1 bottom-1"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Chat;
