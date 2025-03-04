import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/01. 20 BGH_0443-3.jpg'
import '@/components/opening.css';

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImg src={mainImg} />
      {/* <SubTitle>{greeting.eventDetail}</SubTitle> */}

      <SubTitle>
        예쁘지 않은 것을 <br/>예쁘게 보아주는 것이 사랑이다.<br/><br/>
        좋지 않은 것을 <br/>좋게 생각해 주는 것이 사랑이다.<br/><br/>
        싫은 것도 잘 참아주면서, <br/>처음만 그런 것이 아니라<br/><br/>
        나중까지, 아주 나중까지 <br/>그렇게 하는 것이 사랑이다.<br/>
        <br/>
        &lt;사랑에 답함&gt;, 나태주
      </SubTitle>

      <MainTitle>{greeting.title}</MainTitle>

      <SubTitle>
        여 름이 시작되는 6월, 평생을 함께 하기로 약속합니다.<br/>
        진 신 어린 축복 속에 하루 하루 행복하게 살겠습니다.<br/>
        경 건하고 정성스럽게 준비한 예식에 소중한 여러분을 초대합니다.<br/>
        기 쁜 마음으로 축하해 주시면 감사하겠습니다.<br/>
      </SubTitle>

    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  // width: 90%;
  width: 100%;
  max-width: 450px;
  padding-top: 20px;
`;

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
  line-height: 140%;
  white-space: pre-line;

  padding: 30px;
`;
