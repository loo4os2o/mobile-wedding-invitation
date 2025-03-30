import styled from '@emotion/styled';
import RoundButton from '@/components/RoundButton.tsx';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InterviewProps {
  openModal: () => void; 
}

// eslint-disable-next-line react/prop-types
const Interview: React.FC<InterviewProps> = ({ openModal }) => {

  return (
    <>
      <InterviewWrapper>
        <div className='pt-30 pb-30'>
          <RoundButton onClick={openModal}>
            신랑 신부 인터뷰 읽어보기
          </RoundButton>
        </div>
      </InterviewWrapper>
    </>
  );
};

export default Interview;

const InterviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
