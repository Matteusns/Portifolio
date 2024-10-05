import Link from "next/link";
import { Nav } from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Mateus<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Main nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>
        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};