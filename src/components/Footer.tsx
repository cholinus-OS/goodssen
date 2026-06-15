"use client";

export default function Footer() {
  return (
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
              <li><a href="/#about">병원 소개</a></li>
              <li><a href="/#doctors">의료진 약력</a></li>
              <li><a href="/#services">특화 진료 안내</a></li>
              <li><a href="/#location">오시는 길 / 주차</a></li>
            </ul>
          </div>
          
          <div className="footer-contacts">
            <h4>연락 및 예약</h4>
            <p><strong>대표전화:</strong> 02-2038-4987</p>
            <p><strong>팩스번호:</strong> 02-2038-4988</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">© 2026 굳쎈정형외과내과의원. All Rights Reserved. Designed for premium care.</p>
          <div className="footer-address">
            상호명: 굳쎈정형외과내과의원 | 대표자: 정기웅 | 주소: 서울 노원구 동일로 1673 (신한은행 건물 4층) | 사업자등록번호: 123-45-67890
          </div>
        </div>
      </div>
    </footer>
  );
}
