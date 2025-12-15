import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="bg-[#FFF8F3] py-20 border-y border-orange-100/50">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-4">
          Our Mission — 我们的使命
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-slate-800 leading-relaxed font-medium">
          "Break into Data empowers real people to transform their careers through dedicated, personalized mentorship, navigating the path to their first Data Analyst role."
        </p>
        <div className="mt-6 w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
        <p className="mt-6 text-slate-600 text-lg">
          Break into Data 致力于通过敬业、个性化的陪跑指导，赋能普通人成功转型，为你指引通往第一份数据分析师工作的路径。
        </p>
      </div>
    </section>
  );
};

export default Mission;