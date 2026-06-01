"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NoticePage() {
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
    { id: 0, title: "개인정보 취급방침" },
    { id: 1, title: "이용약관" },
    { id: 2, title: "이메일 무단수집 거부" },
    { id: 3, title: "비급여 진료비 조회" },
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
            CUSTOMER CENTER
          </span>
          <h1 
            style={{ 
              fontSize: "2.5rem", 
              fontWeight: 700, 
              margin: "0 0 10px 0",
              letterSpacing: "-1px"
            }}
          >
            굳쎈 정형외과 내과의 공지사항
          </h1>
          <p style={{ opacity: 0.8, fontSize: "1.05rem", margin: 0 }}>
            굳쎈정형외과내과의원의 중요 공지 및 규정을 투명하게 안내해 드립니다.
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
          {/* 데스크톱/태블릿에서는 1:3 그리드로 구성 */}
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
                  안내 및 규정 메뉴
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
              {/* 탭 0: 개인정보 취급방침 */}
              {activeTab === 0 && (
                <div>
                  <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "hsl(193, 80%, 25%)", marginBottom: "20px", borderBottom: "1px solid #e2e8f0", paddingBottom: "15px" }}>
                    개인정보 취급방침
                  </h2>
                  <div style={{ color: "hsl(210, 24%, 30%)", lineHeight: "1.8", fontSize: "0.95rem" }}>
                    <p style={{ marginBottom: "15px" }}>
                      <strong>굳쎈정형외과내과의원</strong>(이하 "본원")은 환자 및 고객님의 개인정보를 매우 소중하게 생각하며, "개인정보 보호법" 및 "의료법" 등 관련 법령을 철저히 준수하고 있습니다. 본원은 개인정보 처리방침을 통하여 환자분들께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                    </p>
                    
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "hsl(210, 24%, 16%)", marginTop: "30px", marginBottom: "10px" }}>
                      1. 수집하는 개인정보의 항목 및 수집 방법
                    </h3>
                    <p style={{ marginBottom: "10px" }}>본원은 진료 예약, 상담, 각종 서비스 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "15px" }}>
                      <li><strong>필수항목</strong>: 성명, 주민등록번호(의료법상 진료 기록 필수 수집), 연락처(휴대폰 번호), 주소</li>
                      <li><strong>선택항목</strong>: 이메일, 상담 신청 내용, 예약 희망일 등</li>
                      <li><strong>수집방법</strong>: 병원 내원 접수 서류 작성, 웹사이트 온라인 예약 및 상담 신청 양식, 전화 통화 등</li>
                    </ul>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "hsl(210, 24%, 16%)", marginTop: "30px", marginBottom: "10px" }}>
                      2. 개인정보의 수집 및 이용목적
                    </h3>
                    <p style={{ marginBottom: "15px" }}>
                      수집된 모든 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며, 이용 목적이 변경될 시에는 사전 동의를 구할 것입니다.
                    </p>
                    <ul style={{ listStyleType: "decimal", paddingLeft: "20px", marginBottom: "15px" }}>
                      <li><strong>진료 서비스 제공</strong>: 외래 진료 및 검사 예약, 예약 확인 문자 발송, 진단 및 치료, 조제, 수납, 진료비 청구 등</li>
                      <li><strong>행정 서비스</strong>: 진료비 계산서, 영수증, 제증명서(진단서, 소견서 등) 발급 등</li>
                      <li><strong>고객 상담 및 민원 처리</strong>: 웹사이트 온라인 문의에 대한 답변, 불편 사항 접수 및 해결</li>
                    </ul>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "hsl(210, 24%, 16%)", marginTop: "30px", marginBottom: "10px" }}>
                      3. 개인정보의 보유 및 이용기간
                    </h3>
                    <p style={{ marginBottom: "15px" }}>
                      의료법 기준에 따라 진료기록부 등 환자 개인정보가 포함된 서류는 법정 의무 보존기간(진료기록부 10년, 처방전 2년 등) 동안 안전하게 보관하며, 보존기간이 경과하고 이용 목적이 달성된 개인정보는 지체 없이 파기합니다. 단, 환자의 요청이나 별도의 동의가 있을 경우 일정 기간 연장하여 보유할 수 있습니다.
                    </p>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "hsl(210, 24%, 16%)", marginTop: "30px", marginBottom: "10px" }}>
                      4. 개인정보의 파기절차 및 방법
                    </h3>
                    <p style={{ marginBottom: "10px" }}>본원은 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "15px" }}>
                      <li><strong>파기절차</strong>: 법정 보유 기간이 만료된 정보는 내부 방침 및 기타 관련 법령에 의거하여 파기 대상으로 분류된 후 파기됩니다.</li>
                      <li><strong>파기방법</strong>: 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기하고, 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 영구 삭제합니다.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* 탭 1: 이용약관 */}
              {activeTab === 1 && (
                <div>
                  <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "hsl(193, 80%, 25%)", marginBottom: "20px", borderBottom: "1px solid #e2e8f0", paddingBottom: "15px" }}>
                    홈페이지 이용약관
                  </h2>
                  <div style={{ color: "hsl(210, 24%, 30%)", lineHeight: "1.8", fontSize: "0.95rem" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "hsl(210, 24%, 16%)", marginTop: "20px", marginBottom: "10px" }}>
                      제 1 조 (목적)
                    </h3>
                    <p style={{ marginBottom: "15px" }}>
                      본 약관은 굳쎈정형외과내과의원(이하 "본원")이 제공하는 인터넷 관련 서비스(이하 "서비스")를 이용함에 있어, 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
                    </p>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "hsl(210, 24%, 16%)", marginTop: "20px", marginBottom: "10px" }}>
                      제 2 조 (용어의 정의)
                    </h3>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "15px" }}>
                      <li><strong>이용자</strong>: 본원에 접속하여 본 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
                      <li><strong>서비스</strong>: 본원이 홈페이지를 통하여 이용자에게 제공하는 진료 예약 신청, 진료 안내, 온라인 상담, 의료 건강 정보 등의 모든 인터넷 서비스를 말합니다.</li>
                    </ul>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "hsl(210, 24%, 16%)", marginTop: "20px", marginBottom: "10px" }}>
                      제 3 조 (약관의 효력과 변경)
                    </h3>
                    <p style={{ marginBottom: "10px" }}>
                      1. 본 약관은 홈페이지 서비스 화면에 게시함으로써 효력이 발생하며, 합리적인 사유가 발생할 경우 관련 법령을 위배하지 않는 범위 내에서 개정될 수 있습니다.
                    </p>
                    <p style={{ marginBottom: "15px" }}>
                      2. 이용자는 정기적으로 홈페이지를 방문하여 약관의 변경사항을 확인할 의무가 있습니다. 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.
                    </p>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "hsl(210, 24%, 16%)", marginTop: "20px", marginBottom: "10px" }}>
                      제 4 조 (서비스 제공의 중단)
                    </h3>
                    <p style={{ marginBottom: "15px" }}>
                      본원은 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 서비스 중단으로 인하여 이용자에게 발생하는 문제에 대해 고의 또는 중과실이 없는 한 책임지지 않습니다.
                    </p>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "hsl(210, 24%, 16%)", marginTop: "20px", marginBottom: "10px" }}>
                      제 5 조 (이용자의 의무)
                    </h3>
                    <p style={{ marginBottom: "10px" }}>이용자는 서비스를 이용할 때 다음 각 호의 행위를 하지 않아야 합니다.</p>
                    <ul style={{ listStyleType: "decimal", paddingLeft: "20px", marginBottom: "15px" }}>
                      <li>타인의 개인정보(이름, 주민번호 등)를 도용하여 예약을 신청하는 행위</li>
                      <li>본 사이트의 정보를 무단 복제하여 배포하거나 상업적으로 이용하는 행위</li>
                      <li>본원 및 제3자의 지적 재산권, 명예 등을 침해하는 행위</li>
                      <li>기타 관계 법령 및 약관에서 규정한 사항을 위반하는 행위</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* 탭 2: 이메일 무단수집 거부 */}
              {activeTab === 2 && (
                <div>
                  <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "hsl(193, 80%, 25%)", marginBottom: "20px", borderBottom: "1px solid #e2e8f0", paddingBottom: "15px" }}>
                    이메일 무단수집 거부
                  </h2>
                  <div style={{ color: "hsl(210, 24%, 30%)", lineHeight: "1.8", fontSize: "0.95rem" }}>
                    <p style={{ marginBottom: "20px", fontSize: "1.05rem", fontWeight: 500, color: "hsl(210, 24%, 16%)" }}>
                      "본 웹사이트에 게시된 이메일 주소의 무단 수집을 거부합니다."
                    </p>
                    <p style={{ marginBottom: "15px" }}>
                      굳쎈정형외과내과의원 홈페이지에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반할 경우 <strong>정보통신망 이용촉진 및 정보보호 등에 관한 법률</strong>에 의해 형사처벌을 받을 수 있음을 알려드립니다.
                    </p>
                    
                    <div style={{ backgroundColor: "#f1f5f9", padding: "20px", borderRadius: "8px", borderLeft: "4px solid hsl(38, 92%, 50%)", marginTop: "30px", marginBottom: "30px" }}>
                      <h4 style={{ fontWeight: 700, color: "hsl(210, 24%, 16%)", marginBottom: "8px" }}>관련 법령 안내 (정보통신망법 제50조의 2)</h4>
                      <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "0.9rem" }}>
                        <li style={{ marginBottom: "5px" }}>누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램이나 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니 된다.</li>
                        <li style={{ marginBottom: "5px" }}>누구든지 제1항을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니 된다.</li>
                        <li>누구든지 제1항 및 제2항에 따라 수집·판매 및 유통이 금지된 전자우편주소임을 알면서 이를 정보 전송에 이용하여서는 아니 된다.</li>
                      </ul>
                    </div>

                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                      공고일: 2026년 6월 1일
                    </p>
                  </div>
                </div>
              )}

              {/* 탭 3: 비급여 진료비 조회 */}
              {activeTab === 3 && (
                <div>
                  <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "hsl(193, 80%, 25%)", marginBottom: "20px", borderBottom: "1px solid #e2e8f0", paddingBottom: "15px" }}>
                    비급여 진료비 조회
                  </h2>
                  <div style={{ color: "hsl(210, 24%, 30%)", lineHeight: "1.8", fontSize: "0.95rem" }}>
                    <p style={{ marginBottom: "20px" }}>
                      비급여 진료비는 국민건강보험법에 따라 건강보험이 적용되지 않아, 환자가 비용 전액을 부담하는 항목입니다. 의료법 제45조에 의거하여 굳쎈정형외과내과의원에서 시행하는 비급여 진료비용을 아래와 같이 투명하게 고지합니다.
                    </p>

                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.92rem", minWidth: "600px" }}>
                        <thead>
                          <tr style={{ backgroundColor: "hsl(193, 80%, 25%)", color: "#ffffff" }}>
                            <th style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "left" }}>대분류</th>
                            <th style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "left" }}>항목 (세부 명칭)</th>
                            <th style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>단위</th>
                            <th style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right" }}>금액 (원)</th>
                            <th style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "left" }}>설명/비고</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* 도수 및 물리치료 */}
                          <tr style={{ backgroundColor: "#f8fafc" }}>
                            <td rowSpan={3} style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontWeight: 700, verticalAlign: "middle" }}>도수치료/충격파</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>도수치료 (기본 코스)</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>40분</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>120,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>도수 및 물리치료 병행</td>
                          </tr>
                          <tr style={{ backgroundColor: "#f8fafc" }}>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>도수치료 (집중 케어)</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>60분</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>170,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>도수, 척추 교정 및 운동 치료 포함</td>
                          </tr>
                          <tr style={{ backgroundColor: "#f8fafc" }}>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>체외충격파 (ESWT)</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>1회</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>80,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>근막통증증후군 및 관절 건염 특화</td>
                          </tr>
                          {/* 주사치료 */}
                          <tr>
                            <td rowSpan={2} style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontWeight: 700, verticalAlign: "middle" }}>척추관절 주사</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>프롤로 주사 (인대강화주사)</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>1회</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>100,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>고농도 포도당 인대 증식 치료</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>DNA 재생주사 (PDRN)</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>1회</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>150,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>세포 재생 및 염증 완화 촉진 주사</td>
                          </tr>
                          {/* 내과/내시경 */}
                          <tr style={{ backgroundColor: "#f8fafc" }}>
                            <td rowSpan={3} style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontWeight: 700, verticalAlign: "middle" }}>소화기 내시경</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>위내시경 (수면 진정 관리료)</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>1회</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>60,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>검사비, 진찰료 별도 구분 고지</td>
                          </tr>
                          <tr style={{ backgroundColor: "#f8fafc" }}>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>대장내시경 (수면 진정 관리료)</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>1회</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>80,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>진정 유도제 투여 및 모니터링 포함</td>
                          </tr>
                          <tr style={{ backgroundColor: "#f8fafc" }}>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>대장 용종절제술 (비급여 기구)</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>1회</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>100,000 ~ 200,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>용종의 개수 및 절제 범위에 따라 차등 적용</td>
                          </tr>
                          {/* 예방접종 */}
                          <tr>
                            <td rowSpan={3} style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontWeight: 700, verticalAlign: "middle" }}>예방접종 백신</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>대상포진 백신 (싱그릭스)</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>1회</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>250,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>유전자 재조합 백신 (총 2회 접종 필요)</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>폐렴구균 백신 (프리베나 13)</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>1회</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>130,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>성인 평생 1회 접종 권장</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>독감 인플루엔자 (4가)</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>1회</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>40,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>시즌별 변동 가능</td>
                          </tr>
                          {/* 영양수액 */}
                          <tr style={{ backgroundColor: "#f8fafc" }}>
                            <td rowSpan={2} style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontWeight: 700, verticalAlign: "middle" }}>영양 수액</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>아미노산 및 종합비타민 수액</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>1회</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>80,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>만성 피로 및 기력 저하 회복용 수액</td>
                          </tr>
                          <tr style={{ backgroundColor: "#f8fafc" }}>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1" }}>항산화 마늘 주사 (비타민B1)</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "center" }}>1회</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", textAlign: "right", fontWeight: "bold" }}>40,000</td>
                            <td style={{ padding: "12px 15px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}>빠른 피로 및 젖산 해소 효능</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <p style={{ marginTop: "20px", fontSize: "0.85rem", color: "#64748b" }}>
                      ※ 상기 비급여 항목은 약제 가격 변동 및 환자 상태에 따른 진료량 변화에 따라 가감될 수 있으며, 치료 전 의료진의 상세한 안내 후 시행됩니다. (고지일자: 2026년 6월 1일)
                    </p>
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
        /* 데스크톱 그리드 레이아웃 기본값 */
        .notice-layout-grid {
          grid-template-columns: 280px 1fr;
        }

        /* 탭 버튼 호버 시 부드러운 배경색 전환 */
        .tab-button:hover {
          background-color: hsl(193, 40%, 95%) !important;
          color: hsl(193, 80%, 25%) !important;
        }
        /* 액티브 버튼은 호버 시에도 흰색 텍스트 유지 */
        .tab-button:hover:focus,
        .tab-button:focus {
          outline: none;
        }

        /* 비급여 조회 표 반응형 디자인 */
        table th, table td {
          border: 1px solid #e2e8f0 !important;
        }
        table th {
          font-weight: 600;
        }

        /* 모바일 반응형 화면 제어 */
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
            display: none; /* 모바일에서는 타이틀 숨김 */
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
            display: none; /* 모바일에서는 오른쪽 화살표 아이콘 숨김 */
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
