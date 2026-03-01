export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-3">
            <div className="w-full rounded-2xl overflow-hidden">
              <img
                src="/business-meeting-v2.jpeg"
                alt="도급HR 전문 팀"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F1B3D] mb-6 leading-tight">
              신뢰할 수 있는<br />인력도급 파트너
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>
                도급HR은 10년 이상의 경력을 보유한 종합 인력도급 전문기업입니다. 제조, 건설, 물류 등 다양한 산업 분야에서 축적된 노하우를 바탕으로, 기업이 필요로 하는 최적의 인력 솔루션을 제공합니다.
              </p>
              <p>
                체계적인 인력 선발·교육·관리 시스템을 통해 검증된 전문 인력만을 공급하며, 현장의 생산성 향상과 안전관리에 기여합니다. 고객사의 업종과 규모에 맞춘 맞춤형 도급 서비스로 인건비 절감과 운영 효율화를 동시에 실현합니다.
              </p>
              <p>
                도급HR은 단순한 인력 공급을 넘어, 고객사의 장기적인 성장 파트너로서 함께 걸어가겠습니다. 투명한 운영과 높은 고객 만족도가 도급HR의 자부심입니다.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-4xl font-extrabold text-[#0F1B3D] mb-1">1,000+</div>
                <div className="text-gray-600 text-sm">파견 인력</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-[#0F1B3D] mb-1">200+</div>
                <div className="text-gray-600 text-sm">거래 기업</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-[#0F1B3D] mb-1">10+</div>
                <div className="text-gray-600 text-sm">경력 (년)</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-[#0F1B3D] mb-1">99%</div>
                <div className="text-gray-600 text-sm">고객 만족도</div>
              </div>
            </div>

            <a href="#contact" className="inline-flex bg-[#C8A35F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B8934F] transition-colors whitespace-nowrap cursor-pointer items-center gap-2">
              <i className="ri-mail-send-line"></i>
              문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
