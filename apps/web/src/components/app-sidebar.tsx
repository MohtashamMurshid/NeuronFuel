import * as React from "react";
import {
  IconFile,
  IconMicrophone,
  IconUpload,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { UserButton } from "@clerk/nextjs";

import { NavMain } from "@/components/nav-main";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Mountain } from "lucide-react";

const data = {
  navMain: [
    {
      title: "Document Upload",
      url: "#",
      icon: IconUpload,
      isPrimary: true,
    },
    {
      title: "Blank Document",
      url: "#",
      icon: IconFile,
    },
    {
      title: "Record Audio",
      url: "#",
      icon: IconMicrophone,
    },
    {
      title: "YouTube Video",
      url: "#",
      icon: IconBrandYoutube,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/">
                <Mountain className="!size-5" />
                <span className="text-lg font-semibold">Neuron Fuel</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-col items-center gap-2 p-6 w-full">
          <div className="flex items-center gap-2 w-full justify-center">
            <ModeToggle />
            <div className="text-base text-muted-foreground">Change Theme</div>
          </div>
          <div className="flex items-center gap-2 w-full justify-center dark:text-white">
            <UserButton showName={true} />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
