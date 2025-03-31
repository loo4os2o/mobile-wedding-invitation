import React from 'react';
import "@/components/opening.css";
import LastPhoto from "@/assets/images/lastPhoto.jpg";

const CoupleDay: React.FC = () => {
    // 시작 날짜
    const startDate = new Date('2020-12-19');
    // 현재 날짜
    const currentDate = new Date();

    // *일 계산
    // 두 날짜 간의 차이 계산 (밀리초 단위)
    // const timeDifference = currentDate.getTime() - startDate.getTime();
    // 밀리초를 일로 변환
    // const daysCount = Math.floor(timeDifference / (1000 * 3600 * 24));

    // *년/월/일 계산
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    // 월이 음수일 경우 조정
    if (days < 0) {
      months--;
      const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      days += lastMonth.getDate(); // 이전 달의 일 수를 더함
    }

    // 월이 음수일 경우 조정
    if (months < 0) {
      years--;
      months += 12; // 12개월을 더함
    }

    return (
      <div className='d-day'>
        {/* <h1>2020년 12월 19일부터 {daysCount}일이 지났습니다.</h1> */}
        <h1>“ {years}년 {months}개월 {days}일이 지났습니다. ”</h1>
        {/* ※ 3/30일 기준 -> 4년 3개월 11일 */}

        <div className='img-wrap'>
          <img src={LastPhoto} alt="마지막 사진" />
        </div>

        <h2>행복하게 잘 살겠습니다 👩‍❤️‍👨</h2>
      </div>
    );
};

export default CoupleDay;