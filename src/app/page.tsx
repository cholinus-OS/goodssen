"use client"; // React의 useState 및 클릭 이벤트를 사용하기 위해 클라이언트 컴포넌트로 지정합니다.

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  // 의료진 소개 탭 선택 상태 ('ortho': 정형외과 2인, 'internal': 내과 1인)
  const [activeTab, setActiveTab] = useState("ortho");

  return (
    <>
      {/* 공통 헤더 컴포넌트 탑재 */}
      <Header />

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
                <i className="fa-solid fa-kit-medical"></i>
              </div>
              <h3 className="card-title">정확한 수술적 치료</h3>
              <p className="card-text">
                척추·관절 질환에 대하여 첨단 관절경을 이용한 최소침습 수술 및 골절 수술, 그리고 안전한 내고정물 제거수술을 정밀하고 신속하게 시행합니다.
              </p>
              <ul className="card-features">
                <li><i className="fa-solid fa-check"></i> 관절경 최소침습 척추·관절 수술</li>
                <li><i className="fa-solid fa-check"></i> 정밀한 골절 수술 및 내고정물 제거</li>
              </ul>
            </div>

            {/* 카드 2 */}
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

            {/* 카드 3 */}
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

            {/* 카드 4 */}
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
                정밀하고 오차 없는 진단을 위해 대학병원급 고해상도 초음파 진단기, 디지털 X-ray, 컴퓨터 단층촬영 CT, 골밀도검사 장비, 최신 관절경 수술 시스템 장비, 올림푸스 내시경 시스템 장비를 아낌없이 도입하여 운용 중입니다.
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
                      <img src="/dr_kiwoong.jpg" alt="정기웅 대표원장" />
                    </div>
                    <div className="doctor-info">
                      <span className="doc-position">대표원장 / 정형외과 전문의</span>
                      <h3 className="doc-name">정기웅 대표원장</h3>
                      <p className="doc-philosophy">"환자의 통증 없는 편안한 일상으로의 복귀가 저의 가장 큰 기쁨입니다."</p>
                      <div className="doc-history">
                        <h4>약력 및 학력</h4>
                        <ul>
                          <li>경희대학교 의과대학 졸업</li>
                          <li>경희의료원 정형외과 레지던트 수료</li>
                          <li>경희대학교 의과대학 외래교수</li>
                          <li>여수애양재활병원 공중보건의사</li>
                          <li>서울성심병원 척추센터 정형외과 과장</li>
                        </ul>
                        <h4 style={{ marginTop: "15px" }}>학회</h4>
                        <ul>
                          <li>대한 정형외과학회 정회원</li>
                          <li>대한 척추외과학회 정회원</li>
                          <li>대한 골절학회 정회원</li>
                          <li>대한 슬관절학회 정회원</li>
                          <li>대한 관절경학회 정회원</li>
                          <li>대한 성장학회 정회원</li>
                          <li>대한 정형통증의학회 정회원</li>
                          <li>대한 정형통증의학회 학술이사</li>
                          <li>대한 정형외과의사회 상임이사</li>
                          <li>대한척추외과학회 척추통증연구회 위원</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* 정형외과 2 */}
                  <div className="doctor-profile-card">
                    <div className="doctor-photo-placeholder">
                      <img src="/dr_hyeongjun.jpg" alt="조형준 원장" />
                    </div>
                    <div className="doctor-info">
                      <span className="doc-position">원장 / 정형외과 전문의</span>
                      <h3 className="doc-name">조형준 원장</h3>
                      <p className="doc-philosophy">"아픈 부위의 정밀한 주사 및 도수 비수술 재생 치료를 연구하고 약속합니다."</p>
                      <div className="doc-history">
                        <h4>약력 및 학력</h4>
                        <ul>
                          <li>경희대학교 의과대학 졸업</li>
                          <li>경희의료원 정형외과 레지던트 수료</li>
                          <li>경희의료원정형외과 슬관절외과 전임의</li>
                          <li>경희의료원 정형외과학 석사</li>
                          <li>경희의료원 정형외과학 박사</li>
                          <li>경희대학교 의과대학 외래교수</li>
                          <li>전) 영등포 안세병원 정형외과 의무원장</li>
                          <li>전) 서울예스병원 정형외과 원장</li>
                          <li>전) 조형준 정형외과의원 원장</li>
                          <li>전) 청담이룸병원 대표원장</li>
                          <li>전) 서울척병원 의정부 정형외과 원장</li>
                        </ul>
                        <h4 style={{ marginTop: "15px" }}>학회</h4>
                        <ul>
                          <li>대한 정형외과 학회 정회원</li>
                          <li>대한 관절경 학회 정회원</li>
                          <li>대한 견주관절 학회 정회원</li>
                          <li>대한 슬관절 학회 정회원</li>
                          <li>대한 고관절 학회 정회원</li>
                          <li>대한 정형외과 스포츠 의학회 정회원</li>
                          <li>대한 통증 의학회 정회원</li>
                          <li>대한 의생명과학회 정회원</li>
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
                    <div className="doctor-photo-placeholder">
                      <img src="/dr_hyejin.jpg" alt="기혜진 원장" />
                    </div>
                    <div className="doctor-info">
                      <span className="doc-position">원장 / 소화기내과 전문의</span>
                      <h3 className="doc-name">기혜진 원장</h3>
                      <p className="doc-philosophy">"정밀한 위·대장 내시경 검사를 통해 숨겨진 질환을 찾아 조기에 치료하겠습니다."</p>
                      <div className="doc-history">
                        <h4>약력 및 학력</h4>
                        <ul>
                          <li>경희대학교 의과전문대학원 졸업</li>
                          <li>경희의료원 내과 전공의 수료</li>
                          <li>강동경희대병원 소화기 내과 진료교수</li>
                        </ul>
                        <h4 style={{ marginTop: "15px" }}>학회</h4>
                        <ul>
                          <li>대한 내과학회 평생회원</li>
                          <li>대한 소화기내시경학회 평생회원</li>
                          <li>대한 임상초음파학회 평생회원</li>
                          <li>대한 소화기학회 정회원</li>
                          <li>대한 고혈압학회 정회원</li>
                          <li>대한 당뇨병학회 정회원</li>
                          <li>대한 비만학회 정회원</li>
                          <li>대한 항노화학회 정회원</li>
                          <li>대한 소아알레르기호흡기학회 정회원</li>
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
         [8. 블로그 소개 섹션]
         -------------------------------------------------------- */}
      <section className="blog-section" id="blog">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">원장님 개인 블로그</h2>
            <div className="section-line"></div>
            <p className="section-desc">굳쎈 의료진이 직접 건강 정보를 전달하고 소통하는 개인 블로그입니다.</p>
          </div>
          
          <div className="blog-grid">
            {/* 블로그 1: 정기웅 대표원장 네이버 블로그 */}
            <div className="blog-card">
              <div>
                <div className="blog-card-header">
                  <span className="blog-badge naver"><i className="fa-solid fa-square-n"></i> 블로그</span>
                  <span className="blog-author">정기웅 대표원장</span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">굳쎈 척추·관절 이야기</h3>
                  <p className="blog-card-desc">
                    경희대학교 의과대학 정형외과 외래교수 정기웅 원장의 블로그입니다. 오랜 임상 경험을 토대로 디스크, 오십견, 관절염 등 척추·관절의 올바른 자가 치료 및 수술/비수술적 의학 상식을 쉽게 전해 드립니다.
                  </p>
                </div>
              </div>
              <div className="blog-card-footer">
                <a href="https://m.blog.naver.com/narssen0?tab=1" target="_blank" rel="noopener noreferrer" className="btn-blog-link">
                  블로그 방문하기 <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>

            {/* 블로그 2: 조형준 원장 네이버 블로그 */}
            <div className="blog-card">
              <div>
                <div className="blog-card-header">
                  <span className="blog-badge naver"><i className="fa-solid fa-square-n"></i> 블로그</span>
                  <span className="blog-author">조형준 원장</span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">조형준 원장의 정형외과 이야기</h3>
                  <p className="blog-card-desc">
                    어깨, 무릎, 고관절 질환에 관한 비수술 재생 통증 치료 및 도수 치료 지식을 공유합니다. 환자분들과 더 가까이 소통하고 의학 정보를 친근하게 전하는 소통 공간입니다.
                  </p>
                </div>
              </div>
              <div className="blog-card-footer">
                <a href="https://blog.naver.com/cholinus" target="_blank" rel="noopener noreferrer" className="btn-blog-link">
                  블로그 방문하기 <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>

            {/* 블로그 3: 조형준 원장 건강 전문 사이트 */}
            <div className="blog-card">
              <div>
                <div className="blog-card-header">
                  <span className="blog-badge website"><i className="fa-solid fa-globe"></i> 공식 웹사이트</span>
                  <span className="blog-author">조형준 원장</span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">Exercise is Medicine (운동이 약이다)</h3>
                  <p className="blog-card-desc">
                    단순 통증 완화를 넘어 우리 몸 고유의 기능을 회복할 수 있는 과학적 운동 방법과 생활 습관 의학 정보를 공유합니다. 올바른 움직임으로 건강을 지키는 든든한 가이드입니다.
                  </p>
                </div>
              </div>
              <div className="blog-card-footer">
                <a href="https://cholinus-exerciseismedicine.com/" target="_blank" rel="noopener noreferrer" className="btn-blog-link">
                  사이트 방문하기 <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
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

      {/* 공통 푸터 컴포넌트 탑재 */}
      <Footer />
    </>
  );
}
