import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import glamImage from "@/assets/glam-booth.jpg";
import heroImage from "@/assets/hero-main.jpg";

const GlamBooth = () => {
  const features = [
    {
      title: "Studio-Quality Lighting",
      description: "Hollywood-inspired ring lights create the perfect, flattering illumination for every guest.",
    },
    {
      title: "Professional Retouching",
      description: "Real-time beauty enhancements that let guests look and feel their absolute best.",
    },
    {
      title: "Elegant Design",
      description: "A sleek, sophisticated setup that complements the aesthetic of upscale celebrations.",
    },
    {
      title: "Instant Sharing",
      description: "Digital delivery allows guests to share their photos instantly or print on-site.",
    },
  ];

  const idealFor = [
    "Luxury weddings",
    "Upscale bridal showers",
    "Elegant baby showers",
    "Milestone birthday celebrations",
    "Anniversary parties",
    "High-end private events",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={glamImage}
            alt="Glam photo booth rental in Tampa, Florida"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container-luxury relative z-10">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Tampa, FL</p>
            <h1 className="text-display md:text-display-lg font-serif text-foreground mb-6">
              Glam Photo Booth
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Studio-quality portraits with Hollywood-style lighting, designed for 
              Tampa's most elegant celebrations.
            </p>
            <Link to="/request-a-quote">
              <Button variant="luxury" size="luxury">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-heading-lg md:text-display font-serif text-foreground mb-6">
                The Ultimate Portrait Experience
              </h2>
              <div className="w-16 h-px bg-primary/40 mb-8" />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Our Glam Booth brings the luxury of a professional photo studio directly to your event. 
                  With carefully calibrated lighting and advanced camera technology, every guest receives 
                  portraits that rival magazine-quality photography.
                </p>
                <p>
                  Perfect for discerning hosts who understand that great photography isn't just about 
                  capturing a moment—it's about making everyone look and feel their best. The Glam Booth 
                  experience is designed to complement the sophistication of your Tampa celebration.
                </p>
              </div>
            </div>
            <div className="image-hover rounded-sm overflow-hidden">
              <img
                src={heroImage}
                alt="Luxury glam booth experience at Tampa event"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-heading-lg font-serif text-foreground mb-4">
              What Sets Our Glam Booth Apart
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every detail refined for an exceptional guest experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-6">
                <div className="w-px bg-primary/30 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading-lg font-serif text-foreground mb-8">
              Ideal For
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {idealFor.map((item) => (
                <div 
                  key={item} 
                  className="py-4 px-6 border border-border rounded-sm text-sm text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-luxury text-center">
          <h2 className="text-heading-lg md:text-display font-serif text-background mb-6">
            Bring the Glam Booth to Your Tampa Event
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-10">
            Let's create a custom photo experience that matches the elegance of your celebration.
          </p>
          <Link to="/request-a-quote">
            <Button 
              variant="luxury-outline" 
              size="luxury-lg" 
              className="border-background/30 text-background hover:bg-background hover:text-foreground"
            >
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GlamBooth;
