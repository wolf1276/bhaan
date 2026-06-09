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
  return (
    <>
      <nav className="w-full mx-auto  px-8 py-6 grid grid-cols-3 items-center border">
        {/*BHAAN LOGO*/}
        <div className="flex justify-start items-center">
          <img src={bhan} alt="" className="h-20" />
        </div>
        {/*Navigation Menu*/}
        <div className="flex items-center justify-center">
          <NavigationMenu className="w-max ">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-zync-800 text-2xl font-sans transition-all duration-300 hover:text-black hover:bg-[#F3EFE6]  hover:-translate-y-0.5   hover:underline">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-zync-800 text-2xl font-sans transition-all duration-300 hover:text-black hover:bg-[#F3EFE6] hover:-translate-y-0.5 hover:underline">
                  Publication
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-zync-800 text-2xl font-sans transition-all duration-300  hover:text-black hover:bg-[#F3EFE6] hover:-translate-y-0.5 hover:underline">
                  Events
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-zync-800 text-2xl font-sans transition-all duration-300 hover:text-black hover:bg-[#F3EFE6] hover:-translate-y-0.5 hover:underline">
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-zync-800 text-2xl font-sans transition-all duration-300    hover:text-black hover:bg-[#F3EFE6] hover:-translate-y-0.5 hover:underline">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/*button latest*/}
        <div className="flex justify-end items-center">
          <button className="group border border-zinc-700 text-zinc-800 px-5 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:bg-zinc-900 hover:text-[#F3EFE6]">
            Latest Issue
            <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-[-45deg]" />
          </button>
        </div>
      </nav>
    </>
  );
}
