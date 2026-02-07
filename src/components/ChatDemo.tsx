"use client";

import React from "react";

const ChatDemo: React.FC = () => {
  const DEMO1_URL = "https://chatbot-custom-three.vercel.app/";
  const DEMO2_URL = "https://optimalcare-delta.vercel.app/";

  return (
    <section id="chatdemo" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">Live previews</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Chatbot demo studio</h2>
        <p className="mt-4 text-base text-slate-200 md:text-lg">
          Experience our AI chatbot in action. Try out the demos below!
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Demo 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-2xl shadow-slate-900/60">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Demo 1</h3>
              <span className="rounded-full bg-indigo-500/30 px-3 py-1 text-xs font-semibold text-indigo-100">
                Customer Support
              </span>
            </div>
            <video
              width="100%"
              height="256"
              controls
              className="rounded-2xl border border-white/20 mb-4"
            >
              <source src="/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <a
              href={DEMO1_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full rounded-full bg-indigo-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Try Demo
            </a>
          </div>

          {/* Demo 2 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-2xl shadow-slate-900/60">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Demo 2</h3>
              <span className="rounded-full bg-indigo-500/30 px-3 py-1 text-xs font-semibold text-indigo-100">
                Healthcare Intake
              </span>
            </div>
            <video
              width="100%"
              height="256"
              controls
              className="rounded-2xl border border-white/20 mb-4"
            >
              <source src="/vid2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <a
              href={DEMO2_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full rounded-full bg-indigo-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Try Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
