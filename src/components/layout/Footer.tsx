import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border">
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-serif text-xl tracking-wide text-foreground">Press & Pose Photo Booth Co.</Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Luxury photo booth experiences for Tampa's most distinguished events.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/glam-photo-booth-tampa-fl" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Glam Booth
                </Link>
              </li>
              <li>
                <Link to="/classic-photo-booth-tampa-fl" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Classic Photo Booth
                </Link>
              </li>
              <li>
                <Link to="/corporate-photo-booth-tampa-fl" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Corporate Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Get in Touch
            </h4>
            <p className="text-sm text-foreground/80 mb-4">
              Serving Tampa, FL and surrounding areas
            </p>
            <Link to="/request-a-quote" className="inline-block text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors">
              Request a Quote →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} Tampa Photo Booth Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;