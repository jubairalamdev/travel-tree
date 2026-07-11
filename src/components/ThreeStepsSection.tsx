import {Star, StepForwardIcon } from 'lucide-react';
import {Suitcase, Car} from '@gravity-ui/icons';

export default function ThreeStepsSection() {
  const steps = [
    {
      icon: Suitcase,
      title: 'Choose Your Trip',
      description: 'Explore our carefully curated tours and select the perfect adventure that matches your interests and schedule.',
      color: 'bg-blue-100'
    },
    {
      icon: Car,
      title: 'Book Your Experience',
      description: 'Secure your spot with our easy booking process. Fill out a simple form and get instant confirmation.',
      color: 'bg-green-100'
    },
    {
      icon: Star,
      title: 'Enjoy Your Journey',
      description: 'Sit back and relax while we take care of everything. We ensure you have an unforgettable experience.',
      color: 'bg-purple-100'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your seamless travel experience in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {index !== 2 && (
                <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-full h-1 bg-gradient-to-l from-primary/20 to-transparent" />
              )}

              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 hover:bg-white hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <StepForwardIcon size={32} className="text-primary" />
                </div>

                <div className="text-sm font-semibold text-primary mb-3 tracking-wider uppercase">
                  Step 0{index + 1}
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {index < 2 && (
                  <div className="mt-6 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Next: Step {index + 2}</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
