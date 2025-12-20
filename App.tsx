
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import MentorshipPrograms from './components/MentorshipPrograms';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Features />
        <MentorshipPrograms />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
