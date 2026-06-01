"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CancerScreening() {
  return (
    <>
      <Header />
      
      {/* 서브 페이지 상단 타이틀 배너 */}
      <section className="hero-section" style={{ minHeight: "45vh", backgroundPosition: "bottom" }}>
        <div className="hero-container" style={{ gridTemplateColumns: "1fr", textAlign: "center", padding: "40px 20px" }}>
          <div className="hero-content">
            <span className="hero-badge">굳쎈 내과검진센터</span>
            <h1 className="hero-title" style={{ fontSize: "2.6rem" }}>
              내 몸의 든든한 방어막 <span className="text-highlight">5대 암검진</span>
            </h1>
            <p className="hero-subtitle">
              국민건강보험공단 지정 검진 의료기관으로서, 위암·대장암·간암·유방암·자궁경부암을 빠르고 정확하게 진단합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 5대 암검진 본문 콘텐츠 */}
      <section className="services-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="section-container" style={{ padding: "80px 20px" }}>
          <div className="section-header">
            <h2 className="section-title">굳쎈 5대 암 정밀 검진 항목</h2>
            <div className="section-line"></div>
            <p className="section-desc">암은 초기 증상이 거의 없는 경우가 많아, 정기적이고 정확한 조기 검진만이 최선의 예방책입니다.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {/* 카드 1 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-apple-whole"></i>
              </div>
              <h3 className="card-title">소화기계 암 검진 (위암/대장암/간암)</h3>
              <p className="card-text">
                내과 전문의가 시행하는 위/대장 수면 내시경 정밀 검사 및 고해상도 상복부 초음파 검사를 통해 소화기관 내부의 이상 조직과 간경변, 간 종양 여부를 신속 판단합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 간암 검진 대상자 전용 간초음파 및 혈액 검사</li>
                <li><i className="fa-solid fa-check"></i> 소화기계 암 원스톱 진단 및 용종 예방</li>
              </ul>
            </div>

            {/* 카드 2 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-person-breastfeeding"></i>
              </div>
              <h3 className="card-title">여성 2대 암 검진 (유방암/자궁경부암)</h3>
              <p className="card-text">
                여성 환자분들이 편안하게 검사받을 수 있는 환경을 약속합니다. 최신 유방 촬영 장비와 세포 검사를 바탕으로 여성 건강을 위협하는 유방암과 자궁암 유무를 세밀하게 진단합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 숙련된 전담 진단 장비 사용</li>
                <li><i className="fa-solid fa-check"></i> 1회용 브러시를 통한 안전 자궁경부 세포 검사</li>
              </ul>
            </div>

            {/* 카드 3 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-clipboard-check"></i>
              </div>
              <h3 className="card-title">검진 당일 결과 상담 연계</h3>
              <p className="card-text">
                검사 후 단순한 결과지 서면 통보에 그치지 않고, 중요 소견이 발견되는 즉시 내과 전문의가 상세하고 친절하게 설명하여 조기 치료와 관리 방향을 잡아 드립니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 눈높이에 맞춘 따뜻한 결과 면담</li>
                <li><i className="fa-solid fa-check"></i> 필요 시 대학병원 신속 진료 의뢰서 당일 발급</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
