"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VaccinationClinic() {
  return (
    <>
      <Header />
      
      {/* 서브 페이지 상단 타이틀 배너 */}
      <section className="hero-section" style={{ minHeight: "45vh", backgroundPosition: "bottom" }}>
        <div className="hero-container" style={{ gridTemplateColumns: "1fr", textAlign: "center", padding: "40px 20px" }}>
          <div className="hero-content">
            <span className="hero-badge">굳쎈 내과검진센터</span>
            <h1 className="hero-title" style={{ fontSize: "2.6rem" }}>
              내 몸을 보호하는 백신 <span className="text-highlight">예방접종</span>
            </h1>
            <p className="hero-subtitle">
              대상포진·폐렴구균·A·B형간염·독감 백신 등 연령 및 면역력 상태에 최적화된 안전한 백신 접종을 시행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 예방접종 본문 콘텐츠 */}
      <section className="services-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="section-container" style={{ padding: "80px 20px" }}>
          <div className="section-header">
            <h2 className="section-title">굳쎈 성인 안심 백신 프로그램</h2>
            <div className="section-line"></div>
            <p className="section-desc">성인 예방접종은 면역력을 보강하여 대상포진과 중증 감염병으로부터 안전하게 생명을 보호하는 지름길입니다.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {/* 카드 1 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-virus-slash"></i>
              </div>
              <h3 className="card-title">대상포진 백신<br />(최신 싱그릭스 백신 도입)</h3>
              <p className="card-text">
                극심한 신경통을 유발하는 대상포진 예방을 위해 예방률이 97% 이상으로 매우 우수한 유전자 재조합 백신 '싱그릭스(Shingrix)'를 전면 도입하여 운용 중입니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 만 50세 이상 및 고위험군 강력 권장 백신</li>
                <li><i className="fa-solid fa-check"></i> 2회 접종(2개월 간격)을 통한 반영구적 방어선 형성</li>
              </ul>
            </div>

            {/* 카드 2 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-shield-virus"></i>
              </div>
              <h3 className="card-title">폐렴구균 & 계절성 독감 접종</h3>
              <p className="card-text">
                만성 기저질환자와 고령 어르신들에게 치명적인 폐렴구균 뇌수막염 예방 백신 및 매년 가을 시행하는 4가 독감 접종을 통해 호흡기 감염 합병증을 원천 예방합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 면역 강화 폐렴 단백접합 백신 보유</li>
                <li><i className="fa-solid fa-check"></i> 환절기 원스톱 독감 동시 예방 프로그램</li>
              </ul>
            </div>

            {/* 카드 3 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-syringe"></i>
              </div>
              <h3 className="card-title">정품 백신 정밀 콜드체인 보증</h3>
              <p className="card-text">
                백신의 유효 성분을 고스란히 보존하기 위해 병원 백신 전용 냉장고를 도입하고 자동 온도 감지 모니터링 센서(Cold Chain)를 통해 24시간 철저히 안전하게 보관 및 관리합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 제약사 정품 인증 및 유통기한 완전 철저 관리</li>
                <li><i className="fa-solid fa-check"></i> 접종 후 부작용 방지를 위한 15분 대기 안심 원내 모니터링</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
