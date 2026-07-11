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
            So Then what is to wait anymore
          </h2>
          <p className="text-xl text-gray-200">
            Experience our tours and build unforgettable memories. Wait to see the magic of TravelTree in action.
          </p>
        </div>

        

        
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
