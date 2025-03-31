import styled from '@emotion/styled';
import data from 'data.json';
import Thanks from '@/assets/images/thanks.jpg';
import Wreath from '@/assets/images/wreath.jpg';
import { Caption, PointTitle } from '@/components/Text.tsx';
import { ILocationInfo } from '@/types/data.ts';

const Address = () => {
  const { locationInfo } = data;
  return (
    <>
      <WayWrapper>
        {locationInfo?.map((item: ILocationInfo) => {
          const { title, desc, desc2, desc3 } = item;
          return (
            <Way key={title}>
              <PointTitle>
                <div className='flex-row align-start'>
                  <span>{"\uD83D\uDCCD"}</span>
                  <div className='pl-4'>{title}</div>
                </div>
                {/* {title} */}
              </PointTitle>
              <Caption>
                {desc && (
                  <div className='flex-row align-start lh-180'>
                    <span>{"\uD83D\uDC49\uD83C\uDFFB"}</span>
                    <div className='pl-4'>{desc}</div>
                  </div>
                )}
                {desc2 && (
                  <div className='flex-row align-start lh-180'>
                    <span>{"\uD83D\uDC49\uD83C\uDFFB"}</span>
                    <div className='pl-4'>{desc2}</div>
                  </div>
                )}
                {desc3 && (
                  <div className='flex-row align-start lh-180'>
                    <span>{"\uD83D\uDC49\uD83C\uDFFB"}</span>
                    <div className='pl-4'>{desc3}</div>
                  </div>
                )}
              </Caption>
            </Way>
          );
        })}
      </WayWrapper>

      {/* 화환 */}
      <div className='wreath'>
        <img src={Wreath} alt='화환 이미지' className='wreath-img' />
        <div>환경보호 동참을 위해<br/> 화환은 정중히 사양하겠습니다.</div>
      </div>
      <div className='thanks-wrap'>
        <img src={Thanks} alt='감사합니다 이미지' className='thanks' />
      </div>
    </>
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px 0px;
  gap: 20px;
  // border: 1px solid red;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
