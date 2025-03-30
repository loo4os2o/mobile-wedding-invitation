// import styled from '@emotion/styled';
// import data from 'data.json';
import '@/components/opening.css';
import Anniversary4st from '@/assets/images/10.anniversary4st.jpg';
import Weddingday from '@/assets/images/11.weddingday.jpg';
import First from '@/assets/images/6.first.jpg';
import Anniversary1st from '@/assets/images/7.anniversary1st.jpg';
import Anniversary2st from '@/assets/images/8.anniversary2st.jpg';
import Anniversary3st from '@/assets/images/9.anniversary3st.jpg';

const Main4 = () => {
  // const { greeting } = data;

  return (
    <div className='history-wrap'>

      <section className='box1'>
        <div className='left'>
          <div>
            <div className='title'>첫만남</div>
            <p>28살, 29살이던<br/> 20년 10월에<br/>  처음 만나 12월 19일<br/> 사귀기 시작했어요😍</p>
          </div>
        </div>
        <div className='right'>
          <div className='img-wrap'>
            <img src={First} alt='첫만남 이미지' />
          </div>
        </div>
      </section>

      <section className='box2'>
        <div className='left'>
          <div className='img-wrap'>
            <img src={Anniversary1st} alt='1주년 이미지' />
          </div>
        </div>
        <div className='right'>
          <div>
            <div className='title'>1주년</div>
            <p>함께 보낸 첫 사계절을<br/> 기념하며 커플링을<br/> 맞췄어요💍</p>
          </div>
        </div>
      </section>

      <section className='box3'>
        <div className='left'>
          <div>
            <div className='title'>2주년</div>
            <p>아주 예쁜 목걸이를<br/> 선물받았어요🎁</p>
          </div>
        </div>
        <div className='right'>
          <div className='img-wrap'>
            <img src={Anniversary2st} alt='2주년 이미지' />
          </div>
        </div>
      </section>

      <section className='box4'>
        <div className='left'>
          <div className='img-wrap'>
            <img src={Anniversary3st} alt='3주년 이미지' />
          </div>
        </div>
        <div className='right'>
          <div>
            <div className='title'>3주년</div>
            <p>여수 여행에서<br/> 앞으로 서로의 미래를<br/> 함께하기로<br/> 약속하였습니다🧡</p>
          </div>
        </div>
      </section>

      <section className='box5'>
        <div className='left'>
          <div>
            <div className='title'>4주년</div>
            <p>기념 여행으로<br/> 베트남 나트랑에서<br/> 스냅 촬영을 했습니다📸</p>
          </div>
        </div>
        <div className='right'>
          <div className='img-wrap'>
            <img src={Anniversary4st} alt='4주년 이미지' />
          </div>
        </div>
      </section>

      <section className='box6'>
        <div className='left'>
          <div className='img-wrap'>
            <img src={Weddingday} alt='결혼식식 이미지' />
          </div>
        </div>
        <div className='right'>
          <div>
            <div className='title'>wedding day</div>
            <p>우리가 만난 지<br/> 1646일<br/> 드디어<br/> 🎉결혼합니다🎉</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main4;