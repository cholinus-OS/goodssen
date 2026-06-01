"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InternalMedPage() {
  const [activeTab, setActiveTab] = useState(0);

  // URL의 쿼리 스트링(?tab=0~3)을 분석하여 초기 탭을 설정합니다.
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      if (tabParam !== null) {
        const tabIndex = parseInt(tabParam, 10);
        if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex <= 3) {
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
    { id: 0, title: "위·대장 내시경", badge: "안전하고 정밀한" },
    { id: 1, title: "5대 암검진", badge: "내 몸의 든든한 방어막" },
    { id: 2, title: "만성질환 관리", badge: "평생 주치의 약속" },
    { id: 3, title: "예방접종", badge: "성인 안심 백신 프로그램" },
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
            INTERNAL MEDICINE & HEALTH CHECKUP
          </span>
          <h1 
            style={{ 
              fontSize: "2.5rem", 
              fontWeight: 700, 
              margin: "0 0 10px 0",
              letterSpacing: "-1px"
            }}
          >
            굳쎈 내과검진센터
          </h1>
          <p style={{ opacity: 0.8, fontSize: "1.05rem", margin: 0 }}>
            소화기 세부전문의 내과 원장의 정직하고 꼼꼼한 진단으로 평생 건강 주치의가 되어드립니다.
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
                  내과검진 과목
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
                        color: isActive ? "#ffffff" : "hsl(210, 24%, 16%)",
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

              {/* 탭 0: 위·대장 내시경 */}
              {activeTab === 0 && (
                <div>
                  <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "1.1rem", marginBottom: "35px", lineHeight: "1.7" }}>
                    소화기내과 세부전문의 원장이 올림푸스 최상급 내시경 장비로 미세한 조기 암세포나 용종을 직접 찾아내고 당일 즉시 안전하게 절제 처치합니다.
                  </p>
                  
                  <div className="services-grid" style={{ display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    <div className="service-card" style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-user-doctor"></i>
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>소화기내시경 세부전문의 시술</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        대학병원 임상교수 출신의 검증된 실력을 가진 내과 전문의가 미세 병변도 놓치지 않고 꼼꼼히 체크합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.9rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 세부 전문의 100% 직접 시술</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 용종 발견 시 당일 용종절제술 연동</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-hand-holding-medical"></i>
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>철저한 1회용 소독 지침 준수</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        내시경학회 소독 가이드라인에 따른 화학 멸균 소독 및 모든 마우스피스와 주삿바늘의 철저한 일회용 사용을 약속합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.9rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 초음파 자동 세척 및 멸균기 사용</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 1인 1대 소독 원칙 완벽 준수</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-gauge-high"></i>
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>CO2 가스 주입으로 복통 예방</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        대장 내시경 검사 시 일반 공기 대신 빠른 인체 배출 흡수가 되는 이산화탄소(CO2)를 공급하여 복부 팽만 고통을 획기적으로 방지합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.9rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 아프지 않고 가스가 잘 빠지는 수면내시경</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 검사 종료 후 신속한 기상과 일상 복귀</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 탭 1: 5대 암검진 */}
              {activeTab === 1 && (
                <div>
                  <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "1.1rem", marginBottom: "35px", lineHeight: "1.7" }}>
                    국민건강보험공단 지정 종합 건강검진 의원으로서 우리나라 발병률이 가장 높은 위암, 대장암, 간암, 유방암, 자궁경부암을 정확히 판독합니다.
                  </p>
                  
                  <div className="services-grid" style={{ display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    <div className="service-card" style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-apple-whole"></i>
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>소화기계 암 검진 (위/대장/간암)</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        정밀 소화기 내시경 검사 및 간암 유무 확인용 초음파, 혈액 종양표지자 검사를 병행해 소화기 악성 종양을 사전 진단합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.9rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 간초음파 및 혈청 알파태아단백 검증</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 조기 종양 발견 특화 의료 장비 가동</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-person-breastfeeding"></i>
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>여성 2대 암 정밀 검진</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        여성분들이 안심하고 쾌적하게 수진하실 수 있도록 분리된 독립 유방 촬영실 및 1회용 브러시를 이용한 무통 자궁 세포진 검사를 진행합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.9rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 여성 프라이버시 존중 독립 진료 환경</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 유방 압박 촬영 및 정밀 판독 시스템</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-clipboard-check"></i>
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>진료 당일 정밀 결과 피드백</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        검진 결과를 단순히 우편으로만 통보하는 방식을 벗어나, 원장이 직접 중요 소견을 당일 조기에 상세 설명해 드립니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.9rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 전문의 1:1 따뜻한 설명 진료</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 상급병원 신속 연계 의뢰 서비스 구축</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 탭 2: 만성질환 관리 */}
              {activeTab === 2 && (
                <div>
                  <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "1.1rem", marginBottom: "35px", lineHeight: "1.7" }}>
                    혈관 내경을 손상시키고 각종 뇌심혈관 중증 합병증을 초래하는 당뇨, 고혈압, 고지혈증에 대해, 약물 및 일상 식습관 1:1 관리를 통해 안전하게 밀착 치료합니다.
                  </p>
                  
                  <div className="services-grid" style={{ display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    <div className="service-card" style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-heart-pulse"></i>
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>고혈압 / 이상지질혈증 개별 케어</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        환자 개인별 혈압 동향 분석과 동맥경화 진단 기기 연계 검사를 바탕으로 심혈관 손상 위험도를 조기 모니터링하여 투약 조절을 결정합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.9rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 혈관 동맥경화 탄성 진단 연동</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 평생 든든한 맞춤 만성 혈압 제어</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-droplet"></i>
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>당뇨병 당화혈색소 신속 체크</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        원내 정밀 간이 혈액분석기를 통해 당일 즉시 당화혈색소(3개월간 평균 혈당) 지표를 확인하여 인슐린 민감성을 튼튼히 조절합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.9rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 당일 신속 혈액검사 결과 분석</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 당뇨병 만성 미세혈관 합병증 정밀 차단</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-utensils"></i>
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>생활 패턴 맞춤 식단 및 운동 교정</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        단순 약 처방 조율을 넘어 환자의 생활환경 안에서 소금 저나트륨 제한, 운동 시간 할애 가이드 등 실천 가능한 치료 방향을 상세 지도합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.9rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 1:1 환자의 눈높이에 맞춘 일상 건강 가이드</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 정감 가고 따뜻한 평생 주치의 동반 약속</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 탭 3: 예방접종 */}
              {activeTab === 3 && (
                <div>
                  <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "1.1rem", marginBottom: "35px", lineHeight: "1.7" }}>
                    성인 예방접종은 면역 체계를 활성화시켜 대상포진과 폐렴 등 중증 감염병으로부터 안전하게 생명과 활력을 지키는 최선의 방도입니다.
                  </p>
                  
                  <div className="services-grid" style={{ display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    <div className="service-card" style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-virus-slash"></i>
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>
                        대상포진 백신<br />
                        <span style={{ fontSize: "0.95rem", color: "hsl(208, 12%, 46%)", fontWeight: "normal" }}>(최신 싱그릭스 백신 도입)</span>
                      </h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        예방 효율이 97% 이상으로 극대화된 유전자 재조합 신형 백신인 '싱그릭스(Shingrix)'를 원내 전면 배치하여 도입 시행 중입니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.9rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 만 50세 이상 및 고연령 성인 강력 접종 권장</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 총 2회 접종(2개월 간격)을 통한 최상의 면역벽 획득</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-shield-virus"></i>
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>폐렴구균 & 인플루엔자 독감 백신</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        감염 시 치명율이 높은 중증 호흡기 질환 예방용 폐렴 단백접합 백신 및 매년 정기 유행하는 4가 독감 접종을 안정적으로 수급 제공합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.9rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 성인 평생 1회 접종 폐렴 단백 접합 백신</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 독감 시즌 맞춤 원스톱 동시 접종 프로그램</li>
                      </ul>
                    </div>

                    <div className="service-card" style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
                      <div className="card-icon-wrapper" style={{ color: "hsl(193, 80%, 25%)", fontSize: "2rem", marginBottom: "15px" }}>
                        <i className="fa-solid fa-syringe"></i>
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "hsl(210, 24%, 16%)" }}>백신 콜드체인 정밀 모니터링</h3>
                      <p style={{ color: "hsl(208, 12%, 46%)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        백신의 역가(유효도)를 철저히 보존하기 위해, 백신 전용 냉장 온도 제어 시스템을 항시 가동하여 정밀 온도 관리를 유지합니다.
                      </p>
                      <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "0.9rem", color: "hsl(210, 24%, 16%)", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 자동 온도 이상 경보 센서 시스템 가동</li>
                        <li><i className="fa-solid fa-check" style={{ color: "hsl(38, 92%, 50%)", marginRight: "8px" }}></i> 접종 후 안정 상태를 유도하는 원내 15분 관찰 모니터링</li>
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
