import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import bhan from "@/components/assets/images/bhan.png";
export default function Navbar() {
  return (
    <>
      <nav className="max-w-7xl mx-auto  px-8 py-6 grid grid-cols-3 items-center border">
        {/*BHAAN LOGO*/}
        <div className="flex justify-start items-center">
          <img
            src={bhan}
            alt=""
            className="h-20"
          />
        </div>
        {/*Navigation Menu*/}
        <div className="flex items-center justify-center">
          <NavigationMenu className="w-max ">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-black text-2xl font-sans transition-all duration-300 hover:text-[#C86432] hover:bg-[#F3EFE6]    hover:underline">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black text-2xl font-sans transition-all duration-300 hover:text-[#C86432] hover:bg-[#F3EFE6] hover:underline">
                  Publication
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black text-2xl font-sans transition-all duration-300  hover:text-[#C86432] hover:bg-[#F3EFE6] hover:underline">
                  Events
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-black text-2xl font-sans transition-all duration-300 hover:text-[#C86432] hover:bg-[#F3EFE6]  hover:underline">
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-black text-2xl font-sans transition-all duration-300    hover:text-[#C86432] hover:bg-[#F3EFE6] hover:-translate-y-0.5 hover:underline">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/*button latest*/}
        <div className="flex justify-end items-center">
          <button className="border border-[#C86432] text-[#C86432] px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#C86432] hover:text-white hover:-translate-y-1 hover:shadow-lg active:scale-95">
            Latest Issue
          </button>
        </div>
      </nav>
    </>
  );
}
