// import { useState } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
// import Host from '../Contact/Host.tsx';
// import RoundButton from '@/components/RoundButton.tsx';
import CalendarImage from '@/assets/images/03. 19 Calendar.jpg';
import { Caption2 } from '@/components/Text.tsx';
import Calendar from '@/layout/Invitation/Calendar.tsx';

const Invitation = () => {
  const { greeting } = data;

  return (
    <InvitationWrapper>
      {/* <Paragraph>{greeting.message}</Paragraph> */}
      {/* <Host /> */}
      <Caption2 textAlign={'center'}>{greeting.eventDetail}</Caption2>

      <div className='calendar-wrap'>
        <div className='img-wrap'>
          <img src={CalendarImage} alt='달력용 이미지' />
        </div>
        <Calendar />
      </div>


      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      {/* <RoundButton
        target="_blank"
        href=""
        rel="noreferrer">
        구글 캘린더 추가하기
      </RoundButton> */}
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
