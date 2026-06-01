"use client"; // React의 useState 및 클릭 이벤트를 사용하기 위해 클라이언트 컴포넌트로 지정합니다.

import { useState } from "react";

export default function Home() {
  /* --------------------------------------------------------
     [상태 관리 정의 - React useState]
     각 상태 변수는 화면에 즉시 변경된 UI를 그려주는 스위치 역할을 합니다.
     -------------------------------------------------------- */
  // 1. 모바일용 햄버거 메뉴 열림/닫힘 상태 (true: 열림, false: 닫힘)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. 의료진 소개 탭 선택 상태 ('ortho': 정형외과 2인, 'internal': 내과 1인)
  const [activeTab, setActiveTab] = useState("ortho");

  // 3. 간편 상담 예약 신청 팝업창(모달) 열림/닫힘 상태 (true: 열림, false: 닫힘)
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* --------------------------------------------------------
     [이벤트 핸들러 함수]
     클릭했을 때 실행할 작업들을 함수로 정의합니다.
     -------------------------------------------------------- */
  // 모바일 메뉴 열고 닫기 토글 함수
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 모바일 메뉴 내 링크 클릭 시 메뉴창 자동 닫기 함수
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // 모달 팝업 열기 함수 (기본 링크 이동 차단 포함)
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  // 모달 팝업 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 모달 어두운 배경 클릭 시 자동으로 닫히게 하는 함수
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // 간편 예약 폼 전송 완료 시 실행되는 함수
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("정상적으로 예약/상담 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.");
    closeModal(); // 완료 후 팝업 닫기
  };

  return (
    <>
      {/* --------------------------------------------------------
         [1. 글로벌 헤더 영역]
         -------------------------------------------------------- */}
      <header className="main-header" id="mainHeader">
        <div className="header-container">
          {/* 로고 영역 */}
          <a href="#" className="logo">
            <span className="logo-bold">굳쎈</span>정형외과내과
          </a>
          
          {/* 데스크톱용 메뉴 목록 (화면이 크면 보입니다) */}
          <nav className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#about" className="nav-link">병원소개</a>
                <ul className="submenu">
                  <li><a href="#about">인사말</a></li>
                  <li><a href="#doctors">의료진 소개</a></li>
                  <li><a href="#location">오시는 길</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">굳쎈 척추관절센터</a>
                <ul className="submenu">
                  <li><a href="#services">수술치료</a></li>
                  <li><a href="#services">주사치료</a></li>
                  <li><a href="#services">도수치료</a></li>
                  <li><a href="#services">체외충격파</a></li>
                  <li><a href="#services">비수술 통증치료</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">굳쎈 내과검진센터</a>
                <ul className="submenu">
                  <li><a href="#services">위·대장내시경</a></li>
                  <li><a href="#services">5대 암검진</a></li>
                  <li><a href="#services">만성질환 관리</a></li>
                  <li><a href="#services">예방접종</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#location" className="nav-link">병원소식</a>
                <ul className="submenu">
                  <li><a href="#location">공지사항</a></li>
                  <li><a href="#location">건강정보</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          
          {/* 우측 상담 바로가기 버튼이 제거되었습니다 */}
          
          {/* 모바일 화면용 메뉴 열기 (햄버거 버튼) */}
          <button 
            className={`mobile-toggle-btn ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="메뉴 토글"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* --------------------------------------------------------
         [2. 모바일용 슬라이딩 메뉴창]
         -------------------------------------------------------- */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            <li>
              <span className="mobile-menu-title">병원소개</span>
              <ul className="mobile-submenu">
                <li><a href="#about" className="mobile-link" onClick={handleMobileLinkClick}>인사말</a></li>
                <li><a href="#doctors" className="mobile-link" onClick={handleMobileLinkClick}>의료진 소개</a></li>
                <li><a href="#location" className="mobile-link" onClick={handleMobileLinkClick}>오시는 길</a></li>
              </ul>
            </li>
            <li>
              <span className="mobile-menu-title">굳쎈 척추관절센터</span>
              <ul className="mobile-submenu">
                <li><a href="#services" className="mobile-link" onClick={handleMobileLinkClick}>수술·주사치료</a></li>
                <li><a href="#services" className="mobile-link" onClick={handleMobileLinkClick}>도수·체외충격파</a></li>
                <li><a href="#services" className="mobile-link" onClick={handleMobileLinkClick}>비수술 통증치료</a></li>
              </ul>
            </li>
            <li>
              <span className="mobile-menu-title">굳쎈 내과검진센터</span>
              <ul className="mobile-submenu">
                <li><a href="#services" className="mobile-link" onClick={handleMobileLinkClick}>위대장내시경</a></li>
                <li><a href="#services" className="mobile-link" onClick={handleMobileLinkClick}>5대 암검진</a></li>
                <li><a href="#services" className="mobile-link" onClick={handleMobileLinkClick}>만성질환·예방접종</a></li>
              </ul>
            </li>
            <li>
              <span className="mobile-menu-title">병원소식</span>
              <ul className="mobile-submenu">
                <li><a href="#location" className="mobile-link" onClick={handleMobileLinkClick}>공지사항</a></li>
                <li><a href="#location" className="mobile-link" onClick={handleMobileLinkClick}>건강정보</a></li>
              </ul>
            </li>
          </ul>
          <div className="mobile-cta-box">
            <a href="#reservation" className="btn-cta-mobile" onClick={(e) => { setIsMobileMenuOpen(false); openModal(e); }}>
              진료예약 및 전화상담 받기
            </a>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------
         [3. 메인 히어로 배너 섹션]
         -------------------------------------------------------- */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">정형외과·내과 전문의 3인 다학제 협진</span>
            <h1 className="hero-title">
              유쾌한 진료, 상쾌한 회복, 명쾌한 설명.<br />
              <span className="text-highlight">굳쎈정형외과내과의원</span>이<br />
              건강한 일상을 지킵니다.
            </h1>
            <p className="hero-subtitle">
              풍부한 경험을 가진 각 분야 전문의들의 따뜻한 협진 체제로, 빠르고 정확하게 통증부터 내과 만성 질환까지 빈틈없이 진료합니다.
            </p>
            <div className="hero-actions">
              <a href="#doctors" className="btn-primary">의료진 소개 보기</a>
              <a href="#location" className="btn-secondary">진료시간 및 위치 안내</a>
            </div>
          </div>
          
          {/* 히어로 영역 오른쪽 퀵 카드 */}
          <div className="hero-visual-card">
            <div className="quick-status">
              <div className="status-item">
                <span className="status-label"><i className="fa-solid fa-user-doctor"></i> 진료 과목</span>
                <span className="status-val">정형외과 / 내과</span>
              </div>
              <div className="status-item">
                <span className="status-label"><i className="fa-solid fa-clock"></i> 오늘 진료시간</span>
                <span className="status-val">09:00 ~ 18:00</span>
                <span className="status-sub-val">점심시간 13:00 ~ 14:00</span>
              </div>
              <div className="status-item">
                <span className="status-label"><i className="fa-solid fa-phone"></i> 대표 번호</span>
                <span className="status-val text-accent">02-2038-4987</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
         [4. 특화 진료 4열 그리드 섹션]
         -------------------------------------------------------- */}
      <section className="services-section" id="services">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">굳쎈 대표 특화 진료</h2>
            <div className="section-line"></div>
            <p className="section-desc">굳쎈정형외과내과가 자신 있게 제안하는 맞춤형 핵심 의료 서비스입니다.</p>
          </div>
          
          <div className="services-grid">
            {/* 카드 1 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-bone"></i>
              </div>
              <h3 className="card-title">수험생/직장인 맞춤 도수치료</h3>
              <p className="card-text">
                거북목, 일자목, 골반 불균형 등 컴퓨터와 스마트폰 사용이 많은 수험생과 직장인을 위한 1:1 맞춤형 척추 관절 교정 프로그램입니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 숙련된 전담 물리치료사 치료</li>
                <li><i className="fa-solid fa-check"></i> 체계적인 체형 불균형 정밀 분석</li>
              </ul>
            </div>

            {/* 카드 2 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-person-running"></i>
              </div>
              <h3 className="card-title">비수술 관절·척추 및 체외충격파</h3>
              <p className="card-text">
                칼을 대지 않는 안전하고 정확한 비수술적 재생 통증 치료입니다. 최첨단 체외충격파 기기를 이용하여 손상된 힘줄과 인대 조직을 재생합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 고해상도 초음파 유도하 정밀 주사</li>
                <li><i className="fa-solid fa-check"></i> 빠르고 안전한 재생 치료</li>
              </ul>
            </div>

            {/* 카드 3 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-hospital-user"></i>
              </div>
              <h3 className="card-title">당일 용종절제 위·대장내시경</h3>
              <p className="card-text">
                내과 전문의가 직접 시행하는 안전한 수면 내시경입니다. 검사 도중 발견된 용종을 그 자리에서 즉시 절제하여 질병을 예방합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 철저한 1회용 소독 원칙 준수</li>
                <li><i className="fa-solid fa-check"></i> 검사와 용종 절제를 당일에 논스톱 해결</li>
              </ul>
            </div>

            {/* 카드 4 */}
            <div className="service-card">
              <div className="card-icon-wrapper">
                <i className="fa-solid fa-stethoscope"></i>
              </div>
              <h3 className="card-title">맞춤형 국가건강검진 및 만성질환</h3>
              <p className="card-text">
                고혈압, 당뇨, 이상지질혈증 등 대표적인 만성질환을 정밀 관리하며, 생애주기별 맞춤형 국민건강보험공단 건강검진을 시행합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 5대 암 검진 및 조기 예방</li>
                <li><i className="fa-solid fa-check"></i> 평생 주치의 케어 시스템</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
         [5. 신뢰의 3대 약속 섹션]
         -------------------------------------------------------- */}
      <section className="trust-section" id="about">
        <div className="section-container">
          <div className="section-header white-text">
            <h2 className="section-title">굳쎈의 3가지 진심 어린 약속</h2>
            <div className="section-line"></div>
            <p className="section-desc">환자분들이 든든하게 안심하고 몸을 맡길 수 있도록 아래 3가지를 약속드립니다.</p>
          </div>
          
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-number">01</div>
              <h3 className="trust-title">정확한 다학제 협진 진단</h3>
              <p className="trust-text">
                통증 원인은 뼈와 관절뿐 아니라 내과적 질환에서도 올 수 있습니다. 정형외과와 내과 전문의가 매일 머리를 맞대고 진단하여 놓치는 부분 없이 근본적인 해결책을 찾습니다.
              </p>
            </div>
            
            <div className="trust-item">
              <div className="trust-number">02</div>
              <h3 className="trust-title">대학병원급 최신 첨단 장비</h3>
              <p className="trust-text">
                정밀하고 오차 없는 진단을 위해 대학병원급 최첨단 MRI, 고해상도 초음파 진단기, 디지털 X-ray, 최상급 올림푸스 내시경 시스템 장비를 아낌없이 도입하여 운용 중입니다.
              </p>
            </div>

            <div className="trust-item">
              <div className="trust-number">03</div>
              <h3 className="trust-title">환자 눈높이에 맞춘 따뜻한 설명</h3>
              <p className="trust-text">
                어려운 의학 용어 대신, 환자와 가족분들이 정확히 이해하실 수 있도록 그림과 모형을 활용하여 친절하고 따뜻하게 설명해 드립니다. 과잉 진료 없이 정직하게 치료합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
         [6. 의료진 소개 섹션 - 리액트 탭 UI 구현]
         -------------------------------------------------------- */}
      <section className="doctors-section" id="doctors">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">굳쎈 명품 의료진</h2>
            <div className="section-line"></div>
            <p className="section-desc">대학병원 임상교수 출신 등 실력과 따뜻한 인품을 겸비한 3인의 전문의가 직접 진료합니다.</p>
          </div>
          
          {/* 탭 버튼 */}
          <div className="tab-control-wrapper">
            <button 
              className={`tab-btn ${activeTab === "ortho" ? "active" : ""}`}
              onClick={() => setActiveTab("ortho")}
            >
              <i className="fa-solid fa-bone"></i> 정형외과 전문의 (2인)
            </button>
            <button 
              className={`tab-btn ${activeTab === "internal" ? "active" : ""}`}
              onClick={() => setActiveTab("internal")}
            >
              <i className="fa-solid fa-lungs"></i> 내과 전문의 (1인)
            </button>
          </div>
          
          {/* 탭 내용 - 상태(activeTab)에 따라 보여지는 부분이 결정됩니다 */}
          <div className="tab-content-wrapper">
            {/* 정형외과 탭 활성화 시 */}
            {activeTab === "ortho" && (
              <div className="tab-content active">
                <div className="doctors-row">
                  {/* 정형외과 1 */}
                  <div className="doctor-profile-card">
                    <div className="doctor-photo-placeholder">
                      <i className="fa-solid fa-user-doctor"></i>
                      <span>정형외과 전문의</span>
                    </div>
                    <div className="doctor-info">
                      <span className="doc-position">대표원장 / 정형외과 전문의</span>
                      <h3 className="doc-name">김굳쎈 대표원장</h3>
                      <p className="doc-philosophy">"환자의 통증 없는 편안한 일상으로의 복귀가 저의 가장 큰 기쁨입니다."</p>
                      <div className="doc-history">
                        <h4>약력 및 학력</h4>
                        <ul>
                          <li>서울대학교 의과대학 및 동 대학원 졸업</li>
                          <li>서울대학교병원 정형외과 전공의 수료</li>
                          <li>서울대학교병원 정형외과 임상강사/진료교수</li>
                          <li>대한정형외과학회 정회원</li>
                          <li>대한스포츠의학회 분과전문의</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* 정형외과 2 */}
                  <div className="doctor-profile-card">
                    <div className="doctor-photo-placeholder accent-bg">
                      <i className="fa-solid fa-user-doctor"></i>
                      <span>정형외과 전문의</span>
                    </div>
                    <div className="doctor-info">
                      <span className="doc-position">원장 / 정형외과 전문의</span>
                      <h3 className="doc-name">이관절 원장</h3>
                      <p className="doc-philosophy">"아픈 부위의 정밀한 주사 및 도수 비수술 재생 치료를 연구하고 약속합니다."</p>
                      <div className="doc-history">
                        <h4>약력 및 학력</h4>
                        <ul>
                          <li>연세대학교 의과대학 졸업</li>
                          <li>세브란스병원 정형외과 전공의 수료</li>
                          <li>대한견주관절(어깨·팔꿈치)학회 평생회원</li>
                          <li>대한척추외과학회 정회원</li>
                          <li>전) 서울베스트병원 관절센터 원장</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 내과 탭 활성화 시 */}
            {activeTab === "internal" && (
              <div className="tab-content active">
                <div className="doctors-row single-doctor">
                  <div className="doctor-profile-card">
                    <div className="doctor-photo-placeholder internal-bg">
                      <i className="fa-solid fa-user-doctor"></i>
                      <span>내과 전문의</span>
                    </div>
                    <div className="doctor-info">
                      <span className="doc-position">원장 / 소화기내과 전문의</span>
                      <h3 className="doc-name">박내과 원장</h3>
                      <p className="doc-philosophy">"정밀한 위·대장 내시경 검사를 통해 숨겨진 질환을 찾아 조기에 치료하겠습니다."</p>
                      <div className="doc-history">
                        <h4>약력 및 학력</h4>
                        <ul>
                          <li>가톨릭대학교 의과대학 졸업</li>
                          <li>서울성모병원 내과 전공의 수료</li>
                          <li>대한소화기내시경학회 세부전문의</li>
                          <li>대한임상초음파학회 인정의</li>
                          <li>대한당뇨병학회 및 고혈압학회 회원</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
         [7. 오시는 길 및 진료시간 안내 섹션]
         -------------------------------------------------------- */}
      <section className="location-section" id="location">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">오시는 길 & 진료시간</h2>
            <div className="section-line"></div>
            <p className="section-desc">환자분들이 헛걸음하지 않도록 진료 시간과 상세 주차 안내를 확인해 주세요.</p>
          </div>
          
          <div className="location-content-grid">
            <div className="map-and-info">
              {/* 구글 맵 실시간 로드 */}
              <div className="map-placeholder" style={{ border: "none", marginBottom: "15px" }}>
                <iframe 
                  src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%20%EB%85%B8%EC%9B%90%EA%B5%AC%20%EB%8F%99%EC%9D%BC%EB%A1%9C%201673&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  style={{ border: 0, borderRadius: "var(--border-radius-lg)" }} 
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* 텍스트 주소 및 카카오맵 외부 링크 */}
              <div style={{ marginBottom: "25px", padding: "20px", backgroundColor: "var(--color-bg-warm)", borderRadius: "var(--border-radius-lg)", border: "1px solid rgba(10, 77, 104, 0.05)" }}>
                <p style={{ fontWeight: 700, color: "var(--color-primary)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <i className="fa-solid fa-location-dot"></i> 도로명 주소
                </p>
                <p style={{ fontSize: "1rem", color: "var(--color-text-dark)", marginBottom: "12px", fontWeight: 500 }}>
                  서울 노원구 동일로 1673 (신한은행 건물 4층)
                </p>
                <a 
                  href="https://map.kakao.com/?q=%EC%84%9C%EC%9A%B8%20%EB%85%B8%EC%9B%90%EA%B5%AC%20%EB%8F%99%EC%9D%BC%EB%A1%9C%201673" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-map-link" 
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 18px", fontSize: "0.85rem" }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> 카카오맵 길찾기
                </a>
              </div>
              
              <div className="traffic-guide">
                <div className="guide-box">
                  <div className="guide-header">
                    <span className="guide-icon subway-icon" style={{ backgroundColor: "#3b82f6" }}><i className="fa-solid fa-subway"></i></span>
                    <h4>지하철로 오시는 길</h4>
                  </div>
                  <p className="guide-text" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    <strong>7호선 수락산역 5번 출구</strong>에서 20m 거리이며, 출구로 나오셔서 바로 앞 1층에 신한은행이 있는 건물 4층에 위치하고 있습니다.
                  </p>
                </div>
                
                <div className="guide-box">
                  <div className="guide-header">
                    <span className="guide-icon car-icon" style={{ backgroundColor: "#10b981" }}><i className="fa-solid fa-car"></i></span>
                    <h4>자가용 및 주차 안내</h4>
                  </div>
                  <p className="guide-text">
                    건물 지하 주차장 (B1 ~ B3) <strong>최대 3시간 무료 주차 지원</strong>. 내원 시 원내 안내 데스크에 차량 번호를 말씀해 주시기 바랍니다.
                  </p>
                </div>
              </div>
            </div>
            
            {/* 진료시간 요약 카드 */}
            <div className="clinic-time-card">
              <h3 className="time-card-title"><i className="fa-regular fa-clock"></i> 진료 시간 안내</h3>
              <div className="time-list">
                <div className="time-row">
                  <span className="day">평 일 (월 ~ 금)</span>
                  <span className="hours">오전 09:00 - 오후 18:00</span>
                </div>
                <div className="time-row">
                  <span className="day">점심 시간</span>
                  <span className="hours">오후 13:00 - 오후 14:00</span>
                </div>
                <div className="time-row">
                  <span className="day">토 요 일</span>
                  <span className="hours">오전 09:00 - 오후 13:00</span>
                </div>
                <div className="time-row closed">
                  <span className="day">일요일 · 공휴일</span>
                  <span className="hours">휴진</span>
                </div>
              </div>
              <div className="time-callout">
                <p><i className="fa-solid fa-triangle-exclamation"></i> <strong>알려드립니다:</strong></p>
                <p>정형외과 및 내과 접수 마감은 진료 종료 30분 전까지입니다. 내시경 검사는 사전에 전화 예약이 필요합니다.</p>
              </div>
              <div className="time-btn-wrapper">
                <a href="tel:02-2038-4987" className="btn-tel">
                  <i className="fa-solid fa-phone"></i> 대표전화 연결: 02-2038-4987
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
         [8. 푸터 영역]
         -------------------------------------------------------- */}
      <footer className="main-footer">
        <div className="footer-top">
          <div className="footer-container">
            <div className="footer-info-brand">
              <h3>굳쎈정형외과내과의원</h3>
              <p>정형외과 전문의 2인 & 내과 전문의 1인 협진 시스템으로 환자의 관절과 만성 질환을 빈틈없이 관리합니다.</p>
            </div>
            
            <div className="footer-links">
              <h4>바로가기 메뉴</h4>
              <ul>
                <li><a href="#about">병원 소개</a></li>
                <li><a href="#doctors">의료진 약력</a></li>
                <li><a href="#services">특화 진료 안내</a></li>
                <li><a href="#location">오시는 길 / 주차</a></li>
              </ul>
            </div>
            
            <div className="footer-contacts">
              <h4>연락 및 예약</h4>
              <p><strong>대표전화:</strong> 02-2038-4987</p>
              <p><strong>팩스번호:</strong> 02-2038-4988</p>
              <p><strong>이메일:</strong> contact@goodssen.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-container">
            <p className="copyright">© 2026 굳쎈정형외과내과의원. All Rights Reserved. Designed for premium care.</p>
            <div className="footer-address">
              상호명: 굳쎈정형외과내과의원 | 대표자: 김굳쎈 | 주소: 서울 노원구 동일로 1673 (신한은행 건물 4층) | 사업자등록번호: 123-45-67890
            </div>
          </div>
        </div>
      </footer>

      {/* --------------------------------------------------------
         [9. 간편 예약 및 상담 신청 모달창 (리액트 조건부 렌더링)]
         -------------------------------------------------------- */}
      <div 
        className={`modal-overlay ${isModalOpen ? "active" : ""}`}
        onClick={handleOverlayClick}
      >
        <div className="modal-box">
          <button className="modal-close-btn" onClick={closeModal} aria-label="닫기">×</button>
          <h3 className="modal-title">간편 진료예약 및 상담 신청</h3>
          <p className="modal-subtitle">정보를 남겨주시면, 병원 상담원이 1시간 내로 확인 전화를 드립니다.</p>
          
          <form className="reservation-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="resName">성함 (환자명)</label>
              <input type="text" id="resName" required placeholder="예: 홍길동" />
            </div>
            
            <div className="form-group">
              <label htmlFor="resPhone">휴대폰 번호</label>
              <input type="tel" id="resPhone" required placeholder="예: 010-1234-5678" />
            </div>
            
            <div className="form-group">
              <label htmlFor="resDept">희망 진료과목</label>
              <select id="resDept" required>
                <option value="">-- 진료과목 선택 --</option>
                <option value="ortho">정형외과 (척추관절/통증/도수치료)</option>
                <option value="internal">내과 (내시경/만성질환/건강검진)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="resMemo">상담 요청 및 문의사항</label>
              <textarea id="resMemo" rows={3} placeholder="예: 무릎 통증 및 대장내시경 예약 문의드립니다."></textarea>
            </div>
            
            <div className="form-check-group">
              <input type="checkbox" id="resPrivacy" required />
              <label htmlFor="resPrivacy">개인정보 수집 및 이용에 동의합니다. (필수)</label>
            </div>
            
            <button type="submit" className="btn-submit-res">상담 및 예약 신청하기</button>
          </form>
        </div>
      </div>
    </>
  );
}
