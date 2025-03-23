import React from 'react';
import '@/components/opening.css';
import close from '@/assets/icons/icon-close.png';

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenModal: React.FC<FullscreenModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <div className='title'>신랑 신부 인터뷰</div>
          <button onClick={onClose}>
            <img src={close} alt='닫기 버튼' />
          </button>
        </div>
        <div className='modal-body'>
          <section>
            <div className='tit'>1. 결혼을 결심하게 된 계기가 어떤가요?</div>
            <div className='sub'>
              <div className='who'>🤵🏽 경기</div>
              <p>서로에게 행복을 주는 사람을 만났습니다.</p>
              <p>웃는 모습이 세상에서 제일 예쁘고, 배려심 깊고, 마음까지 따뜻한 사람을 만났습니다.</p>
              <p>그렇게 운명처럼 다가온 그녀와의 인연에 이끌려,</p>
              <p>이제는 영원을 함께하고 싶다는 확신이 들었습니다.</p>
              <p className='pt-10'>제 하루의 시작과 끝을 그녀와 함께하고 싶습니다.</p>
              <p>기쁨은 두 배로, 슬픔은 반으로 나누면서 평생을 함께 걸어가고 싶습니다.</p>
              <p className='pt-10'></p>
              <p>그녀가 제 삶에 찾아온 순간부터, 제 모든 순간은 더 빛나기 시작했어요.
                이제 저는 그 빛을 평생 지키고, 더 크게 밝혀줄 사람이고 싶습니다.
                그녀가 행복할 수 있도록, 언제나 가장 든든한 편이 되어주겠습니다.</p>
              <p className='pt-10 gray-6'>
                오늘, 그리고 앞으로의 모든 날까지 
                나는 그녀를 사랑하고, 사랑할 것입니다.</p>
            </div>
            <div className='sub'>
              <div className='who'>👰🏽‍♀️ 여진</div>
              <p>처음 만난 그 날부터 지금 이 순간까지, 한결같이 저를 사랑해주고 아껴주는 그의 모습을 보며,</p>
              <p>결혼에 관심 없던 제 마음이 서서히 바뀌기 시작했어요.</p>
              <p className='pt-10'>언제나 제 편이 되어주고, 힘든 순간에도 변함없이 제 손을 잡아준 그 사람.
                4년이 넘는 시간 동안 함께한 모든 순간이 제게 너무나도 큰 행복이 되었고,
                이제는 그 행복을 평생 지키고 싶다는 확신이 들었습니다.</p>
              <p className='pt-10'>앞으로 함께 보고 싶은 풍경, 함께 만들고 싶은 추억, 함께 나누고 싶은 사랑이 너무 많아요.</p>
              <p>그가 있는 미래라면 어떤 순간도 두렵지 않고, 그와 함께라면 어떤 날도 눈부실 거라고 믿어요.</p>
              <p className='pt-10 gray-6'>
                저를 사랑으로 물들여준 그 사람과, 평생을 함께 걸어가겠습니다.</p>
            </div>
          </section>

          <section>
            <div className='tit'>2. 신혼여행은 어디로 가시나요?</div>
            <div className='sub'>
              <div className='who'>🤵🏽 경기 & 👰🏽‍♀️ 여진</div>
              <p>관광과 휴양을 모두 즐길 수 있는 포르투갈 - 마요르카 - 바르셀로나로 
                13박 14일 동안 떠납니다.✈️</p>
            </div>
          </section>

          <section>
            <div className='tit'>3. 💒신혼집은 어디인가요?</div>
            <div className='sub'>
              <div className='who'>🤵🏽 경기 & 👰🏽‍♀️ 여진</div>
              <p>직장이랑 가까운 세종의 전망 좋은 아파트에서 고양이들과 함께할 수 있는 
                안락한 보금자리를 마련하였습니다.</p>
            </div>
          </section>

          <section>
            <div className='tit'>4. 형제관계가 어떻게 되나요?</div>
            <div className='sub'>
              <div className='who'>🤵🏽 경기</div>
              <p>3형제 중 둘째입니다.</p>
            </div>
            <div className='sub'>
              <div className='who'>👰🏽‍♀️ 여진</div>
              <p>아래 2살 터울 남동생이 1명 있습니다.</p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default FullscreenModal;