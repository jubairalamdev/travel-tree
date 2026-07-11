import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            See Travel Tree in Action
          </h2>
          <p className="text-xl text-gray-200">
            Experience our tours firsthand through our video gallery
          </p>
        </div>

        <div className="relative group">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto">
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-75" />
            <div className="absolute inset-0 bg-primary rounded-full border-4 border-white/30 group-hover:scale-110 transition-transform duration-300" />

            <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play
                size={48}
                className="text-white ml-2"
                fill="currentColor"
              />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Play size={20} className="text-white" fill="currentColor" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-300">Watch</p>
              <p className="font-semibold">Video Tour</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Play size={20} className="text-white" fill="currentColor" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-300">Watch</p>
              <p className="font-semibold">Behind the Scenes</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Play size={20} className="text-white" fill="currentColor" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-300">Watch</p>
              <p className="font-semibold">Customer Stories</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
