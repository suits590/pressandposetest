import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import classicImage from "@/assets/classic-booth.jpg";
import heroImage from "@/assets/hero-main.jpg";

const ClassicBooth = () => {
  const features = [
    {
      title: "Timeless Design",
      description: "A refined booth aesthetic that blends seamlessly with any elegant event setting.",
    },
    {
      title: "High-Quality Prints",
      description: "Professional-grade photo strips and prints that guests can take home as keepsakes.",
    },
    {
      title: "Customizable Templates",
      description: "Photo layouts tailored to match your event's theme and color palette.",
    },
    {
      title: "Prop Collection",
      description: "Curated accessories that maintain sophistication while adding personality.",
    },
  ];

  const idealFor = [
    "Wedding receptions",
    "Engagement parties",
    "Private celebrations",
    "Milestone birthdays",
    "Anniversary events",
    "Elegant gatherings",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={classicImage}
            alt="Classic photo booth rental in Tampa, Florida"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container-luxury relative z-10">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Tampa, FL</p>
            <h1 className="text-display md:text-display-lg font-serif text-foreground mb-6">
              Classic Photo Booth
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              The beloved photo booth experience, refined for modern sophistication 
              and elegant Tampa celebrations.
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
            <div className="order-2 lg:order-1 image-hover rounded-sm overflow-hidden">
              <img
                src={heroImage}
                alt="Classic photo booth at Tampa wedding"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-heading-lg md:text-display font-serif text-foreground mb-6">
                Timeless Fun, Modern Refinement
              </h2>
              <div className="w-16 h-px bg-primary/40 mb-8" />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Our Classic Photo Booth captures the joy of traditional photo booth fun while 
                  maintaining the sophisticated atmosphere your event deserves. This isn't the 
                  photo booth of casual arcades—it's a thoughtfully designed experience for 
                  discerning celebrations.
                </p>
                <p>
                  Every element, from the booth's sleek exterior to the quality of our prints, 
                  reflects our commitment to excellence. Guests of all ages will enjoy creating 
                  memorable moments together while you receive timeless keepsakes from your 
                  Tampa celebration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-heading-lg font-serif text-foreground mb-4">
              Classic Booth Features
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional charm elevated with premium quality
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
              Perfect For
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
            Add Timeless Memories to Your Tampa Event
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-10">
            Let's bring the classic photo booth experience to your celebration.
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

export default ClassicBooth;
