"use client";

import { Bell, Book, ChevronDown, Flame, User } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAuth } from "@/features/auth/hooks/use-auth";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="z-50 bg-red-300">
      <div className="mx-auto flex max-w-6xl items-center justify-end p-10">
        {/* <div className="flex items-center gap-2">
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
        </div> */}

        {/* <nav className="space-x-4">
          <Link href="/">Books</Link>
          <Link href="/">Categories</Link>
          <Link href="/">Questions</Link>
          <Link href="/">About</Link>
        </nav> */}

        {/* <div className="flex items-center space-x-2">
          <Button variant={"ghost"}>Sign in</Button>
          <Button>
            <Flame />
            Get Started
          </Button>
        </div> */}

        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="flex items-center gap-2.5 px-2 py-1 hover:bg-transparent"
                variant={"ghost"}
              >
                {user && (
                  <Avatar className="h-9 w-9 overflow-hidden rounded-full">
                    <AvatarImage src={"chino.webp"} alt={"User"} />
                    {/* <AvatarFallback>
                  </AvatarFallback> */}
                  </Avatar>
                )}

                <span className="text-sm font-medium">{user ? user.email : "Guest"}</span>

                <ChevronDown size={2} />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => {}}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Bell strokeWidth={2} size={20} />
        </div>
      </div>
    </header>
  );
}
