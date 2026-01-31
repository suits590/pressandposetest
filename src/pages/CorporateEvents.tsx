import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import corporateImage from "@/assets/corporate-booth.jpg";
import heroImage from "@/assets/hero-main.jpg";

const CorporateEvents = () => {
  const features = [
    {
      title: "Custom Branding",
      description: "Your logo, colors, and messaging integrated seamlessly into every photo and print.",
    },
    {
      title: "Data Collection",
      description: "Optional lead capture and email collection for marketing follow-up.",
    },
    {
      title: "Professional Setup",
      description: "Sleek, corporate-appropriate design that enhances your brand presence.",
    },
    {
      title: "Digital Delivery",
      description: "Instant sharing to social media with branded overlays and hashtags.",
    },
  ];

  const eventTypes = [
    "Corporate conferences",
    "Brand activations",
    "Product launches",
    "Trade shows",
    "Company celebrations",
    "Holiday parties",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={corporateImage}
            alt="Corporate photo booth rental in Tampa, Florida"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container-luxury relative z-10">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Tampa, FL</p>
            <h1 className="text-display md:text-display-lg font-serif text-foreground mb-6">
              Corporate Event Photo Booths
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Professional photo experiences designed to elevate your brand 
              and engage your Tampa audience.
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
                Elevate Your Brand Experience
              </h2>
              <div className="w-16 h-px bg-primary/40 mb-8" />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  In today's competitive landscape, memorable brand experiences set you apart. 
                  Our corporate photo booth solutions are designed specifically for Tampa 
                  businesses seeking to create meaningful connections with their audience.
                </p>
                <p>
                  From trade show activations to company celebrations, we deliver polished, 
                  professional photo experiences that reflect your brand's commitment to 
                  excellence. Every touchpoint is customized to reinforce your corporate 
                  identity while providing genuine value to your guests.
                </p>
              </div>
            </div>
            <div className="image-hover rounded-sm overflow-hidden">
              <img
                src={heroImage}
                alt="Corporate photo booth activation in Tampa"
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
              Corporate-Ready Features
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Professional solutions designed for business results
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

      {/* Event Types */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading-lg font-serif text-foreground mb-8">
              Ideal For
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {eventTypes.map((item) => (
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

      {/* Tampa Focus */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading-lg font-serif text-foreground mb-6">
              Serving Tampa's Business Community
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We understand the Tampa corporate landscape and have proudly partnered with 
              leading businesses throughout the region. From downtown conferences to 
              waterfront galas, our team delivers seamless execution for events of every scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our professional attendants understand corporate environments and represent 
              your brand with the polish and discretion your event demands.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-luxury text-center">
          <h2 className="text-heading-lg md:text-display font-serif text-background mb-6">
            Elevate Your Next Corporate Event
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-10">
            Let's discuss how we can create a custom photo experience for your Tampa business event.
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

export default CorporateEvents;
