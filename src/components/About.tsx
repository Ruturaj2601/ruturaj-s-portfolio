import profileImg from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-[hsl(var(--gradient-end))] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <img
              src={profileImg}
              alt="Profile"
              className="relative rounded-2xl w-full shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-heading">
              Hi, I'm <span className="text-gradient">Ruturaj Patil</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies, I transform complex
              problems into elegant, efficient solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community. I believe in continuous learning
              and staying updated with the latest industry trends.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { label: "Projects Completed", value: "50+" },
                { label: "Years Experience", value: "5+" },
                { label: "Technologies", value: "20+" },
                { label: "Happy Clients", value: "30+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect p-4 rounded-lg text-center hover:scale-105 transition-transform"
                >
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
