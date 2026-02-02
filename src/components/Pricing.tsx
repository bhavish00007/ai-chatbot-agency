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
        className="relative z-50 pointer-events-auto py-12 md:py-20 bg-gray-100"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pricing Plans
          </h2>
          <p className="mb-12 text-gray-600">
            Choose the plan that fits your needs.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {plan.name}
                </h3>

                <p className="text-2xl font-bold mb-4">
                  {plan.price}
                </p>

                <ul className="mb-6 space-y-1">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-gray-700 text-sm"
                    >
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
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer"
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
