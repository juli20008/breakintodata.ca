
import React, { useState } from 'react';

// Fix: Correctly implemented Newsletter component to avoid stray text causing "Cannot find name 'www'"
const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <section className="bg-blue-600 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to break into data?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join 5,000+ others receiving our weekly deep-dives and career advice.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="px-6 py-4 rounded-xl text-gray-900 w-full sm:w-96 focus:outline-none focus:ring-4 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-600 font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition-all transform active:scale-95 shadow-lg"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-6 text-sm opacity-70">
          Follow our mission at <span className="font-semibold underline cursor-pointer">www.breakintodata.ca</span>
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
