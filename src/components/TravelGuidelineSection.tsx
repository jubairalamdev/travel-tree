import { CheckCircle2, Sun, Mountain, Camera } from 'lucide-react';

export default function TravelGuidelineSection() {
  const guidelines = [
    {
      title: 'Pack Light',
      description: 'Travel light and carry essentials only. We recommend a medium-sized suitcase for most destinations.',
      icon: Sun
    },
    {
      title: 'Stay Connected',
      description: 'Keep your phone charged and have a portable charger handy for your adventures.',
      icon: Sun
    },
    {
      title: 'Be Adventurous',
      description: 'Try local food, explore hidden gems, and make memories that last a lifetime.',
      icon: Mountain
    },
    {
      title: 'Respect Culture',
      description: 'Learn about local customs and traditions to ensure a respectful and enjoyable experience.',
      icon: Mountain
    },
    {
      title: 'Capture Moments',
      description: 'Bring your camera or smartphone to capture the stunning views and experiences.',
      icon: Camera
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Travel Guidelines
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Essential tips to make your journey smooth and enjoyable. Follow these guidelines for the best experience.
            </p>

            <div className="space-y-4">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <guideline.icon size={20} className="text-primary" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {guideline.title}
                    </h3>
                    <p className="text-gray-600">
                      {guideline.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-purple-200 rounded-full opacity-60 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-blue-200 rounded-full opacity-60 blur-2xl" />

              <div className="relative z-20 space-y-8">
                <div className="relative">
                  <div className="absolute -top-12 -left-12 w-64 h-64 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center text-white p-6">
                      <Mountain size={48} className="mx-auto mb-3" />
                      <p className="font-bold text-lg">Adventure Awaits</p>
                      <p className="text-sm opacity-90">Explore new horizons</p>
                    </div>
                  </div>

                  <div className="absolute top-8 -left-16 w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-center text-white p-4">
                      <Camera size={32} className="mx-auto mb-2" />
                      <p className="font-semibold text-sm">Capture</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute top-8 -right-16 w-48 h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-center text-white p-4">
                      <Sun size={32} className="mx-auto mb-2" />
                      <p className="font-semibold text-sm">Sunshine</p>
                    </div>
                  </div>

                  <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center text-white p-6">
                      <Mountain size={48} className="mx-auto mb-3" />
                      <p className="font-bold text-lg">Relax & Unwind</p>
                      <p className="text-sm opacity-90">Enjoy your journey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
