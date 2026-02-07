import React from 'react';
import { features } from '../data/features';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">Capabilities</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Built for modern support teams</h2>
        <p className="mt-4 text-slate-200">
          Every feature is crafted to deliver faster resolutions and more delightful customer journeys.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-xl shadow-slate-900/40 transition hover:-translate-y-2 hover:border-indigo-400/60"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/80 text-lg font-semibold text-white">
                {feature.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-slate-200">{feature.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-200">
                Learn more
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
