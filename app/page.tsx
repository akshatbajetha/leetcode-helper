import Chat from "@/components/Chat";
import { ThemeToggle } from "@/components/theme-toggle";
import { Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header section */}
      <header className="sticky top-0 z-10 border-b bg-background px-4 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Bot className="mr-2 h-8 w-8" />
          <h1 className="text-xl font-bold">Leetcode Buddy</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Chat section */}
      <main className="flex-1 h-screen w-full items-center justify-center p-4">
        <Chat />
      </main>

      {/* Footer section */}
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-5xl">
          <p>
            Built with ❤️ by{" "}
            <a
              className="underline font-bold"
              href="https://github.com/akshatbajetha"
              target="_blank"
            >
              Akshat Bajetha
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
