"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "3D Product Design",
    description:
      "We create innovative and detailed 3D product models for manufacturing, marketing, and presentations. Our designs are realistic, precise, and production-ready.",
    image: "./service1.jpg",
  },
  {
    title: "3D Laser Scanning",
    description:
      "High-accuracy 3D laser scanning services to capture real-world objects and environments with extreme precision for reverse engineering and digital modeling.",
    image: "./service2.jpg",
  },
  {
    title: "3D Product Animation",
    description:
      "Professional 3D animations to showcase product features, assembly processes, and marketing presentations with cinematic visual effects.",
    image: "./service3.jpg",
  },
  {
    title: "3D Rapid Prototyping",
    description:
      "Transform your ideas into physical prototypes quickly using advanced 3D printing and rapid prototyping technologies.",
    image: "./service4.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Our 3D Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We provide cutting-edge 3D solutions for design, scanning,
          animation, and rapid prototyping to help businesses innovate.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}