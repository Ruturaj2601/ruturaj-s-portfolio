import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Working with them was an absolute pleasure. They delivered our project ahead of schedule with exceptional quality. Their attention to detail and problem-solving skills are outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCo",
      content: "An incredibly talented developer who brings creative solutions to complex problems. The user experience they created for our app exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, DataFlow Solutions",
      content: "Professional, responsive, and highly skilled. They transformed our vision into reality and provided valuable insights throughout the development process.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Founder, CloudScale",
      content: "Exceptional work! They not only met our requirements but suggested improvements that significantly enhanced our platform's performance and user engagement.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative glass-effect p-8 md:p-12 rounded-3xl">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/20" />
            
            <div className="text-center mb-8">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-2xl">★</span>
                ))}
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic mb-8">
                "{currentTestimonial.content}"
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold font-heading">{currentTestimonial.name}</h4>
              <p className="text-primary">{currentTestimonial.role}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:scale-110 transition-transform"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:scale-110 transition-transform"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
