"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JointCenterPage() {
  const [activeTab, setActiveTab] = useState(0);

  // URL의 쿼리 스트링(?tab=0~4)을 분석하여 초기 탭을 설정합니다.
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      if (tabParam !== null) {
        const tabIndex = parseInt(tabParam, 10);
        if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex <= 4) {
          setActiveTab(tabIndex);
        }
      }
    }
  }, []);

  // 탭 변경 시 브라우저 주소창의 쿼리 파라미터도 부드럽게 업데이트해 줍니다.
  const handleTabChange = (index: number) => {
    setActiveTab(index);
    if (typeof window !== "undefined") {
      const newUrl = `${window.location.pathname}?tab=${index}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    }
  };

  const tabs = [
    { id: 0, title: "수술치료", badge: "안전하고 정밀한" },
    { id: 1, title: "주사치료", badge: "근본적 재생 유도" },
    { id: 2, title: "도수치료", badge: "1:1 전담 밀착 케어" },
    { id: 3, title: "체외충격파", badge: "세포 활성화 유도" },
    { id: 4, title: "비수술 통증치료", badge: "척추·신경 근본 해결" },
  ];

  return (
    <>
      <Header />

      {/* 상단 비주얼 배너 */}
      <section 
        className="hero-section" 
        style={{ 
          minHeight: "35vh", 
          background: "linear-gradient(135deg, hsl(193, 80%, 25%) 0%, hsl(193, 80%, 15%) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "80px"
        }}
      >
        <div style={{ textAlign: "center", color: "#ffffff", padding: "0 20px" }}>
          <span 
            style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.15)", 
              padding: "6px 16px", 
              borderRadius: "30px", 
              fontSize: "0.9rem", 
              fontWeight: 500,
              letterSpacing: "1px",
              display: "inline-block",
              marginBottom: "15px"
            }}
          >
            SPINE & JOINT CENTER
          </span>
          <h1 
            style={{ 
              fontSize: "2.5rem", 
              fontWeight: 700, 
              margin: "0 0 10px 0",
              letterSpacing: "-1px"
            }}
          >
            굳쎈 척추관절센터
          </h1>
          <p style={{ opacity: 0.8, fontSize: "1.05rem", margin: 0 }}>
            척추와 관절의 통증을 잡고, 건강한 일상으로의 정밀 회복을 약속합니다.
          </p>
        </div>
      </section>

      {/* 본문 탭 인터페이스 영역 */}
      <section style={{ backgroundColor: "#f8fafc", padding: "60px 0" }}>
        <div 
          className="section-container" 
          style={{ 
            padding: "0 20px", 
            maxWidth: "1200px", 
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px"
          }}
        >
          <div className="notice-layout-grid" style={{ display: "grid", gap: "30px" }}>
            
            {/* 좌측 세로 메뉴 탭 버튼들 */}
            <div className="tab-sidebar">
              <div 
                style={{ 
                  backgroundColor: "#ffffff", 
                  borderRadius: "16px", 
                  padding: "20px", 
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  border: "1px solid #e2e8f0",
                  position: "sticky",
                  top: "100px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px"
                }}
              >
                <h3 
                  style={{ 
                    fontSize: "1.1rem", 
                    fontWeight: 700, 
                    color: "hsl(193, 80%, 25%)", 
                    marginBottom: "15px",
                    paddingBottom: "10px",
                    borderBottom: "2px solid #f1f5f9"
                  }}
                >
                  척추관절 치료 과목
                </h3>
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "15px 20px",
                        fontSize: "0.98rem",
                        fontWeight: isActive ? "700" : "500",
                        color: isActive ? "#ffffff" : "hsl(193, 80%, 25%)",
                        backgroundColor: isActive ? "hsl(193, 80%, 25%)" : "transparent",
                        borderLeft: isActive ? "5px solid hsl(38, 92%, 50%)" : "5px solid transparent",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        boxShadow: isActive ? "0 4px 12px rgba(10, 77, 104, 0.2)" : "none"
                      }}
                      className="tab-button"
                    >
                      <span>{tab.title}</span>
                      <i 
                        className={`fa-solid ${isActive ? "fa-circle-chevron-right" : "fa-chevron-right"}`}
                        style={{ opacity: isActive ? 1 : 0.3, transition: "all 0.2s" }}
                      ></i>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 우측 콘텐츠 세부 영역 */}
            <div 
              style={{ 
                backgroundColor: "#ffffff", 
                borderRadius: "16px", 
                padding: "40px", 
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                border: "1px solid #e2e8f0",
                minHeight: "500px"
              }}
              className="tab-content-card"
            >
              {/* 탭 헤더 정보 */}
              <div style={{ marginBottom: "40px", borderBottom: "1px solid #e2e8f0", paddingBottom: "25px" }}>
                <span 
                  style={{ 
                    color: "hsl(38, 92%, 50%)", 
                    fontSize: "0.95rem", 
                    fontWeight: 700, 
                    letterSpacing: "1px",
                    display: "block",
                    marginBottom: "5px"
                  }}
                >
                  {tabs[activeTab].badge}
                </span>
                <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "hsl(193, 80%, 25%)", margin: 0 }}>
                  {tabs[activeTab].title}
                </h2>
              </div>

              {/* 탭 0: 수술치료 */}
              {activeTab === 0 && (
                <div>
                  <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "1.1rem", marginBottom: "35px", lineHeight: "1.7" }}>
                    풍부한 경험의 정형외과 전문의가 대학병원급 첨단 장비로 불필요한 과잉 수술 없이 가장 안전하고 확실한 근본적 수술 치료를 진행합니다.
                  </p>
                  
                  <div className="services-grid" style={{ display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-microscope"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>대학병원급 최소침습 절개 수술</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        미세 현미경 및 관절 내시경 장비를 활용해 병변 부위만 정밀 절개하여 정상 조직의 손상을 최소화합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 흉터 및 출혈 최소화</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 통증 감소 및 빠른 복귀</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-user-shield"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>철저한 무균 수술실 환경</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        감염 방지용 헤파필터 공기정화 시스템이 장착된 무균 청정 수술실을 운영하여 환자의 안전을 최우선으로 확보합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 실시간 공기 청정 필터링</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 철저한 멸균 소독 프로세스</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-heart-pulse"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>내과 협진을 통한 안전성 확보</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        수술 전 기저질환이나 내과적 문제를 내과 전문의가 사전에 진단 및 조절하여 수술 중 발생할 리스크를 예방합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 정형외과-내과 실시간 협진</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 개인별 맞춤 리스크 케어</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-wheelchair-move"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>체계적인 1:1 맞춤 재활 연계</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        수술 직후 통증 제어 단계부터 관절 가동성 회복, 주변 기립 근력 강화까지 전문 물리치료사가 밀착 스포츠 재활을 직접 연계 처방합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 일상 및 운동기능 조기 복귀</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 전담 치료사의 안전한 가이던스</li>
                      </ul>
                    </div>
                  </div>

                  {/* 주요 수술 치료 분야 추가 */}
                  <div style={{ marginTop: "50px", paddingTop: "40px", borderTop: "2px solid #f1f5f9" }}>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "hsl(193, 80%, 25%)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                      <i className="fa-solid fa-notes-medical" style={{ color: "hsl(38, 92%, 50%)" }}></i>
                      굳쎈 주요 수술 치료 분야
                    </h3>
                    <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
                      
                      {/* 수술 분야 1 */}
                      <div style={{ backgroundColor: "var(--color-bg-warm, #FAF9F6)", padding: "24px", borderRadius: "12px", border: "1px dashed #cbd5e1" }}>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "hsl(193, 80%, 25%)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ backgroundColor: "hsl(38, 92%, 50%)", color: "#ffffff", width: "24px", height: "24px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: "bold" }}>1</span>
                          골절 수술
                        </h4>
                        <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
                          척추골절, 관절골절, 사지 복합골절 등 긴급하고 정밀한 접합 치료가 필요한 뼈 손상 수술을 시행합니다.
                        </p>
                      </div>

                      {/* 수술 분야 2 */}
                      <div style={{ backgroundColor: "var(--color-bg-warm, #FAF9F6)", padding: "24px", borderRadius: "12px", border: "1px dashed #cbd5e1" }}>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "hsl(193, 80%, 25%)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ backgroundColor: "hsl(38, 92%, 50%)", color: "#ffffff", width: "24px", height: "24px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: "bold" }}>2</span>
                          인공관절수술
                        </h4>
                        <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
                          고관절, 슬관절(무릎), 발목관절, 어깨관절 등 연골 소실 및 마모가 심한 관절을 정밀 치환하여 제 기능을 복구합니다.
                        </p>
                      </div>

                      {/* 수술 분야 3 */}
                      <div style={{ backgroundColor: "var(--color-bg-warm, #FAF9F6)", padding: "24px", borderRadius: "12px", border: "1px dashed #cbd5e1" }}>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "hsl(193, 80%, 25%)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ backgroundColor: "hsl(38, 92%, 50%)", color: "#ffffff", width: "24px", height: "24px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: "bold" }}>3</span>
                          관절경 수술
                        </h4>
                        <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
                          척추 디스크/협착, 어깨 회전근개 파열, 오십견, 무릎 십자인대/연골판 파열, 발목 인대 파열 등을 최소 절개 카메라로 정교히 진단하고 수술합니다.
                        </p>
                      </div>

                      {/* 수술 분야 4 */}
                      <div style={{ backgroundColor: "var(--color-bg-warm, #FAF9F6)", padding: "24px", borderRadius: "12px", border: "1px dashed #cbd5e1" }}>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "hsl(193, 80%, 25%)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ backgroundColor: "hsl(38, 92%, 50%)", color: "#ffffff", width: "24px", height: "24px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: "bold" }}>4</span>
                          교정술
                        </h4>
                        <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
                          휜 다리를 곧게 펴주는 오다리 교정(근위경골 절골술), 엄지발각 변형을 바로잡는 무지외반증 교정수술 등 골격을 곧게 정렬합니다.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              )}

              {/* 탭 1: 주사치료 */}
              {activeTab === 1 && (
                <div>
                  <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "1.1rem", marginBottom: "35px", lineHeight: "1.7" }}>
                    단순 진통 효과를 넘어 손상된 인대와 관절 세포의 재생을 원천적으로 돕고 뼈와 연골을 단단하게 고정시키는 정밀 주사 치료 프로그램입니다.
                  </p>
                  
                  <div className="services-grid" style={{ display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-crosshairs"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>C-Arm 및 초음파 정밀 주사</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        실시간 영상 장비를 보며 통증의 정확한 원인 부위에 약물을 오차 없이 미세 조준하여 안전하게 투입합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 약물 부작용 최소화</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 소량 약물로 정밀 타격 효과</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-shield-halved"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>프롤로 및 DNA 자가재생 주사</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        약해진 인대와 건 관절 부위에 자극 물질을 투입해 스스로 자가 회복되는 섬유아세포 재생을 촉진합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 연골 및 인대 조직 근본 회복</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 인체 무해 입증 안전 성분</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-kit-medical"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>고령자도 안전한 비수술 케어</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        시술 시간 10분 내외로 별도 마취나 입원이 필요 없어 만성질환 환자나 어르신들도 부담 없이 접하실 수 있습니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 당일 즉시 일상 복귀</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 높은 안전성과 치료 효율</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-bone"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>관절막 및 연골 윤활 케어</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        퇴행성 연골의 조기 마모를 예방하고 마찰로 인한 염증을 제어하기 위해 관절 활액 성분의 보호 주사를 정교하게 도포합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 마찰 통증 해소 및 손상 지연</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 건강보험 혜택 적용 가능</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 탭 2: 도수치료 */}
              {activeTab === 2 && (
                <div>
                  <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "1.1rem", marginBottom: "35px", lineHeight: "1.7" }}>
                    의사의 처방하에 전문 도수 치료사가 직접 손과 소도구를 활용하여 척추 골반의 불균형을 해결하고 뭉친 근막을 완화하는 통증 해소 솔루션입니다.
                  </p>
                  
                  <div className="services-grid" style={{ display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-hands-holding"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>숙련된 도수치료사 1:1 케어</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        해부학적 통찰이 뛰어난 전담 물리치료사가 환자의 상태에 따라 통증 디스크 관절 부위를 부드럽게 이완 및 정렬합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 1:1 전담 안전한 도수 도포</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 굳은 관절 유연성 정비</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-users-viewfinder"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>직장인·수험생 체형 정밀 분석</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        거북목, 일자목, 구부정한 라운드 숄더 및 골반 대칭 틀어짐으로 만성 피로와 결림을 겪는 분들을 위한 자세 분석 교정입니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 만성 피로 근골격 저림 해소</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 척추 정렬 불균형 집중 회복</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-shield-cat"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>주사 및 물리치료 병행 효과</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        원내의 정형외과 치료 프로그램과 도수를 정밀 병행 설계하여 치료 기간을 대폭 단축시키고 효과를 높입니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 가동 범위 즉시 확장 솔루션</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 비수술 원스톱 재활 케어</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-person-running"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>바른 자세 및 자가 운동 지도</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        병원 치료실 외부인 일상에서도 척추 균형이 안정적으로 유지되도록 1:1 홈 트레이닝 스트레칭 교육을 세심히 제공합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 척추 근력 장기 보호 솔루션</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 가정 내 바른 척추 환경 보강</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 탭 3: 체외충격파 */}
              {activeTab === 3 && (
                <div>
                  <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "1.1rem", marginBottom: "35px", lineHeight: "1.7" }}>
                    강력한 충격파 물리에너지를 만성 염증 환부에 집중 전달하여, 미세 혈류 공급을 유도하고 세포의 자연 치유 메커니즘을 깨우는 비수술 재생법입니다.
                  </p>
                  
                  <div className="services-grid" style={{ display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-wave-square"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>집중형 & 방사형 복합 장비</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        관절 힘줄 심부용 집중형 장비와, 표면 근육 치료용 방사형 장비를 환자의 증상 부위에 알맞게 맞춤 혼합 시술합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 환부 맞춤 에너지 분산 제어</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 족저근막염 및 만성 엘보 타격</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-vial-virus"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>신속한 자가 세포 재생 촉진</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        통증 신경 물질을 희석하고 혈관 재생을 촉진하여, 치유 속도가 현저히 느려진 만성 인대 힘줄 부위의 자가 치유를 도모합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 약물 부담 없는 자가 면역 재생</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 힘줄 석회 분쇄 및 혈류 공급</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-heart-circle-check"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>안전한 비침습적 치료 진행</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        절개나 주사가 일절 들어가지 않아 부작용 염려가 전혀 없으며, 환자의 실시간 피드백을 통해 충격 강도를 안전하게 제어합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 15분 내외 짧은 통원 케어</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 신체 기저질환 유무 상관없이 안전</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-burst"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>만성 석회 분쇄 및 근막 유착 해소</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        어깨 회전근개 등 힘줄 내에 딱딱히 뭉쳐 통증을 초래하는 만성 석회 조직을 부드럽고 잘게 부숴 흡수를 촉진하고 유착 근막을 풀며 가동력을 회복합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 석회성 건염 특화 에너지 제어</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 굳어버린 관절 정체 가동력 복구</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 탭 4: 비수술 통증치료 */}
              {activeTab === 4 && (
                <div>
                  <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "1.1rem", marginBottom: "35px", lineHeight: "1.7" }}>
                    허리 및 목 디스크 협착증 환자의 척추 디스크 탈출이나 신경 압박 문제를 컴퓨터 정밀 투시하에 안전하게 해결하는 최첨단 비수술 통증 제어 클리닉입니다.
                  </p>
                  
                  <div className="services-grid" style={{ display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-radiation"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>신경차단술 및 통증 치료</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        실시간 컴퓨터 촬영 장비를 활용해 부종과 유착이 심해진 신경가지 부근에 염증을 강력 가라앉히는 치료제를 정밀 주입합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 만성 요통 디스크 통증 완화</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 시술 시간 10분 내외 신속 제어</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-arrows-to-circle"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>신경유착박리술 및 증식 케어</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        디스크 유착이 매우 심한 경우 꼬리뼈를 통해 진입하는 초미세 특수 카테터 관을 통해 염증 부위를 깨끗이 박리 세척해 냅니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 만성 다리 저림 유착 분리 해소</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 국소 마취 당일 퇴원 안전 시스템</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-laptop-medical"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>체계적인 사후 재활 연계</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        비수술 시술로 통증과 급성 염증을 제거한 직후, 골격과 허리 기립근을 잡아주는 운동과 도수를 매칭하여 재발을 강력 방지합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 근육 강화와 유연성 복구 연계</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 평생 척추 건강 주치의 책임 진료</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "25px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-tv"></i>
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>고정밀 C-Arm 실시간 영상 추적</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        1mm 미만의 신경 가지까지 선명히 식별하는 정밀 모니터 스크린을 보며 통증이 심한 환부에 치료제를 정밀 주입하여 주변 혈관 손상 없이 안전하게 시술합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.85rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 오차 없는 정밀 타격 시술 실현</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 대학병원급 C-Arm 실시간 모니터링</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* 모바일 뷰 전용 가로형 탭 CSS & 레이아웃 미디어 쿼리 스타일 주입 */}
      <style jsx global>{`
        .notice-layout-grid {
          grid-template-columns: 280px 1fr;
        }

        .tab-button:hover {
          background-color: hsl(193, 40%, 95%) !important;
          color: hsl(193, 80%, 25%) !important;
        }
        .tab-button:hover:focus,
        .tab-button:focus {
          outline: none;
        }

        @media (max-width: 768px) {
          .notice-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .tab-sidebar {
            position: relative !important;
            top: 0 !important;
          }
          .tab-sidebar > div {
            flex-direction: row !important;
            overflow-x: auto;
            white-space: nowrap;
            padding: 10px !important;
            border-radius: 12px !important;
            gap: 8px !important;
            -webkit-overflow-scrolling: touch;
          }
          .tab-sidebar h3 {
            display: none;
          }
          .tab-button {
            width: auto !important;
            flex-shrink: 0;
            padding: 10px 16px !important;
            font-size: 0.9rem !important;
            border-left: none !important;
            border-bottom: 3px solid transparent !important;
          }
          .tab-button.active {
            border-bottom: 3px solid hsl(38, 92%, 50%) !important;
          }
          .tab-button i {
            display: none;
          }
          .tab-content-card {
            padding: 25px 15px !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
    </>
  );
}
