"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ChronicDiseaseManagement() {
  return (
    <>
      <Header />
      
      {/* 서브 페이지 상단 타이틀 배너 */}
      <section className="hero-section" style={{ minHeight: "45vh", backgroundPosition: "bottom" }}>
        <div className="hero-container" style={{ gridTemplateColumns: "1fr", textAlign: "center", padding: "40px 20px" }}>
          <div className="hero-content">
            <span className="hero-badge">굳쎈 내과검진센터</span>
            <h1 className="hero-title" style={{ fontSize: "2.6rem" }}>
              평생 주치의 약속 <span className="text-highlight">만성질환 관리</span>
            </h1>
            <p className="hero-subtitle">
              고혈압·당뇨·이상지질혈증 등 만성적인 대사 질환을 꼼꼼한 약물 조절과 식습관 피드백을 통해 동맥경화 등 합병증을 안전하게 예방합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 만성질환 관리 본문 콘텐츠 */}
      <section className="services-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="section-container" style={{ padding: "80px 20px" }}>
          <div className="section-header">
            <h2 className="section-title">굳쎈 만성질환 주치의 케어 솔루션</h2>
            <div className="section-line"></div>
            <p className="section-desc">만성질환은 단순히 약을 처방받는 것뿐 아니라, 합병증 유무를 정기적으로 관찰하고 대처하는 것이 핵심입니다.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {/* 카드 1 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <h3 className="card-title">고혈압 / 이상지질혈증 맞춤 조절</h3>
              <p className="card-text">
                혈관 탄력을 떨어뜨리고 동맥경화를 초래하는 고혈압과 고지혈증에 대해, 혈관 나이 정밀 분석 및 정기 피검사 수치를 근거로 개별 신체 리듬에 최적화된 처방을 진행합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 심혈관 질환 리스크 정밀 스크리닝</li>
                <li><i className="fa-solid fa-check"></i> 동맥경화 검사 연계 및 합병증 예방</li>
              </ul>
            </div>

            {/* 카드 2 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-droplet"></i>
              </div>
              <h3 className="card-title">당뇨병 당화혈색소 정밀 모니터링</h3>
              <p className="card-text">
                단순히 공복 혈당 수치만 보는 것이 아닌, 지난 3개월간의 평균 혈당 지표인 '당화혈색소' 수치를 즉석 분석하여 췌장 피로도를 줄이고 인슐린 저항성을 개선하는 정밀 처방을 제공합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 당일 혈액검사 결과 확인 시스템</li>
                <li><i className="fa-solid fa-check"></i> 당뇨 합병증 정밀 방어 프로그램</li>
              </ul>
            </div>

            {/* 카드 3 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-utensils"></i>
              </div>
              <h3 className="card-title">생활 습관 및 식단 맞춤 피드백</h3>
              <p className="card-text">
                약 복용에만 기댄 치료가 아닌, 나트륨 조절, 칼로리 배분, 운동 강도 제안 등 환자 개개인의 생활 패턴 안에서 현실적으로 실천 가능한 건강 가이드라인을 매번 정성스레 지도해 드립니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 평생 동반 주치의식 1:1 진료 상담</li>
                <li><i className="fa-solid fa-check"></i> 환자의 일상을 이해하는 따뜻하고 세심한 진료</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
