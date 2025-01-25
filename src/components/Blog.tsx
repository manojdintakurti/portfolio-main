import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const articles = [
  {
    title: "Building Scalable Microservices with Spring Boot",
    excerpt: "Learn how to design and implement scalable microservices architecture using Spring Boot and best practices.",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=800&h=500",
    category: "Backend Development"
  },
  {
    title: "Advanced React Patterns for Enterprise Applications",
    excerpt: "Explore advanced React patterns and techniques used in building large-scale enterprise applications.",
    date: "Mar 10, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?fit=crop&w=800&h=500",
    category: "Frontend Development"
  },
  {
    title: "Implementing CI/CD Pipelines with AWS and Jenkins",
    excerpt: "A comprehensive guide to setting up continuous integration and deployment pipelines using AWS and Jenkins.",
    date: "Mar 5, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?fit=crop&w=800&h=500",
    category: "DevOps"
  }
];

export default function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <button className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}