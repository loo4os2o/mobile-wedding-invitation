import styled from '@emotion/styled';
import mainImg from '@/assets/images/01. 20 BGH_0443-3.jpg'
import '@/components/opening.css';

const Main = () => {
  return (
    <div>
      <MainImg src={mainImg} />

      <SubTitle>
        예쁘지 않은 것을 <br/>예쁘게 보아주는 것이 사랑이다.<br/><br/>
        좋지 않은 것을 <br/>좋게 생각해 주는 것이 사랑이다.<br/><br/>
        싫은 것도 잘 참아주면서, <br/>처음만 그런 것이 아니라<br/><br/>
        나중까지, 아주 나중까지 <br/>그렇게 하는 것이 사랑이다.<br/>
        <br/>
        &lt;사랑에 답함&gt;, 나태주
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

// const MainTitle = styled.p`
//   font-family: HSSanTokki20-Regular, serif;
//   font-size: 2rem;
//   color: #2F2120;
//   line-height: 120%;
//   white-space: pre-line;
// `;

const SubTitle = styled.p`
  font-size: 16px;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;

  padding: 30px 30px 0 30px;
  margin-bottom: 0;
`;
