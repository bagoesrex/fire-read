"use client";

import { Book, Flame } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="top-0 z-50 border-b border-b-gray-400">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Book size={30} strokeWidth={1} strokeOpacity={0.6} className="-rotate-4" />
            <Flame
              size={15}
              className="absolute top-0 -right-1 animate-bounce"
              color="orange"
              strokeWidth={2}
            />
            <Flame
              size={10}
              className="absolute -top-1.5 right-1.5 animate-bounce"
              color="orange"
              strokeWidth={2}
            />
            <Flame
              size={7}
              className="absolute -top-2 -right-1 animate-bounce"
              color="orange"
              strokeWidth={3}
            />
          </div>
          <p className="text-2xl font-semibold">Firebook</p>
        </div>

        <nav className="space-x-4">
          <Link href="/">Books</Link>
          <Link href="/">Categories</Link>
          <Link href="/">Questions</Link>
          <Link href="/">About</Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant={"ghost"}>Sign in</Button>
          <Button>
            <Flame />
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
