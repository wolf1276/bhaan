import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import bhan from "@/components/assets/images/bhan.png";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const navStyle =
    "text-zinc-800 text-3xl font-medium transition-all duration-300 hover:text-black hover:-translate-y-0.5";

  return (
    <nav className="w-full px-8 py-6 grid grid-cols-3 items-center  ">
      {/* Logo */}
      <div className="flex justify-start items-center">
        <img src={bhan} alt="Bhaan Logo" className="h-20" />
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center relative ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navStyle}>
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={navStyle}>
                Publications
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className="p-4 min-w-50">Latest Issue</div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={navStyle}>
                Events
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className="p-4 min-w-50">Upcoming Events</div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navStyle}>
                Gallery
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navStyle}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Latest Issue Button */}
      <div className="flex justify-end items-center">
        <button className="group border border-zinc-700 text-zinc-800 px-5 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:bg-zinc-900 hover:text-[#F3EFE6] hover:shadow-lg">
          Latest Issue
          <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-[-45deg]" />
        </button>
      </div>
    </nav>
  );
}
