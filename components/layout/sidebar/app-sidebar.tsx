"use client";

import {
  ChartBarStacked,
  CircleQuestionMark,
  Heart,
  Home,
  LogOut,
  Settings,
  Trophy,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import SidebarItem from "./sidebar-item";

const firstMenuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: ChartBarStacked,
  },
  {
    title: "Leaderboard",
    url: "#",
    icon: Trophy,
  },
  {
    title: "Favorite",
    url: "#",
    icon: Heart,
  },
];

const secondMenuItems = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Help",
    url: "#",
    icon: CircleQuestionMark,
  },
  {
    title: "Log Out",
    url: "#",
    icon: LogOut,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar className="p-4">
      <SidebarHeader className="font-bold">FIRE READ</SidebarHeader>
      <SidebarContent className="mt-3">
        <SidebarGroup className="border-b-2">
          <SidebarGroupLabel>MENU</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="my-2 gap-1.5">
              {firstMenuItems.map((item) => (
                <SidebarItem key={item.title} icon={item.icon} title={item.title} href={item.url} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-2 gap-1.5">
              {secondMenuItems.map((item) => (
                <SidebarItem key={item.title} icon={item.icon} title={item.title} href={item.url} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
