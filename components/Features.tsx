import React from 'react';
import { Handshake, Bot, Briefcase } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Our Job-Seeking Mentorship?
          </h2>
          <p className="text-xl text-slate-500">
            为什么选择我们的求职陪跑？
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600">
              <Handshake className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Personalized Career Roadmap
            </h3>
            <p className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wide">
              定制化职业路线图
            </p>
            <p className="text-slate-600 leading-relaxed">
              No cookie-cutter plans. We build a strategy based on your background and goals.
              <br/>
              <span className="text-slate-500 text-sm mt-2 block">
                拒绝千篇一律。我们根据你的背景和目标量身定制求职策略。
              </span>
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
              <Bot className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              AI-Enhanced Interview Prep
            </h3>
            <p className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wide">
              AI辅助面试准备
            </p>
            <p className="text-slate-600 leading-relaxed">
              Master technical and behavioral interviews with our mentors and AI-driven practice tools.
              <br/>
              <span className="text-slate-500 text-sm mt-2 block">
                在导师和AI工具的帮助下，精通技术面和行为面。
              </span>
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-6 text-pink-600">
              <Briefcase className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Job-Ready Portfolio Guidance
            </h3>
            <p className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wide">
              求职级作品集指导
            </p>
            <p className="text-slate-600 leading-relaxed">
              Build a portfolio that gets noticed by recruiters, not just pass a class.
              <br/>
              <span className="text-slate-500 text-sm mt-2 block">
                打造能让招聘官眼前一亮的作品集，而不仅仅是完成课程。
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;