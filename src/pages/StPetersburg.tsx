import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-wedding.jpg";
import glamImage from "@/assets/glam-booth.jpg";
import classicImage from "@/assets/classic-booth.jpg";
import corporateImage from "@/assets/corporate-booth.jpg";
const StPetersburg = () => {
  const services = [{
    title: "Glam Booth",
    description: "Studio-quality portraits with Hollywood-style lighting for the most elegant celebrations.",
    image: glamImage,
    link: "/glam-photo-booth-tampa-fl"
  }, {
    title: "Classic Photo Booth",
    description: "Timeless photo booth experience refined for modern sophistication.",
    image: classicImage,
    link: "/classic-photo-booth-tampa-fl"
  }, {
    title: "Corporate Events",
    description: "Professional photo activations tailored for brands and businesses.",
    image: corporateImage,
    link: "/corporate-photo-booth-tampa-fl"
  }];
  const eventTypes = [{
    title: "Weddings",
    description: "Capture every precious moment of your celebration"
  }, {
    title: "Baby Showers",
    description: "Celebrate new beginnings with elegant memories"
  }, {
    title: "Birthday Parties",
    description: "Create lasting impressions for milestone moments"
  }, {
    title: "Corporate Events",
    description: "Elevate your brand experience with sophistication"
  }];
  const whyChooseUs = [{
    title: "Premium Equipment",
    description: "Studio-grade cameras and professional lighting for flawless results"
  }, {
    title: "Thoughtful Design",
    description: "Every setup is curated to complement your event's aesthetic"
  }, {
    title: "Professional Attendants",
    description: "Dedicated team ensuring a seamless, polished experience"
  }, {
    title: "St. Petersburg Focused",
    description: "Proudly serving St. Pete's most distinguished events"
  }];
  const faq = [{
    question: "What areas do you serve?",
    answer: "We're based in the Tampa Bay area and regularly serve St. Petersburg, Tampa, Clearwater, and surrounding cities."
  }, {
    question: "How much does a photo booth rental cost?",
    answer: "Pricing depends on the booth style, rental length, and add-ons. Request a quote and we'll tailor the package to your event."
  }, {
    question: "Do you provide an attendant?",
    answer: "Yes. Every rental includes a professional attendant to handle setup, assist guests, and manage the experience."
  }, {
    question: "When do we receive our photos?",
    answer: "You'll receive a digital gallery after the event, with options for instant sharing during the event."
  }, {
    question: "Can we customize the experience?",
    answer: "Yes — overlays, layouts, and branding can be customized to match your event."
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury photo booth at elegant St. Petersburg wedding reception" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        
        <div className="container-luxury relative z-10">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-display md:text-display-lg lg:text-display-xl font-serif text-foreground mb-6">
              Photo Booth Rentals in St. Petersburg, FL
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Luxury photo booth experiences for weddings, corporate events, and celebrations in St. Pete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/request-a-quote">
                <Button variant="luxury" size="luxury">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/glam-photo-booth-tampa-fl">
                <Button variant="luxury-outline" size="luxury">
                  View Our Booths
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading-lg md:text-display font-serif text-foreground mb-6">
              An Experience Beyond the Ordinary
            </h2>
            <div className="divider-elegant" />
            <p className="text-lg text-muted-foreground leading-relaxed">We bring studio-quality photo booth experiences to St. Petersburg's finest events. Whether you're drawn to the refined glamour of our <Link to="/glam-photo-booth-tampa-fl" className="text-primary hover:underline">Glam Booth</Link> or the timeless charm of our <Link to="/classic-photo-booth-tampa-fl" className="text-primary hover:underline">Classic Booth</Link>, every detail is curated to complement your celebration seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-heading-lg md:text-display font-serif text-foreground mb-4">
              Our Photo Booth Collection
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Select the perfect experience for your St. Pete event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => <Link key={service.title} to={service.link} className="group" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="image-hover rounded-sm overflow-hidden mb-6">
                  <img src={service.image} alt={`${service.title} photo booth rental in St. Petersburg`} className="w-full aspect-[3/4] object-cover" />
                </div>
                <h3 className="text-subheading font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-heading-lg md:text-display font-serif text-foreground mb-6">
                Perfect For Life's Most Celebrated Moments
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Whether you're planning an intimate gathering or a grand celebration in St. Petersburg, 
                our photo booth experiences are tailored to complement the elegance of your event. 
                From stunning waterfront weddings to vibrant <Link to="/corporate-photo-booth-tampa-fl" className="text-primary hover:underline">corporate events</Link>, we have you covered.
              </p>
              
              <div className="space-y-6">
                {eventTypes.map(event => <div key={event.title} className="flex gap-4">
                    <div className="w-1 bg-primary/30 rounded-full" />
                    <div>
                      <h4 className="font-serif text-lg text-foreground mb-1">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            <div className="image-hover rounded-sm overflow-hidden">
              <img src={glamImage} alt="Elegant photo booth experience in St. Petersburg" className="w-full aspect-square object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-heading-lg md:text-display font-serif text-foreground mb-4">
              The St. Petersburg Photo Booth Difference
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every detail considered, every moment captured with precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map(item => <div key={item.title} className="text-center">
                <h4 className="font-serif text-lg text-foreground mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-heading-lg md:text-display font-serif text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="divider-elegant" />
            </div>

            <Accordion type="single" collapsible>
              {faq.map((item, index) => <AccordionItem key={index} value={`faq-${index}`} className="border-b border-foreground/10">
                  <AccordionTrigger className="text-base font-serif text-foreground hover:text-primary py-5 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground">
        <div className="container-luxury text-center">
          <h2 className="text-heading-lg md:text-display font-serif text-background mb-6">
            Ready to Elevate Your Event?
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-10">
            Let's discuss how we can create an unforgettable photo experience 
            tailored to your St. Petersburg celebration.
          </p>
          <Link to="/request-a-quote">
            <Button variant="luxury-outline" size="luxury-lg" className="border-background/30 text-background hover:bg-background hover:text-foreground">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </Layout>;
};
export default StPetersburg;
