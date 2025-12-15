import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-orange-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              New: Mentorship Program 2024
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6">
              Land Your Data Analyst <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Dream Job.</span> <br />
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-slate-700 font-medium">
                Your Personal Career Mentor in the AI Era.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-2 font-medium">
              从数据分析新手到成功入职。你AI时代的专属求职导师。
            </p>
            
            <p className="text-base md:text-lg text-slate-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Don't just learn data. Get hired. Our mentorship program guide you from skills to job offer, with personalized support every step. <br />
              <span className="text-slate-400 text-sm">别只是学数据。拿下offer。我们的陪跑计划从技能到入职，全程个性化指导。</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button 
                onClick={onBookCall}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Start Your Mentorship Journey <ArrowRight className="w-5 h-5" />
              </button>
              <span className="text-sm font-medium text-slate-500">
                开启你的陪跑之旅
              </span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Mentors from FAANG
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                High Interview Success Rate
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Resume Optimization
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Mentor and Mentee collaborating on data project" 
                className="w-full h-auto object-cover"
              />
              {/* Floating Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Offer Received!</p>
                  <p className="text-xs text-slate-500">Data Analyst @ Tech Corp</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;