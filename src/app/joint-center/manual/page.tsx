"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ManualTreatment() {
  return (
    <>
      <Header />
      
      {/* 서브 페이지 상단 타이틀 배너 */}
      <section className="hero-section" style={{ minHeight: "45vh", backgroundPosition: "bottom" }}>
        <div className="hero-container" style={{ gridTemplateColumns: "1fr", textAlign: "center", padding: "40px 20px" }}>
          <div className="hero-content">
            <span className="hero-badge">굳쎈 척추관절센터</span>
            <h1 className="hero-title" style={{ fontSize: "2.6rem" }}>
              1:1 전담 밀착 케어 <span className="text-highlight">도수치료</span>
            </h1>
            <p className="hero-subtitle">
              기계가 아닌, 숙련된 전문 도수 치료사의 섬세한 손길을 통해 틀어진 뼈와 관절의 정렬을 바로잡고 통증을 해소합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 도수치료 본문 콘텐츠 */}
      <section className="services-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="section-container" style={{ padding: "80px 20px" }}>
          <div className="section-header">
            <h2 className="section-title">굳쎈 맞춤 도수치료의 핵심 솔루션</h2>
            <div className="section-line"></div>
            <p className="section-desc">무작정 마사지를 해주는 것이 아닌, 정밀 진단 후 개개인의 체형과 통증 정도에 따라 최적화된 운동과 도수를 병행합니다.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {/* 카드 1 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-hands-holding"></i>
              </div>
              <h3 className="card-title">숙련된 전문 치료사의 1:1 케어</h3>
              <p className="card-text">
                인체 해부학적 지식이 풍부한 물리치료사가 전담하여 굳어버린 관절 마디와 뭉친 근막을 직접 이완시키고 척추 디스크에 가해지는 압력을 분산합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 개별 맞춤 운동 요법 교육</li>
                <li><i className="fa-solid fa-check"></i> 척추 근육 활성화 및 재발률 방지</li>
              </ul>
            </div>

            {/* 카드 2 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-users-viewfinder"></i>
              </div>
              <h3 className="card-title">직장인·수험생 체형 정밀 분석</h3>
              <p className="card-text">
                거북목, 일자목, 구부정한 어깨(라운드 숄더) 및 골반 비대칭 등 불량한 자세로 만성 두통과 통증을 앓는 현대인을 위해 골격 정렬 분석 후 단계별 맞춤 치료를 설계합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 만성 골격 피로 및 저림 현상 치료</li>
                <li><i className="fa-solid fa-check"></i> 체계적인 체형 밸런스 교정</li>
              </ul>
            </div>

            {/* 카드 3 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-shield-cat"></i>
              </div>
              <h3 className="card-title">주사/충격파 병행 시너지 효과</h3>
              <p className="card-text">
                염증 주사 치료 및 체외충격파 치료 후 도수를 병행하면 굳어있는 주변 근육의 긴장이 풀어지며 통증 완화와 인대 복구 속도가 2배 이상 가속화됩니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 통증 해소부터 근력 복구까지</li>
                <li><i className="fa-solid fa-check"></i> 비수술 원스톱 재활 케어 시스템</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
