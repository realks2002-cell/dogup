export default function Services() {
  const services = [
    {
      icon: 'ri-building-2-line',
      title: '제조/생산 인력',
      description: '공장, 제조업 현장에 최적화된 전문 인력을 파견 및 도급합니다. 생산라인 운영, 품질관리, 설비관리 등 제조 전 공정에 걸쳐 숙련된 인력을 공급합니다.',
      image: '/service1-manufacturing.jpeg',
      imagePosition: 'object-top'
    },
    {
      icon: 'ri-hammer-line',
      title: '건설/현장 인력',
      description: '건설현장, 시공, 토목 등 다양한 건설 분야에 경험 풍부한 인력을 파견 및 도급합니다. 안전교육을 이수한 전문 인력으로 현장 생산성을 높여드립니다.',
      image: '/service2-construction.jpeg',
      imagePosition: 'object-center'
    },
    {
      icon: 'ri-truck-line',
      title: '물류/유통 인력',
      description: '물류센터, 배송, 유통 분야에 특화된 인력을 파견 및 도급합니다. 입출고 관리, 피킹, 포장, 배송 등 물류 전 과정을 체계적으로 지원합니다.',
      image: '/service3-warehouse-new.jpeg',
      imagePosition: 'object-center'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C8A35F]/10 text-[#C8A35F] px-4 py-2 rounded-full mb-4">
            <i className="ri-briefcase-line"></i>
            <span className="text-sm font-semibold uppercase tracking-wide">서비스 소개</span>
          </div>
          <h2 className="text-5xl font-bold text-[#0F1B3D] mb-6">
            종합 인력 솔루션
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            제조, 건설, 물류 등 다양한 산업 분야에 최적화된 맞춤형 인력도급 서비스를 제공합니다
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              {/* Image */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover ${service.imagePosition} group-hover:scale-105 transition-transform duration-300`}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="w-14 h-14 bg-[#C8A35F] rounded-full flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-[#0F1B3D] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#contact" className="text-[#C8A35F] font-semibold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                  자세히 보기
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
