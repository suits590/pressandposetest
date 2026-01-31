import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const services = [{
    name: "Glam Booth",
    path: "/glam-photo-booth-tampa-fl"
  }, {
    name: "Classic Photo Booth",
    path: "/classic-photo-booth-tampa-fl"
  }, {
    name: "Corporate Events",
    path: "/corporate-photo-booth-tampa-fl"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <nav className="container-luxury">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="font-serif text-xl md:text-2xl tracking-wide text-foreground hover:text-primary transition-colors">Press & Pose Photo Booth Co.</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className={cn("text-sm tracking-wide transition-colors hover:text-primary", isActive("/") ? "text-primary" : "text-muted-foreground")}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className={cn("flex items-center gap-1 text-sm tracking-wide transition-colors hover:text-primary", services.some(s => isActive(s.path)) ? "text-primary" : "text-muted-foreground")}>
                Services
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isServicesOpen && "rotate-180")} />
              </button>

              {/* Dropdown Menu */}
              <div className={cn("absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200", isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible")}>
                <div className="bg-background border border-border rounded-sm shadow-lg min-w-[200px] py-2">
                  {services.map(service => <Link key={service.path} to={service.path} className={cn("block px-6 py-3 text-sm transition-colors hover:bg-accent", isActive(service.path) ? "text-primary" : "text-muted-foreground")}>
                      {service.name}
                    </Link>)}
                </div>
              </div>
            </div>

            <Link to="/request-a-quote">
              <Button variant="luxury" size="luxury">
                Request a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn("md:hidden overflow-hidden transition-all duration-300", isMenuOpen ? "max-h-[400px] pb-6" : "max-h-0")}>
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            <Link to="/" className={cn("text-sm tracking-wide py-2", isActive("/") ? "text-primary" : "text-muted-foreground")} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>

            <div className="text-xs uppercase tracking-widest text-muted-foreground/60 pt-2">
              Services
            </div>
            
            {services.map(service => <Link key={service.path} to={service.path} className={cn("text-sm tracking-wide py-2 pl-4", isActive(service.path) ? "text-primary" : "text-muted-foreground")} onClick={() => setIsMenuOpen(false)}>
                {service.name}
              </Link>)}

            <Link to="/request-a-quote" onClick={() => setIsMenuOpen(false)} className="mt-4">
              <Button variant="luxury" size="luxury" className="w-full">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>;
};
export default Header;