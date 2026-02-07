"use client";

import React, { useState } from "react";

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "₹199 / month",
    amount: 199,
    qr: "/qr.png.jpeg",
    features: ["1 Chatbot", "Basic Support", "Limited Features"],
  },
  {
    name: "Standard Plan",
    price: "₹399 / month",
    amount: 399,
    qr: "/qr2.png.jpeg",
    features: ["3 Chatbots", "Priority Support", "All Features"],
  },
];

const whatsappNumber = "9535234179";

const getWhatsappLink = (plan: string, amount: number) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi, I have paid ₹${amount} for the ${plan}. Please find the payment screenshot attached.`
  )}`;

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<null | {
    name: string;
    amount: number;
    qr: string;
  }>(null);

  return (
    <>
      <section
        id="pricing"
        className="relative z-50 pointer-events-auto py-20 bg-slate-950"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Flexible plans for growing teams
          </h2>
          <p className="mb-12 mt-4 text-slate-200">
            Choose the plan that fits your needs.
          </p>

          <div className="flex flex-col justify-center gap-8 md:flex-row">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative w-full rounded-3xl border p-8 text-left shadow-2xl shadow-slate-900/60 md:w-1/3 ${
                  index === 1
                    ? 'border-indigo-300/60 bg-white/10'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                {index === 1 && (
                  <span className="absolute -top-4 left-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-indigo-600/40">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>

                <p className="mt-2 text-3xl font-semibold text-white">
                  {plan.price}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-slate-200">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <span className="h-2 w-2 rounded-full bg-indigo-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedPlan({
                      name: plan.name,
                      amount: plan.amount,
                      qr: plan.qr,
                    })
                  }
                  className="mt-8 w-full rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPlan && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg text-center w-80 relative">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-2 right-2 text-gray-500"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-1">
              {selectedPlan.name}
            </h3>

            <p className="text-lg font-bold mb-4">
              Pay ₹{selectedPlan.amount}
            </p>

            <img
              src={selectedPlan.qr}
              alt="UPI QR"
              className="mx-auto mb-4 w-60"
            />

            <p className="text-sm text-gray-600 mb-4">
              Scan using Google Pay / PhonePe
              <br />
              Enter amount ₹{selectedPlan.amount}
            </p>

            <p className="text-sm text-gray-700 mb-2">
              After payment, send screenshot on WhatsApp
            </p>

            <a
              href={getWhatsappLink(
                selectedPlan.name,
                selectedPlan.amount
              )}
              target="_blank"
              className="inline-block w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
            >
              Send on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Pricing;
