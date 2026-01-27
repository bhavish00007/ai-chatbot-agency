import React from 'react';

const pricingPlans = [
  {
    name: 'Basic',
    price: '$19/month',
    features: ['1 Chatbot', 'Basic Support', 'Limited Features'],
  },
  {
    name: 'Standard',
    price: '$49/month',
    features: ['3 Chatbots', 'Priority Support', 'All Features'],
  },
  {
    name: 'Premium',
    price: '$99/month',
    features: ['Unlimited Chatbots', '24/7 Support', 'All Features + Custom Integrations'],
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pricing Plans</h2>
        <p className="mb-12 text-gray-600 text-sm md:text-base">Choose the plan that fits your needs.</p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`p-6 bg-white rounded-lg shadow-lg transition-transform transform ${plan.popular ? 'md:scale-105 border-2 border-blue-500' : ''} w-full md:w-1/3`}>
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-2xl md:text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 text-sm md:text-base">{feature}</li>
                ))}
              </ul>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition w-full" suppressHydrationWarning>Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;