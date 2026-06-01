"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EndoscopyScreening() {
  return (
    <>
      <Header />
      
      {/* 서브 페이지 상단 타이틀 배너 */}
      <section className="hero-section" style={{ minHeight: "45vh", backgroundPosition: "bottom" }}>
        <div className="hero-container" style={{ gridTemplateColumns: "1fr", textAlign: "center", padding: "40px 20px" }}>
          <div className="hero-content">
            <span className="hero-badge">굳쎈 내과검진센터</span>
            <h1 className="hero-title" style={{ fontSize: "2.6rem" }}>
              안전하고 정밀한 <span className="text-highlight">위·대장 내시경</span>
            </h1>
            <p className="hero-subtitle">
              소화기내과 세부전문의 원장이 올림푸스 최상급 내시경 장비로 당일 검사부터 용종절제까지 정직하게 직접 집도합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 내시경 본문 콘텐츠 */}
      <section className="services-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="section-container" style={{ padding: "80px 20px" }}>
          <div className="section-header">
            <h2 className="section-title">굳쎈 내시경 클리닉의 3대 안심 기준</h2>
            <div className="section-line"></div>
            <p className="section-desc">조기 위암과 대장암은 정기적인 정밀 내시경 검사를 통해서만 확실하게 찾아내고 사전에 차단할 수 있습니다.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {/* 카드 1 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              <h3 className="card-title">소화기내시경 세부전문의 직접 시술</h3>
              <p className="card-text">
                대학병원 임상교수 출신의 풍부한 검사 케이스를 보유한 내과 원장이 검사 도중 미세 병변이나 평평한 형태의 대장 용종도 놓치지 않고 꼼꼼히 관찰합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 검증된 소화기내과 세부 전문의 직접 시술</li>
                <li><i className="fa-solid fa-check"></i> 대장 내시경 도중 발견 시 당일 용종절제술 연계</li>
              </ul>
            </div>

            {/* 카드 2 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-hand-holding-medical"></i>
              </div>
              <h3 className="card-title">철저한 1회용 소독 지침 준수</h3>
              <p className="card-text">
                대한소화기내시경학회의 엄격한 소독 가이드라인을 백 퍼센트 준수합니다. 마우스피스와 주삿바늘 등 모든 소모품은 철저하게 일회용으로만 사용 후 전량 폐기합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 초음파 세척 및 멸균 오토클레이브 운용</li>
                <li><i className="fa-solid fa-check"></i> 1인 1내시경대 완전 소독 원칙 고수</li>
              </ul>
            </div>

            {/* card 3 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-gauge-high"></i>
              </div>
              <h3 className="card-title">CO2 가스 주입으로 복통 예방</h3>
              <p className="card-text">
                대장 내시경 검사 시 일반 공기 대신 체내에 수십 배 빠르게 흡수 및 배출되는 이산화탄소(CO2) 가스를 주입하여, 검사 후 겪을 수 있는 쥐어짜는 듯한 복부 팽만감과 복통을 획기적으로 예방합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 편안하고 통증 없는 무통 대장내시경</li>
                <li><i className="fa-solid fa-check"></i> 가스 배출을 위한 장시간 대기 시간 해소</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
