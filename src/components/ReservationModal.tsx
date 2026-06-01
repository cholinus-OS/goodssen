"use client";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  // 모달 어두운 배경 클릭 시 자동으로 닫히게 하는 함수
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 간편 예약 폼 전송 완료 시 실행되는 함수
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("정상적으로 예약/상담 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.");
    onClose();
  };

  if (!isOpen) return null; // 팝업이 닫혀있으면 아무것도 그리지 않습니다.

  return (
    <div className="modal-overlay active" onClick={handleOverlayClick}>
      <div className="modal-box">
        <button className="modal-close-btn" onClick={onClose} aria-label="닫기">×</button>
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
  );
}
