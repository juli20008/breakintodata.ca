import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "David N.",
    role: "Data Analyst",
    time: "1 day ago",
    text: "My mentor's advice on my resume was game-changing. I went from zero interviews to 3 in a week.",
    chinese: "导师对我简历的建议是颠覆性的。我从零面试到一周拿了3个面试。"
  },
  {
    name: "Sophia P.",
    role: "Business Intelligence",
    time: "3 days ago",
    text: "The mock interviews helped me secure my offer at a Fintech startup. The AI tool for practice was super helpful.",
    chinese: "模拟面试帮助我拿下一家金融科技初创公司的offer。AI练习工具非常有帮助。"
  },
  {
    name: "Sarah M.",
    role: "Marketing Analyst",
    time: "5 days ago",
    text: "Coming from HR, I was scared of the technical side. The personalized roadmap made it manageable.",
    chinese: "我是做HR的，完全是技术小白。个性化的路线图让转型变得可控。"
  },
  {
    name: "Leo Q.",
    role: "Data Scientist",
    time: "1 week ago",
    text: "Worth every penny compared to generic courses. The negotiation support increased my starting salary by 15%.",
    chinese: "比起通用课程，这完全物超所值。薪资谈判支持让我的起薪提高了15%。"
  },
  {
    name: "Fiona W.",
    role: "Junior Analyst",
    time: "2 weeks ago",
    text: "The portfolio guidance was specific to my target industry. It really impressed the hiring manager.",
    chinese: "作品集指导针对了我的目标行业。这真的让招聘经理印象深刻。"
  },
  {
    name: "Kevin Z.",
    role: "Operations Analyst",
    time: "2 weeks ago",
    text: "I felt lost self-studying. The mentorship gave me structure and confidence.",
    chinese: "自学让我感到迷茫。陪跑给了我结构和信心。"
  },
  {
    name: "Jason L.",
    role: "Product Analyst",
    time: "3 weeks ago",
    text: "I didn't know how to translate my marketing background into data. The mentorship bridged that gap perfectly.",
    chinese: "我不知道如何将我的营销背景转化为数据能力。陪跑完美地填补了这个空白。"
  },
  {
    name: "Amanda C.",
    role: "Data Associate",
    time: "1 month ago",
    text: "Fresh out of college, I had no direction. My mentor helped me land a job at a top consulting firm.",
    chinese: "刚大学毕业，我没有方向。我的导师帮我拿到了一家顶级咨询公司的offer。"
  },
  {
    name: "Ryan K.",
    role: "Business Analyst",
    time: "1 month ago",
    text: "The salary negotiation tips alone paid for the program. I got a 20% higher offer than expected.",
    chinese: "光是薪资谈判的技巧就值回了票价。我拿到的offer比预期高了20%。"
  }
];

interface TestimonialsProps {
  onBookCall: () => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onBookCall }) => {
  return (
    <section id="testimonials" className="py-24 bg-brand-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            B
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Break Into Data</h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-2xl font-bold text-orange-500">4.9</span>
            <div className="flex text-orange-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-1">Based on 30+ Google reviews</p>
          <h3 className="text-2xl font-bold text-slate-800 mt-8">Success Stories from Our Mentees (学员成功案例)</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{t.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">{t.time}</span>
                  </div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 ml-auto opacity-50" />
              </div>
              <p className="text-slate-600 text-sm mb-3">"{t.text}"</p>
              <p className="text-slate-400 text-xs italic">{t.chinese}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <button 
             onClick={onBookCall}
             className="text-slate-600 font-semibold hover:text-orange-600 flex items-center gap-2 mx-auto transition-colors"
           >
             Start your success story today <span aria-hidden="true">→</span>
           </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;