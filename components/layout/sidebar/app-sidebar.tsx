"use client";

import {
  Bookmark,
  BookOpen,
  Flame,
  Home,
  LucideIcon,
  MessageCircle,
  Settings,
  Tag,
  Trophy,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import SidebarItem from "./sidebar-item";
import IconCard from "@/components/ui/icon-card";

interface SidebarMenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

const menuItems: SidebarMenuItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Books",
    url: "/books",
    icon: BookOpen,
  },
  {
    title: "Questions",
    url: "/questions",
    icon: MessageCircle,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: Tag,
  },
  {
    title: "Bookmarks",
    url: "/bookmarks",
    icon: Bookmark,
  },
  {
    title: "Leaderboard",
    url: "/leaderboard",
    icon: Trophy,
  },
];

const footerItems: SidebarMenuItem[] = [
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center border-b border-gray-950 px-3 py-4.5">
        <IconCard icon={Flame} />
        <span className="text-xl font-semibold">FireRead</span>
      </SidebarHeader>
      <SidebarContent className="mt-1">
        <SidebarGroup className="py-0">
          <SidebarGroupContent>
            <SidebarMenu className="my-2 gap-0.5">
              {menuItems.map((item) => (
                <SidebarItem key={item.title} icon={item.icon} title={item.title} href={item.url} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-950 p-0">
        <SidebarGroup className="py-0">
          <SidebarGroupContent>
            <SidebarMenu className="my-2 gap-0.5">
              {footerItems.map((item) => (
                <SidebarItem key={item.title} icon={item.icon} title={item.title} href={item.url} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
