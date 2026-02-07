import React from "react";
import { testimonials } from "../data/testimonials";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          What our clients say
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-2xl shadow-slate-900/60"
            >
              <p className="text-sm text-slate-200">
                "{testimonial.testimonial}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/30 text-indigo-100">
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-xs text-slate-300">Operations Lead</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
