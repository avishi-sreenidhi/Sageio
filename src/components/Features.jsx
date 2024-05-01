// Features.jsx
import React from 'react';
import '../styles/HeroSection.css';
import { Link } from 'react-router-dom';  

const FeaturesSection = () => {
  const firstColumnFeatures = featureData.slice(0, 3);
  const secondColumnFeatures = featureData.slice(3, 6);

  return (
    <section id="features" className="bg-green-50 p-20 mt-5">
      <div className="container">
        <h1 className="text-center text-4xl italic font-semibold mb-6 bg-green-200 rounded-lg p-1">FEATURES</h1>
        <div className="grid grid-cols-2 gap-8 mt-10 text-center">
          {/* First Column */}
          <div className="overflow-x-auto">
            <table className="table-auto mx-auto">
              <tbody>
                {firstColumnFeatures.map((feature, index) => (
                  <tr key={index} className="bg-green-100 hover:bg-green-300 border-b border-green-900">
                    <td className="px-6 py-4">
                      {feature.title === 'Flashcards' ? (
                          <img src={feature.image} alt={feature.title} className="mx-auto h-20 mb-4" />
                      ) : (
                        <img src={feature.image} alt={feature.title} className="mx-auto h-20 mb-4" />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <h3 className="text-lg font-bold mb-2 text-green-900">{feature.title}</h3>
                      <p className="text-gray-800">{feature.description}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Second Column */}
          <div className="overflow-x-auto">
            <table className="table-auto mx-auto">
              <tbody>
                {secondColumnFeatures.map((feature, index) => (
                  <tr key={index} className="bg-green-100 hover:bg-green-300 border-b border-green-900">
                    <td className="px-6 py-4">
                      <img src={feature.image} alt={feature.title} className="mx-auto h-20 mb-4" />
                    </td>
                    <td className="px-6 py-4">
                      <h3 className="text-lg font-bold mb-2 text-green-900">{feature.title}</h3>
                      <p className="text-gray-800">{feature.description}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const featureData = [
  {
    title: 'Flashcards',
    description: 'Effortlessly create and review flashcards, reinforcing concepts for better understanding.',
    image: 'src/assets/review.png'
  },
  {
    title: 'Resources Galore',
    description: 'Organize study materials, interact with PDFs, videos, and AI.',
    image: 'src/assets/resources.png'
  },
  {
    title: 'Pomodoro Timer',
    description: 'Boost productivity with focused study sessions and calming music.',
    image: 'src/assets/timer.png'
  },
  {
    title: 'Deeper Insights',
    description: 'Track progress and habits with detailed daily analytics reports.',
    image: 'src/assets/report.png'
  },
  {
    title: 'Organize Tasks',
    description: 'Manage tasks, deadlines, and dates for each subject efficiently.',
    image: 'src/assets/tasks.png'
  },
  {
    title: 'AI Research Assistant',
    description: 'Access AI-powered research support, integrated with Google Scholar.',
    image: 'src/assets/ai.png'
  }
];

export default FeaturesSection;
