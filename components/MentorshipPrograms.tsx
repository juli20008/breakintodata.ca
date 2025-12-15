import React from 'react';
import { Check, BarChart, Database, Code } from 'lucide-react';

interface MentorshipProgramsProps {
  onBookCall: () => void;
}

const MentorshipPrograms: React.FC<MentorshipProgramsProps> = ({ onBookCall }) => {
  return (
    <section id="programs" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Choose Your <span className="text-orange-500">Path to Success</span>
          </h2>
          <p className="text-xl text-slate-500">
            选择适合你的成长路径
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          
          {/* Card 1: AI + Data Analytics Course (Skill Focus) */}
          <div className="group rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="h-56 overflow-hidden relative bg-slate-900">
               <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90 z-10"></div>
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Data Analytics Course" className="w-full h-full object-cover opacity-40 mix-blend-overlay absolute top-0 left-0" />
               <div className="absolute inset-0 z-20 flex flex-col justify-center px-8">
                 <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full w-fit mb-3 border border-blue-500/30">
                   Skill Builder
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-2">
                   AI + Data Analytics Bootcamp
                 </h3>
                 <p className="text-slate-300 text-sm font-medium uppercase tracking-wide">
                   AI + 数据分析全栈特训营
                 </p>
               </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <p className="text-slate-600 mb-6 leading-relaxed">
                A comprehensive 6-module curriculum designed to take you from beginner to portfolio-ready professional. Master the tools companies use.
                <br/>
                <span className="text-slate-500 text-sm">从零基础到项目实战的6大模块全方位课程。掌握企业核心数据技能。</span>
              </p>

              {/* Curriculum Modules */}
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="bg-green-100 p-2 rounded text-green-700 mt-1"><BarChart size={18} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Module 1-2: Excel Core & AI Automation</h4>
                    <p className="text-xs text-slate-500">Excel 初级 + 中级 (Power Query + AI 副驾)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="bg-blue-100 p-2 rounded text-blue-700 mt-1"><Database size={18} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Module 3-4: SQL for Business Analysis</h4>
                    <p className="text-xs text-slate-500">SQL 入门 + 中级 (Window Functions + AI 优化)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="bg-yellow-100 p-2 rounded text-yellow-700 mt-1"><BarChart size={18} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Module 5: Power BI Visualization</h4>
                    <p className="text-xs text-slate-500">建模 + 可视化 + AI 叙事</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="bg-purple-100 p-2 rounded text-purple-700 mt-1"><Code size={18} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Module 6: Integrated Capstone Project</h4>
                    <p className="text-xs text-slate-500">综合项目 (全栈 Excel + SQL + PBI + AI)</p>
                  </div>
                </div>

                 {/* Light Job Support */}
                 <div className="mt-4 pt-4 border-t border-dashed border-slate-200">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Plus: Basic Career Support (Bonus)
                    </div>
                    <p className="text-xs text-slate-500 pl-4 mt-1">Includes Resume Formatting & Portfolio Review</p>
                 </div>
              </div>

              <button 
                onClick={onBookCall}
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-slate-900/20"
              >
                View Curriculum (查看课程大纲)
              </button>
            </div>
          </div>

          {/* Card 2: Career Mentorship (Job Search Focus) */}
          <div className="group rounded-3xl overflow-hidden border-2 border-orange-500/20 shadow-xl bg-white flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-2xl relative">
             <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-30">
                Recommended
             </div>
             <div className="h-56 overflow-hidden relative bg-orange-900">
               <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-90 z-10"></div>
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Career Mentorship" className="w-full h-full object-cover opacity-40 mix-blend-overlay absolute top-0 left-0" />
               <div className="absolute inset-0 z-20 flex flex-col justify-center px-8">
                 <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full w-fit mb-3 border border-white/30">
                   Career Accelerator
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-2">
                   Elite Job-Seeking Mentorship
                 </h3>
                 <p className="text-white/90 text-sm font-medium uppercase tracking-wide">
                   求职陪跑精英计划
                 </p>
               </div>
            </div>

            <div className="p-8 flex-grow flex flex-col">
              <p className="text-slate-600 mb-6 leading-relaxed">
                Purely focused on getting you hired. From personal branding to salary negotiation, we guide you through every step of the job hunt.
                <br/>
                <span className="text-slate-500 text-sm">专注于帮你拿下Offer。从个人品牌到薪资谈判，全方位求职护航。</span>
              </p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  { title: "Personal Branding Strategy", cn: "个人品牌策略 (LinkedIn/Github)", icon: "text-orange-500" },
                  { title: "Resume & Cover Letter Optimization", cn: "简历与求职信深度优化", icon: "text-orange-500" },
                  { title: "Mock Interviews (Behavioral & Tech)", cn: "模拟面试 (行为 + 技术 + AI辅助)", icon: "text-orange-500" },
                  { title: "Networking & Referral Strategy", cn: "人脉建立与内推策略", icon: "text-orange-500" },
                  { title: "Salary Negotiation & Offer Review", cn: "薪资谈判与Offer审核", icon: "text-orange-500" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-3 hover:bg-orange-50 rounded-lg transition-colors group/li">
                    <div className="mt-1 bg-orange-100 p-1.5 rounded-full text-orange-600 group-hover/li:bg-orange-500 group-hover/li:text-white transition-colors">
                        <Check size={16} strokeWidth={3} />
                    </div>
                    <div>
                        <span className="block text-slate-900 font-bold text-sm">{item.title}</span>
                        <span className="block text-slate-500 text-xs mt-0.5">{item.cn}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <button 
                onClick={onBookCall}
                className="w-full py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-lg hover:shadow-orange-500/20"
              >
                Apply for Mentorship (申请陪跑)
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MentorshipPrograms;