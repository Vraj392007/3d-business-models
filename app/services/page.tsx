import React from "react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
        Our 3D Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* 3D Modeling */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            3D Modeling
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Product Design</li>
            <li>✔ Architectural Models</li>
            <li>✔ Mechanical Parts</li>
            <li>✔ Prototypes</li>
            <li>✔ Custom 3D Designs</li>
          </ul>
        </div>

        {/* 3D Printing */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            3D Printing
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ FDM Printing</li>
            <li>✔ Resin Printing</li>
            <li>✔ PLA / ABS / PETG</li>
            <li>✔ Fast Delivery</li>
            <li>✔ High Precision Output</li>
          </ul>
        </div>

        {/* Printed Items */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Custom Printed Items
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Mini House Models</li>
            <li>✔ Car Models</li>
            <li>✔ Gift Items</li>
            <li>✔ Machine Parts</li>
            <li>✔ Toys & Decorative Items</li>
          </ul>
        </div>

      </div>
    </div>
  );
}