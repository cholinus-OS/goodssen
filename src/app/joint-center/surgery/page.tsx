"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SurgeryTreatment() {
  return (
    <>
      <Header />
      
      {/* 서브 페이지 전용 상단 타이틀 배너 */}
      <section className="hero-section" style={{ minHeight: "45vh", backgroundPosition: "bottom" }}>
        <div className="hero-container" style={{ gridTemplateColumns: "1fr", textAlign: "center", padding: "40px 20px" }}>
          <div className="hero-content">
            <span className="hero-badge">굳쎈 척추관절센터</span>
            <h1 className="hero-title" style={{ fontSize: "2.6rem" }}>
              안전하고 정밀한 <span className="text-highlight">수술치료</span>
            </h1>
            <p className="hero-subtitle">
              풍부한 경험의 정형외과 전문의가 대학병원급 첨단 장비로 근본적인 질환 해결을 약속합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 수술치료 본문 콘텐츠 */}
      <section className="services-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="section-container" style={{ padding: "80px 20px" }}>
          <div className="section-header">
            <h2 className="section-title">굳쎈 수술치료의 3대 핵심 강점</h2>
            <div className="section-line"></div>
            <p className="section-desc">굳쎈정형외과내과는 불필요한 과잉 수술을 지양하며, 수술이 꼭 필요한 환자에게 가장 안전한 치료법을 제공합니다.</p>
          </div>

          {/* 특징 카드 그리드 */}
          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-microscope"></i>
              </div>
              <h3 className="card-title">대학병원급 최소침습 절개 수술</h3>
              <p className="card-text">
                첨단 미세 현미경 및 내시경 장비를 활용하여 손상 부위를 최소한으로 절개하고 정상 조직을 최대한 보존하는 안전한 수술을 진행합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 흉터 및 출혈 최소화</li>
                <li><i className="fa-solid fa-check"></i> 통증 감소 및 빠른 일상 복귀</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-user-shield"></i>
              </div>
              <h3 className="card-title">철저한 무균 수술실 환경</h3>
              <p className="card-text">
                감염 제로를 목표로 헤파필터 공기정화 시스템이 장착된 청정 무균 수술실을 운영하여 환자분들이 안심하고 수술을 받으실 수 있습니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 실시간 공기 청정 필터링</li>
                <li><i className="fa-solid fa-check"></i> 철저한 멸균 및 소독 프로세스</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <h3 className="card-title">내과 협진을 통한 안전성 확보</h3>
              <p className="card-text">
                수술 전 고혈압, 당뇨 등 만성질환이나 기저질환 유무를 내과 전문의가 직접 사전 정밀 진단하여 수술 중 발생할 수 있는 합병증을 완벽 예방합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 정형외과-내과 실시간 협진</li>
                <li><i className="fa-solid fa-check"></i> 개인별 맞춤형 수술 리스크 케어</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 오시는길/안내 섹션과 자연스럽게 이어지도록 유도 */}
      <Footer />
    </>
  );
}
