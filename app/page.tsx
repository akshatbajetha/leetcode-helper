import Chat from "@/components/Chat";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background px-4 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <h1 className="text-xl font-bold">DSA Teaching Assistant</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 h-screen w-full items-center justify-center p-4">
        <Chat />
      </main>
    </div>
  );
}
