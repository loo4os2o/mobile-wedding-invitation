import React from 'react';

const Calendar: React.FC = () => {
    const year = 2025; // 원하는 연도
    const month = 6; // 6월
    const targetDate = new Date(year, month - 1, 21); // 6월 21일
    const today = new Date();
    
    // D-Day 계산
    const timeDiff = targetDate.getTime() - today.getTime();
    const dDay = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // 달력 생성
    const createCalendar = () => {
        const daysInMonth = new Date(year, month, 0).getDate();
        const firstDay = new Date(year, month - 1, 1).getDay();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const calendar: (string | null)[] = new Array(42).fill(null);

        for (let i = 1; i <= daysInMonth; i++) {
            calendar[firstDay + i - 1] = i.toString();
        }

        return calendar;
    };

    const calendar = createCalendar();

    return (
      <div className='calendar'>
        <h1>{year}년 {month}월</h1>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(7, 1fr)', 
          gap: '10px',
          borderTop: '2px solid #152d56',
          borderBottom: '2px solid #152d56',
          padding: '20px 0',
        }}>
            {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
              <div key={day} 
                style={{
                  marginBottom: '4px',
                }}>{day}</div>
            ))}
            {calendar.map((day, index) => (
              day !== null && (
                <div key={index} 
                  style={{ 
                    // padding: '8px 10px', 
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: (day === targetDate.getDate().toString() && month === targetDate.getMonth() + 1) ? '1px solid #fe87b1' : '1px dashed #ddd', 
                    borderRadius: '50%',
                    textAlign: 'center',
                    backgroundColor: (day === targetDate.getDate().toString() && month === targetDate.getMonth() + 1) ? '#fe87b1' : 'transparent',
                    color: (day === targetDate.getDate().toString() && month === targetDate.getMonth() + 1) ? 'white' : '#152d56',
                    fontFamily: (day === targetDate.getDate().toString() && month === targetDate.getMonth() + 1) ? "SUIT-Bold" : "",
                  }}>
                    {day}
                </div>
              )
            ))}
        </div>

        <h2>D-Day<span>{dDay}</span>일 남았습니다.</h2>
      </div>
    );
};

export default Calendar;