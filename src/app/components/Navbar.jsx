import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"

const links = [
  { label: "Home", to: "/" },
  { label: "Price", to: "/price" },
  { label: "Contact", to: "/contact" },
  { label: "About", to: "/about" },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/woodlogo.jpg"
            alt="Woodstone Logo"
            className="h-10 w-10 rounded-md object-cover"
          />
          <span className="text-lg font-semibold tracking-tight">
            Woodstone
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {links.map((l) => {
                const active = location.pathname === l.to
                return (
                  <NavigationMenuItem key={l.to}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={l.to}
                        className={`rounded-md px-3 py-2 text-sm font-medium transition
                          ${
                            active
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-accent hover:text-accent-foreground"
                          }`}
                      >
                        {l.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden">
              Menu
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[300px] sm:w-[360px] bg-slate-300 text-black border-slate-800"
          >
            <SheetHeader>
              <SheetTitle>Woodstone</SheetTitle>
            </SheetHeader>

            <div className="mt-6 flex flex-col gap-2">
              {links.map((l) => {
                const active = location.pathname === l.to
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition hover:bg-accent
                      ${active ? "bg-accent text-accent-foreground" : ""}`}
                  >
                    {l.label}
                  </Link>
                )
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
