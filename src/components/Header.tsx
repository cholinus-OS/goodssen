"use client";

import { useState } from "react";
import ReservationModal from "./ReservationModal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="main-header" id="mainHeader">
        <div className="header-container">
          {/* 로고 (클릭 시 홈으로 이동) */}
          <a href="/" className="logo">
            <span className="logo-bold">굳쎈</span>정형외과내과
          </a>
          
          {/* 데스크톱 메뉴 */}
          <nav className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/#about" className="nav-link">병원소개</a>
                <ul className="submenu">
                  <li><a href="/#about">인사말</a></li>
                  <li><a href="/#doctors">의료진 소개</a></li>
                  <li><a href="/#location">오시는 길</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/joint-center" className="nav-link">굳쎈 척추관절센터</a>
                <ul className="submenu">
                  <li><a href="/joint-center?tab=0">수술치료</a></li>
                  <li><a href="/joint-center?tab=1">주사치료</a></li>
                  <li><a href="/joint-center?tab=2">도수치료</a></li>
                  <li><a href="/joint-center?tab=3">체외충격파</a></li>
                  <li><a href="/joint-center?tab=4">비수술 통증치료</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/internal-med" className="nav-link">굳쎈 내과검진센터</a>
                <ul className="submenu">
                  <li><a href="/internal-med?tab=0">위·대장내시경</a></li>
                  <li><a href="/internal-med?tab=1">5대 암검진</a></li>
                  <li><a href="/internal-med?tab=2">만성질환 관리</a></li>
                  <li><a href="/internal-med?tab=3">예방접종</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/notice" className="nav-link">공지사항</a>
                <ul className="submenu">
                  <li><a href="/notice?tab=0">개인정보 취급방침</a></li>
                  <li><a href="/notice?tab=1">이용약관</a></li>
                  <li><a href="/notice?tab=2">이메일 무단수집 거부</a></li>
                  <li><a href="/notice?tab=3">비급여 진료비 조회</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          
          {/* 모바일 토글 버튼 */}
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

      {/* 모바일 슬라이딩 네비게이션 오버레이 */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            <li>
              <span className="mobile-menu-title">병원소개</span>
              <ul className="mobile-submenu">
                <li><a href="/#about" className="mobile-link" onClick={handleMobileLinkClick}>인사말</a></li>
                <li><a href="/#doctors" className="mobile-link" onClick={handleMobileLinkClick}>의료진 소개</a></li>
                <li><a href="/#location" className="mobile-link" onClick={handleMobileLinkClick}>오시는 길</a></li>
              </ul>
            </li>
            <li>
              <span className="mobile-menu-title">굳쎈 척추관절센터</span>
              <ul className="mobile-submenu">
                <li><a href="/joint-center?tab=0" className="mobile-link" onClick={handleMobileLinkClick}>수술치료</a></li>
                <li><a href="/joint-center?tab=1" className="mobile-link" onClick={handleMobileLinkClick}>주사치료</a></li>
                <li><a href="/joint-center?tab=2" className="mobile-link" onClick={handleMobileLinkClick}>도수치료</a></li>
                <li><a href="/joint-center?tab=3" className="mobile-link" onClick={handleMobileLinkClick}>체외충격파</a></li>
                <li><a href="/joint-center?tab=4" className="mobile-link" onClick={handleMobileLinkClick}>비수술 통증치료</a></li>
              </ul>
            </li>
            <li>
              <span className="mobile-menu-title">굳쎈 내과검진센터</span>
              <ul className="mobile-submenu">
                <li><a href="/internal-med?tab=0" className="mobile-link" onClick={handleMobileLinkClick}>위·대장내시경</a></li>
                <li><a href="/internal-med?tab=1" className="mobile-link" onClick={handleMobileLinkClick}>5대 암검진</a></li>
                <li><a href="/internal-med?tab=2" className="mobile-link" onClick={handleMobileLinkClick}>만성질환 관리</a></li>
                <li><a href="/internal-med?tab=3" className="mobile-link" onClick={handleMobileLinkClick}>예방접종</a></li>
              </ul>
            </li>
            <li>
              <span className="mobile-menu-title">공지사항</span>
              <ul className="mobile-submenu">
                <li><a href="/notice?tab=0" className="mobile-link" onClick={handleMobileLinkClick}>개인정보 취급방침</a></li>
                <li><a href="/notice?tab=1" className="mobile-link" onClick={handleMobileLinkClick}>이용약관</a></li>
                <li><a href="/notice?tab=2" className="mobile-link" onClick={handleMobileLinkClick}>이메일 무단수집 거부</a></li>
                <li><a href="/notice?tab=3" className="mobile-link" onClick={handleMobileLinkClick}>비급여 진료비 조회</a></li>
              </ul>
            </li>
          </ul>
          <div className="mobile-cta-box">
            <a href="#reservation" className="btn-cta-mobile" onClick={(e) => { setIsMobileMenuOpen(false); setIsModalOpen(true); e.preventDefault(); }}>
              진료예약 및 전화상담 받기
            </a>
          </div>
        </div>
      </div>

      {/* 예약 신청 모달창 연동 */}
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
