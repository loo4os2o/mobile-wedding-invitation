import '@/components/opening.css';
import bride from '@/assets/images/02. 12 BGH_0479-1.jpg';
import groom from '@/assets/images/02. 16 BGH_0616-3.jpg';

const Main3 = () => {
  
  const phoneBack = '010-5395-7376';
  const phoneGo = '010-3347-9499';

  const makeCall = () => {
      window.location.href = `tel:${phoneBack}`;
      window.location.href = `tel:${phoneGo}`;
  };

  return (
    <div className='contact-wrap'>
      <div className='box'>

        <img src={groom} alt='신랑 백경기 연락처' />

        <div className='contact'>
          <span className='sky'>신랑</span> 백경기
          <div className='phone'>
            <div onClick={makeCall} style={{ cursor: 'pointer' }}>📞</div>
            <input type='tel' value={phoneBack} style={{display: "none"}} readOnly />
          </div>
        </div>

        <div className='info pl-6'>
          <div>92년 8월 17일</div>
          <div>세심한 사랑꾼 <span className='sky fw-bold'>ISFJ</span></div>
          <div>#집돌이 #깔끔청결 대명사</div>
        </div>

        <div className='etc pl-6 gray-6'>한결같은 남편이 <br/>되겠습니다.</div>
        <div className='etc pl-6'>백남용ㆍ유영미 의 차남</div>
      </div>
      <div className='box'>
        <img src={bride} alt='신부 고여진 연락처' />

        <div className='contact'>
          <span className='pink'>신부</span> 고여진
          <div className='phone'>
            <div onClick={makeCall} style={{ cursor: 'pointer' }}>📞</div>
            <input type='tel' value={phoneGo} style={{display: "none"}} readOnly />
          </div>
        </div>

        <div className='info pr-6'>
          <div>93년 4월 29일</div>
          <div>꼼꼼한 살림꾼 <span className='pink fw-bold'>ISFJ</span></div>
          <div>#여행러버 #자연좋아girl</div>
        </div>

        <div className='etc pr-6 gray-6'>다정한 아내가 <br/>되겠습니다.</div>
        <div className='etc pr-6'>고광보ㆍ조성란 의 장녀</div>
      </div>
    </div>
  );
};

export default Main3;

// const Image = styled.img`
//   width: 100%;
//   object-fit: cover;
// `;

// const MainTitle = styled.p`
//   font-family: HSSanTokki20-Regular, serif;
//   font-size: 2rem;
//   color: #2F2120;
//   line-height: 120%;
//   white-space: pre-line;
// `;

// const SubTitle = styled.p`
//   font-size: 1.1rem;
//   color: #2F2120;
//   line-height: 160%;
//   white-space: pre-line;
//   padding: 30px 20px;
//   text-align: left;
// `;

// const PointOrange = styled.span`
//   background: orange;
//   padding: 0 4px;
// `;

// const PointSky = styled.span`
//   background: skyblue;
//   padding: 0 4px;
// `;