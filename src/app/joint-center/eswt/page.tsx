"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EswtTreatment() {
  return (
    <>
      <Header />
      
      {/* 서브 페이지 상단 타이틀 배너 */}
      <section className="hero-section" style={{ minHeight: "45vh", backgroundPosition: "bottom" }}>
        <div className="hero-container" style={{ gridTemplateColumns: "1fr", textAlign: "center", padding: "40px 20px" }}>
          <div className="hero-content">
            <span className="hero-badge">굳쎈 척추관절센터</span>
            <h1 className="hero-title" style={{ fontSize: "2.6rem" }}>
              세포 활성화를 돕는 <span className="text-highlight">체외충격파</span>
            </h1>
            <p className="hero-subtitle">
              고성능 물리 에너지를 환부에 쏘아 혈관의 재형성을 돕고, 인대와 주변 힘줄 세포를 활성화하는 대표적인 비수술 재생 치료법입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 체외충격파 본문 콘텐츠 */}
      <section className="services-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="section-container" style={{ padding: "80px 20px" }}>
          <div className="section-header">
            <h2 className="section-title">굳쎈 체외충격파의 3가지 핵심 강점</h2>
            <div className="section-line"></div>
            <p className="section-desc">발바닥 족저근막염, 팔꿈치 엘보 통증, 어깨 오십견 등 만성적인 힘줄 및 인대 염증 질환에 매우 탁월한 효과를 보입니다.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {/* 카드 1 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-wave-square"></i>
              </div>
              <h3 className="card-title">집중형(Piezo) 및 방사형(Radial) 복합 치료</h3>
              <p className="card-text">
                염증 뿌리가 있는 좁고 깊은 관절 심부에는 에너지를 집중하는 '집중형 장비'를, 주변 근육과 넓은 통증 영역에는 '방사형 장비'를 알맞게 혼용하여 완치율을 끌어올립니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 환부 맞춤형 복합 치료 프로토콜</li>
                <li><i className="fa-solid fa-check"></i> 통증 심부의 정밀 집중 타격</li>
              </ul>
            </div>

            {/* 카드 2 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-vial-virus"></i>
              </div>
              <h3 className="card-title">신속한 혈류 공급 및 자가 세포 재생</h3>
              <p className="card-text">
                강한 에너지가 닿으면서 통증 전달 물질의 농도를 낮추고 신생 혈관을 만들어 공급해 주어, 오랫동안 낫지 않던 만성 염증 조직이 스스로 치유 및 재생을 시작하도록 자극합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 인위적인 약물 없는 자연 치유</li>
                <li><i className="fa-solid fa-check"></i> 만성 석회성 건염 및 통증 치료</li>
              </ul>
            </div>

            {/* 카드 3 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-heart-circle-check"></i>
              </div>
              <h3 className="card-title">안심할 수 있는 비침습적 치료</h3>
              <p className="card-text">
                절개나 주사 바늘 삽입조차 없는 비침습 안전 치료로 감염 부작용 위험이 없습니다. 시술 중 가해지는 치료 강도를 물리치료사가 환자의 반응에 따라 세밀히 대화 조절합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 무입원, 짧은 시술 시간 (15분)</li>
                <li><i className="fa-solid fa-check"></i> 반복 시술에도 신체적 무리가 전혀 없음</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
