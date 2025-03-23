import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import PhotoGallery from './PhotoGallery.tsx';
import preVideo from '@/assets/video/preVideo.mp4';
import { Heading1 } from '@/components/Text.tsx';

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
    
    if (galleryRef.current) {
      const elementPosition = galleryRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 120;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <ContentsWrap>
        <div ref={galleryRef}>
          <ImageMoreWrap isMoreView={isMoreView}>
            {!isMoreView && <WhiteGradientOverlay />}
            <PhotoGallery />
          </ImageMoreWrap>
          {/* {!isMoreView && (
            <PlusButton onClick={onClickImageMoreViewButton}>더보기</PlusButton>
          )} */}
          <PlusButton onClick={onClickImageMoreViewButton}>
            {isMoreView ? '접기' : '더보기'}
          </PlusButton>
        </div>
      </ContentsWrap>
        
      {/* 동영상 */}
      <div style={{ margin: "30px 0 40px 0" }}>
        <Heading1 className='pb-20'>Movie</Heading1>
        <video width="100%" controls>
          <source src={preVideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default GalleryWrap;

const ContentsWrap = styled.div`
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageMoreWrap = styled.div<{ isMoreView: boolean }>`
  position: relative;
  max-height: ${(props) =>
    props.isMoreView
      ? ''
      : '60vh'}; /* isMoreView 상태가 true일 때는 높이 제한 없이, false일 때는 195px로 작게 보이도록 */
  overflow: hidden;
`;

const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 255, 255) 90%
  );
`;

const PlusButton = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 6px 12px;
  font-size: 1rem;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
`;
