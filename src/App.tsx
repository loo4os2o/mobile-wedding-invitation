import { useEffect, useRef, useState } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import BackgroundMusic from "@/components/BackgroundMusic.tsx";
import CoupleDay from '@/components/CoupleDay.tsx';
import Opening from '@/components/Opening';
import Tabs from '@/components/Tabs';
import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
// import Guestbook from '@/layout/Guestbook/Guestbook.tsx';
import FullscreenModal from '@/layout/Interview/FullscreenModal.tsx';
import Interview from '@/layout/Interview/Interview.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import Main2 from '@/layout/Main/Main2.tsx';
import Main3 from '@/layout/Main/Main3.tsx';
import Main4 from '@/layout/Main/Main4.tsx';
import '@/components/opening.css';

function App() {
  const ncpClientId: string = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID as string;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const [showMainContent, setShowMainContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 10000); // 10초 후에 실행

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>

      <BackgroundMusic />

      <Opening />

      {/* 모달 */}
      <FullscreenModal isOpen={isModalOpen} onClose={closeModal} />

      {showMainContent && (
        <Container>
          <Wrapper>
            <Main />
          </Wrapper>

          <Wrapper>
            <Main2 />
          </Wrapper>

          <Wrapper>
            <Main3 />
          </Wrapper>

          <Wrapper>
            <Heading1>웨딩 인터뷰</Heading1>
            <Interview openModal={openModal} />
          </Wrapper>

          <Wrapper>
            <Heading1>예식 안내</Heading1>
            <Invitation />
          </Wrapper>

          <Wrapper ref={galleryRef}>
            <Heading1>Gallery</Heading1>
            <GalleryWrap />
          </Wrapper>

          <Wrapper>
            <Heading1>우리들의 시간</Heading1>
            <Main4 />
          </Wrapper>

          <Wrapper>
            <Tabs />
          </Wrapper>

          <Wrapper>
            <Heading1>오시는 길</Heading1>
            <Location />
          </Wrapper>

          <Wrapper>
            <Heading1>마음 전하실 곳</Heading1>
            <Account />
          </Wrapper>

          <Wrapper>
            <Heading1>함께한 시간</Heading1>
            <CoupleDay />
            {/* <Guestbook /> */}
          </Wrapper>

          <FloatingBar isVisible={isVisible} />
        </Container>
      )}
    </NavermapsProvider>
  );
}

export default App;
