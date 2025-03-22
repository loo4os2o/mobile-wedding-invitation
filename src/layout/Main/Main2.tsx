import styled from '@emotion/styled';
import data from 'data.json';
import '@/components/opening.css';

const Main2 = () => {
  const { greeting } = data;
  return (
    <div>
      <MainTitle>{greeting.title}</MainTitle>

      <SubTitle>
        <div className='flex-row align-start'>
          <PointPink>여</PointPink>
          <div className='pl-4'>름이 시작되는 6월, 평생을 함께 하기로 약속합니다.</div>
        </div>
        <div className='flex-row align-start pt-10'>
          <PointPink>진</PointPink>
          <div className='pl-4'>심 어린 축복 속에 하루 하루 행복하게 살겠습니다.</div>
        </div>
        <div className='flex-row align-start pt-10'>
          <PointSky>경</PointSky>
          <div className='pl-4'>건하고 정성스럽게 준비한 예식에 소중한 여러분을 초대합니다.</div>
        </div>
        <div className='flex-row align-start pt-10'>
          <PointSky>기</PointSky>
          <div className='pl-4'>쁜 마음으로 축하해 주시면 감사하겠습니다.</div>
        </div>
      </SubTitle>

    </div>
  );
};

export default Main2;

const MainTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 160%;
  white-space: pre-line;
  padding: 30px 20px;
  text-align: left;
`;
const PointPink = styled.span`
  background: #FFC0CB;
  color: #fff;
  padding: 0 4px;
`;
const PointSky = styled.span`
  background: #B8D0FA;
  color: #fff;
  padding: 0 4px;
`;