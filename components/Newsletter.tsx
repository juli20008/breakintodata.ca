import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Newsletter Subscription");
    const body = encodeURIComponent(`Hi, I would like to subscribe to the newsletter.\n\nMy email is: ${email}`);
    window.location.href = `mailto:breakintodata.ca@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-brand-900 py-20 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Join Our Community
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          加入我们的社区
        </p>
        
        <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
          Get free career tips, interview insights, and mentorship program updates.
          <br/>
          <span className="text-sm opacity-80">获取免费的职业建议、面试见解和陪跑计划更新。</span>
        </p>

        <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-500 backdrop-blur-sm"
            required
          />
          <button type="submit" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-black transition-colors border border-slate-700">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;