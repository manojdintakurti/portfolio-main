
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Tessema Mengistu",
    role: "Professor at Virginia Tech",
    content: "I have had the privilege of working with Sai Manoj Dintakurti as a Graduate Teaching Assistant for the Web Application Development course at Virginia Tech. Sai Manoj consistently demonstrated exceptional skills in application development, with expertise in Java, React, Spring Boot, and cloud technologies like AWS.  \n" +
        "\n" +
        "He has been instrumental in guiding students through complex concepts, assisting with projects, and fostering a strong understanding of web development. His ability to design scalable, efficient solutions and stay updated with the latest technologies sets him apart. I highly recommend Sai Manoj for roles in software development, as his technical expertise and dedication make him an invaluable asset to any organization.",
    image: "/tessema.jpeg"
  },
  {
    name: "Ketaki Kashikar",
    role: "Senior Developer at Infosys",
    content: "I enthusiastically endorse Sai Manoj for positions in Full Stack, Web Development, and Java. Sai's remarkable proficiency in Spring Framework, Java programming, React, and web design is truly commendable. His adeptness in integrating front-end and back-end functionalities highlights his capabilities as a Full Stack Developer. Furthermore, Sai's expertise in Java and Spring Framework underscores his in-depth understanding of these domains. With his inventive approach to problem-solving and user-oriented mindset, Sai stands as an excellent fit for teams seeking a versatile and dedicated developer.\n",
    image: "/ketaki.jpeg"
  },
  {
    name: "Gurkerat Singh",
    role: "Tech Lead at Cognizant",
    content: "I wholeheartedly recommend Sai Manoj as a remarkable software engineer. His consistent dedication, proactive approach, and patient assistance set him apart. Sai Manoj's adept understanding of the codebase and his prowess with SpringBoot were invaluable assets to our project's progress. His willingness to go the extra mile to support others was a big factor for the team's success. I confidently endorse Sai Manoj for his future ventures. Any team would be lucky to have him on their side! ",
    image: "/gurkirat.png"
  }
];

export default function Testimonials() {
  return (
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            What People Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="relative group"
                >
                  <div className="absolute inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-xl  flex flex-col justify-between">
                    <div>
                      <Quote className="w-10 h-10 text-purple-600 mb-4 opacity-50" />
                      <p className="text-gray-600 mb-6 italic text-ellipsis">
                        "{testimonial.content}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}