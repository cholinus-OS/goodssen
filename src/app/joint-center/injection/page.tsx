"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InjectionTreatment() {
  return (
    <>
      <Header />
      
      {/* 서브 페이지 상단 타이틀 배너 */}
      <section className="hero-section" style={{ minHeight: "45vh", backgroundPosition: "bottom" }}>
        <div className="hero-container" style={{ gridTemplateColumns: "1fr", textAlign: "center", padding: "40px 20px" }}>
          <div className="hero-content">
            <span className="hero-badge">굳쎈 척추관절센터</span>
            <h1 className="hero-title" style={{ fontSize: "2.6rem" }}>
              근본적 재생을 유도하는 <span className="text-highlight">주사치료</span>
            </h1>
            <p className="hero-subtitle">
              초음파 및 디지털 정밀 X-ray(C-arm) 유도하에 통증 원인 부위에 약물을 오차 없이 정확히 투여하여 세포 재생을 돕습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 주사치료 본문 콘텐츠 */}
      <section className="services-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="section-container" style={{ padding: "80px 20px" }}>
          <div className="section-header">
            <h2 className="section-title">굳쎈 주사치료의 종류 및 강점</h2>
            <div className="section-line"></div>
            <p className="section-desc">일시적인 진통 효과가 아닌, 손상된 척추와 관절 조직을 튼튼하게 채우고 자가 재생을 돕는 근본 주사치료 프로그램입니다.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {/* 카드 1 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-crosshairs"></i>
              </div>
              <h3 className="card-title">C-Arm 및 초음파 유도하 정밀 주사</h3>
              <p className="card-text">
                첨단 영상 장비를 통해 뼈와 인대, 신경의 상태를 실시간으로 직접 모니터링하며, 통증을 유발하는 아주 미세한 부위까지 오차 없이 정밀하게 치료합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 부작용과 위험성 최소화</li>
                <li><i className="fa-solid fa-check"></i> 소량의 약물로 극대화된 치료 효과</li>
              </ul>
            </div>

            {/* 카드 2 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="card-title">프롤로 인대강화 및 DNA 주사</h3>
              <p className="card-text">
                느슨해지고 약해진 관절막과 인대에 삼투압이 높은 재생 자극 물질을 주사하여 스스로 재생할 수 있는 섬유아세포를 활성화하여 뼈와 마디를 굳건히 고정합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 손상된 힘줄/연골의 자가 재생 유도</li>
                <li><i className="fa-solid fa-check"></i> 안전성이 입증된 연골 주입 성분</li>
              </ul>
            </div>

            {/* 카드 3 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-kit-medical"></i>
              </div>
              <h3 className="card-title">고령자도 안전한 비수술 케어</h3>
              <p className="card-text">
                시술 시간이 10분 내외로 매우 짧고 마취나 입원이 필요 없어, 고혈압이나 당뇨 환자 혹은 연세가 많으신 어르신 분들도 신체 부담 없이 편안하게 주사 치료를 받으실 수 있습니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 당일 즉시 일상 복귀 가능</li>
                <li><i className="fa-solid fa-check"></i> 반복 시술에도 높은 안전성 보증</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
