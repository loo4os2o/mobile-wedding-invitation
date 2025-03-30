import React, { ForwardedRef, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import "@/components/opening.css";

const StyledWrapper = styled.section<{ padding?: string }>`
  // padding: 60px 0;
  padding: ${({ padding }) => padding ?? '20px 0'};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #222;
  width: 100%;
  // height: 100vh;
  box-sizing: border-box;
  // border: 1px solid blue;

  /* 초기 상태에서 투명하게 설정 */
  opacity: 0;
  /* 아래에서 올라오는 효과 */
  transform: translateY(120px);
  transition: opacity 2.5s ease, transform 2.5s ease;

   &.fade-in {
    /* 보일 때 불투명하게 설정 */
    opacity: 1; 
    /* 원래 위치로 이동 */
    transform: translateY(0); 
  }

   &.fade-out {
    /* 사라질 때 불투명하게 설정 */
    opacity: 0; 
    /* 아래로 이동 */
    transform: translateY(40px); 
  }
`;

// eslint-disable-next-line react/display-name
const Wrapper = React.forwardRef<HTMLDivElement, React.PropsWithChildren<{ padding?: string }>>(
  ({ children, padding }, ref: ForwardedRef<HTMLDivElement>) => {
    const [isVisible, setIsVisible] = useState(false);
    const localRef = useRef<HTMLDivElement>(null); // 로컬 ref 생성

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // 요소가 보일 때
          } else {
            setIsVisible(false); // 요소가 보이지 않을 때
          }
        },
        { threshold: 0.1 } // 10%가 보일 때 트리거
      );

      // ref가 객체이고 current 속성이 있는 경우 사용
      const currentRef = (ref && typeof ref === 'object' && 'current' in ref) ? ref : localRef; 

      if (currentRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        observer.observe(currentRef.current);
      }

      return () => {
        if (currentRef.current) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          observer.unobserve(currentRef.current);
        }
      };
    }, [ref]);

    return (
      <StyledWrapper 
        ref={ref ? ref : localRef} 
        padding={padding} 
        className={isVisible ? 'fade-in' : 'fade-out'}
      >
        {children}
      </StyledWrapper>
    );
  }
);

export default Wrapper;