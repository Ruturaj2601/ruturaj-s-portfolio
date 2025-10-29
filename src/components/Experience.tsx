import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Assistant System Engineer-Trainee",
      company: "Tata Consultancy Services",
      period: "August 2025 - Present",
      //description: "Leading development of enterprise applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving architecture decisions.",
     // achievements: [
      //  "Improved app performance by 40%",
      //  "Led team of 5 developers",
     //   "Implemented CI/CD pipeline",
     // ],
    },
    // {
    //   type: "work",
    //   title: "Full Stack Developer",
    //   company: "Digital Solutions Ltd.",
    //   period: "2020 - 2022",
    //   description: "Developed and maintained multiple client projects, focusing on responsive design and scalable backend systems.",
    //   achievements: [
    //     "Delivered 15+ successful projects",
    //     "Reduced load time by 50%",
    //     "Implemented authentication system",
    //   ],
    // },
    // {
    //   type: "education",
    //   title: "Bachelor of Computer Science",
    //   company: "University of Technology",
    //   period: "2016 - 2020",
    //   description: "Graduated with honors. Focused on software engineering, web development, and database management.",
    //   achievements: [
    //     "GPA: 3.8/4.0",
    //     "President of Coding Club",
    //     "Best Capstone Project Award",
    //   ],
    // },
    // {
    //   type: "work",
    //   title: "Frontend Developer Intern",
    //   company: "StartUp Ventures",
    //   period: "2019 - 2020",
    //   description: "Assisted in building responsive web applications and learned modern development practices.",
    //   achievements: [
    //     "Built 5+ landing pages",
    //     "Learned React and TypeScript",
    //     "Collaborated with design team",
    //   ],
    // },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-[hsl(var(--gradient-end))]" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full glass-effect flex items-center justify-center border-2 border-primary animate-glow">
                    {exp.type === "work" ? (
                      <Briefcase className="h-6 w-6 text-primary" />
                    ) : (
                      <GraduationCap className="h-6 w-6 text-accent" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-24 md:ml-0 glass-effect p-6 rounded-2xl hover:scale-105 transition-transform ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 mb-3">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold font-heading mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    {/* <p className="text-muted-foreground mb-4">{exp.description}</p> */}
                    {/* <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-accent mt-1">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
