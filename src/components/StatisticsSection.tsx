import { Users, MapPin, Heart, Star } from 'lucide-react';

export default function StatisticsSection() {
  const stats = [
    {
      icon: Users,
      title: 'Happy Travelers',
      value: '50,000+',
      description: 'Satisfied customers',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: MapPin,
      title: 'Destinations',
      value: '500+',
      description: 'Travel locations',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Heart,
      title: 'Total Likes',
      value: '120K',
      description: 'Customer reviews',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Star,
      title: 'Average Rating',
      value: '4.9',
      description: 'Customer satisfaction',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#7fdbc9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <stat.icon size={32} className={stat.color} />
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>

              <p className="text-lg font-semibold text-gray-700 mb-3">
                {stat.title}
              </p>

              <p className="text-sm text-gray-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
