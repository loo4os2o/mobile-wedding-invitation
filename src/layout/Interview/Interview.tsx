import { useState } from 'react';
import styled from '@emotion/styled';
import RoundButton from '@/components/RoundButton.tsx';
import FullscreenModal from '@/layout/Interview/FullscreenModal.tsx';

const Interview = () => {

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <InterviewWrapper>

      <div className='pt-30 pb-30'>
        <RoundButton onClick={openModal}>
          신랑 신부 인터뷰 읽어보기
        </RoundButton>
      </div>

      <FullscreenModal isOpen={isModalOpen} onClose={closeModal} />

    </InterviewWrapper>
  );
};

export default Interview;

const InterviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
