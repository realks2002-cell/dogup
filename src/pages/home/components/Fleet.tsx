
export default function Fleet() {
  const fleetTypes = [
    {
      title: 'Heavy-Duty Service Trucks',
      description: 'Advanced mobile workshops featuring state-of-the-art diagnostic systems, precision tools, and comprehensive parts inventory for on-site commercial appliance solutions',
      image: 'https://readdy.ai/api/search-image?query=Heavy%20duty%20commercial%20service%20truck%20with%20equipment%20storage%2C%20professional%20branded%20vehicle%2C%20clean%20industrial%20setting%2C%20simple%20background%2C%20corporate%20fleet%20photography&width=700&height=500&seq=fleet-001&orientation=landscape'
    },
    {
      title: 'Specialized Equipment Vehicles',
      description: 'Custom-fitted vehicles for transporting and servicing large-scale commercial equipment',
      image: 'https://readdy.ai/api/search-image?query=Specialized%20equipment%20service%20van%20with%20organized%20tool%20storage%2C%20professional%20commercial%20vehicle%2C%20clean%20setting%2C%20simple%20background%2C%20business%20fleet%20photography&width=500&height=500&seq=fleet-002&orientation=squarish'
    },
    {
      title: 'Emergency Response Units',
      description: 'Rapid deployment vehicles equipped for 24/7 emergency service calls',
      image: 'https://readdy.ai/api/search-image?query=Emergency%20response%20service%20truck%20with%20lights%20and%20equipment%2C%20professional%20commercial%20vehicle%2C%20clean%20urban%20setting%2C%20simple%20background%2C%20corporate%20fleet%20photography&width=500&height=500&seq=fleet-003&orientation=squarish'
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="flex-1">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#1E3A5F] leading-tight">
              Our Professional Fleet
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-600 leading-relaxed">
              Our modern fleet of over 50 service vehicles ensures rapid response times and comprehensive service coverage across the entire region
            </p>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {fleetTypes.map((fleet, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="w-full h-80 overflow-hidden">
                <img 
                  src={fleet.image}
                  alt={fleet.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">
                  {fleet.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {fleet.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
