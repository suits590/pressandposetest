import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const RequestQuote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, eventType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Quote Request Received",
      description: "Thank you for your inquiry. We'll be in touch within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      eventLocation: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const eventTypes = [
    "Wedding",
    "Baby Shower",
    "Birthday Party",
    "Corporate Event",
    "Brand Activation",
    "Conference",
    "Holiday Party",
    "Other",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-display md:text-display-lg font-serif text-foreground mb-6">
              Request a Quote
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us about your event, and we'll craft a custom photo booth experience 
              tailored to your celebration. We typically respond within 24 hours.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm tracking-wide">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-12 bg-card border-border focus:border-primary"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm tracking-wide">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 bg-card border-border focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm tracking-wide">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="h-12 bg-card border-border focus:border-primary"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Event Type */}
              <div className="space-y-2">
                <Label htmlFor="eventType" className="text-sm tracking-wide">
                  Event Type *
                </Label>
                <Select
                  value={formData.eventType}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger className="h-12 bg-card border-border focus:border-primary">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Event Date */}
              <div className="space-y-2">
                <Label htmlFor="eventDate" className="text-sm tracking-wide">
                  Event Date *
                </Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="h-12 bg-card border-border focus:border-primary"
                />
              </div>

              {/* Event Location */}
              <div className="space-y-2">
                <Label htmlFor="eventLocation" className="text-sm tracking-wide">
                  Event Location *
                </Label>
                <Input
                  id="eventLocation"
                  name="eventLocation"
                  type="text"
                  required
                  value={formData.eventLocation}
                  onChange={handleInputChange}
                  className="h-12 bg-card border-border focus:border-primary"
                  placeholder="Venue name or address"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm tracking-wide">
                  Additional Details
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-[120px] bg-card border-border focus:border-primary resize-none"
                  placeholder="Tell us more about your event and any specific requirements..."
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="luxury"
                size="luxury-lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-8">
              By submitting this form, you'll receive a personalized quote 
              tailored to your event's specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-heading font-serif text-foreground mb-6">
              What to Expect
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Once we receive your inquiry, our team will review your event details 
                and prepare a customized proposal. We believe every celebration is unique, 
                which is why we craft each quote specifically for your needs.
              </p>
              <p className="leading-relaxed">
                Expect a response within 24 hours, often sooner. We're here to answer 
                your questions and help you create an unforgettable photo experience 
                for your Tampa event.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RequestQuote;
