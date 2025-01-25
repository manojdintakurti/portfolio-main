import { FileText, Mail } from 'lucide-react';

export default function Hero() {
  return (
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="block">Hi, I'm Sai Manoj</span>
                <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Cloud Enthusiast | Software Engineer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  <FileText className="mr-2" size={20} />
                  View Resume
                </a>
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                >
                  <Mail className="mr-2" size={20} />
                  Contact Me
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                  src="/manoj_ub_city.jpg"
                  alt="Profile"
                  className="w-80 h-80 rounded-full mx-auto object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  );
}