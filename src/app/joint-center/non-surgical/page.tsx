"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NonSurgicalTreatment() {
  return (
    <>
      <Header />
      
      {/* 서브 페이지 상단 타이틀 배너 */}
      <section className="hero-section" style={{ minHeight: "45vh", backgroundPosition: "bottom" }}>
        <div className="hero-container" style={{ gridTemplateColumns: "1fr", textAlign: "center", padding: "40px 20px" }}>
          <div className="hero-content">
            <span className="hero-badge">굳쎈 척추관절센터</span>
            <h1 className="hero-title" style={{ fontSize: "2.6rem" }}>
              근본적 통증 해결 <span className="text-highlight">비수술 통증치료</span>
            </h1>
            <p className="hero-subtitle">
              통증의 근본 원인이 되는 디스크 탈출이나 신경 압박 부위를 시술 및 비수술 맞춤 치료로 통증 회로를 안전하게 차단합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 비수술 통증치료 본문 콘텐츠 */}
      <section className="services-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="section-container" style={{ padding: "80px 20px" }}>
          <div className="section-header">
            <h2 className="section-title">굳쎈 비수술 통증치료 핵심 솔루션</h2>
            <div className="section-line"></div>
            <p className="section-desc">무조건적인 수술 권유를 탈피하여 환자의 척추와 마디 뼈의 정상 보존을 최우선으로 생각하는 안전한 치료 설계입니다.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {/* 카드 1 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-radiation"></i>
              </div>
              <h3 className="card-title">신경차단술 및 FIMS 통증 치료</h3>
              <p className="card-text">
                특수 미세 주삿바늘을 컴퓨터 영상 증폭 장치(C-arm)를 통해 통증을 유발하는 척추 신경 신경근 부위에 정밀하게 위치시킨 후, 부종과 염증을 즉시 가라앉히는 치료법입니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 만성 척추 협착증/디스크 치료</li>
                <li><i className="fa-solid fa-check"></i> 시술 시간 5~10분, 즉각적인 효과</li>
              </ul>
            </div>

            {/* 카드 2 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-arrows-to-circle"></i>
              </div>
              <h3 className="card-title">신경유착박리술 및 증식 케어</h3>
              <p className="card-text">
                디스크 탈출 부위 주변의 만성 유착과 염증 물질을 특수 미세 카테터를 진입시켜 물리적으로 분리·세척하여 신경 압박을 즉각적으로 해소해 주는 고도 시술입니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 만성 요통 및 다리 저림 해소</li>
                <li><i className="fa-solid fa-check"></i> 국소 마취로 입원 없이 신속 진행</li>
              </ul>
            </div>

            {/* 카드 3 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-laptop-medical"></i>
              </div>
              <h3 className="card-title">체계적인 사후 재활 연계</h3>
              <p className="card-text">
                비수술 치료로 염증과 1차 통증을 잡은 후, 자세와 척추 관절 기립근을 튼튼히 보강할 수 있는 도수 및 운동 재활 치료를 실시간 매칭해 주어 재발을 원천 차단합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 굳쎈 맞춤 비수술 협진 치료</li>
                <li><i className="fa-solid fa-check"></i> 평생 관절 건강 주치의 안심 보장</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
