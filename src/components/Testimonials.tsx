import React from "react";
import { testimonials } from "../data/testimonials";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-xs mx-4 mb-8 p-6 bg-white rounded-lg shadow-lg"
            >
              <p className="text-gray-600 mb-4">
                "{testimonial.testimonial}"
              </p>
              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
