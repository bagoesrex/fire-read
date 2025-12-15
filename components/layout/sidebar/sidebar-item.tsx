"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  title: string;
  href: string;
}

export default function SidebarItem({ icon: Icon, title, href }: SidebarItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild className="h-fit space-x-2">
        <Link href={href} className="flex items-center gap-2">
          <div
            className={`rounded-xl p-2 transition-colors ${active ? "bg-orange-400 text-white" : "bg-muted"} `}
          >
            <Icon size={20} className={`${active ? "text-white" : "text-gray-500"}`} />
          </div>

          <span className={`${active ? "font-medium" : "text-muted-foreground"}`}>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
