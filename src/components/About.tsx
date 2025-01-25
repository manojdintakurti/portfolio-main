import { useEffect, useRef } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const timelineItems = [
  {
    title: "Master's in Computer Science",
    organization: "Virginia Tech",
    period: "Aug 2023 - May 2025",
    type: "education",
    details: "CGPA: 4/4",
  },
  {
    title: "Software Developer Engineer",
    organization: "Infosys",
    period: "2021 - 2023",
    type: "work",
    details: "Full-stack development with focus on enterprise applications",
  },
  {
    title: "Software Associate",
    organization: "Cognizant",
    period: "2021",
    type: "work",
    details: "Worked on web development projects and client solutions",
  },
  {
    title: "Bachelor's in Computer Science",
    organization: "JNTU",
    period: "2017 - 2021",
    type: "education",
    details: "Computer Science and Engineering",
  },
];

export default function About() {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-active');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          About Me
        </h2>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="w-full md:w-1/3">
            <img
              src="/manoj-kerla.jpg"
              alt="Sai Manoj Dintakurti"
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Hi, I'm Sai Manoj Dintakurti
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
              Currently pursuing my Master's in Computer Science at Virginia Tech, I bring over 3 years of professional
              experience in developing enterprise-level applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My expertise spans across modern web technologies, cloud computing, and system design. I'm particularly 
              interested in building scalable applications that solve real-world problems. When I'm not coding, you'll 
              find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with 
              the developer community.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Education & Experience</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full" />
            
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  ref={el => timelineRefs.current[index] = el}
                  className="relative flex items-center opacity-0 transform translate-y-8 transition-all duration-500 ease-out timeline-item"
                >
                  {/* Timeline content */}
                  <div className={`w-5/12 ${item.type === 'education' ? 'text-right pr-8' : 'ml-auto pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all group">
                      <div className="flex items-center space-x-2 mb-2 justify-start">
                        {item.type === 'education' ? (
                          <GraduationCap className="w-5 h-5 text-purple-600" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-purple-600" />
                        )}
                        <span className="text-sm text-purple-600 font-medium">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600 font-medium mb-2">{item.organization}</p>
                      <p className="text-gray-500">{item.details}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow timeline-dot" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}