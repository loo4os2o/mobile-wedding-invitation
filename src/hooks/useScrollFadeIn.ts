// import { useCallback, useEffect, useRef } from 'react';

// interface UseScrollFadeInProps {
//   rootMarginValue: string;
// }

// export default function useScrollFadeIn({ rootMarginValue }: UseScrollFadeInProps) {
//   const dom = useRef<HTMLDivElement | null>(null);

//   const handleScroll = useCallback(([entry]: IntersectionObserverEntry[]) => {
//     const { current } = dom;
//     console.log("entry : ", entry);
//     if (current) {
//       if (entry.isIntersecting) {
//         current.style.transitionProperty = 'opacity transform';
//         current.style.transitionDuration = '1.5s';
//         current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
//         current.style.transitionDelay = '0s';
//         current.style.opacity = '1';
//         current.style.transform = 'translate3d(0, 0, 0)';
//       } else {
//         current.style.opacity = '0';
//         current.style.transform = 'translate3d(0, 10%, 0)';
//       }
//     }
//   }, []);

//   useEffect(() => {
//     let observer: IntersectionObserver | null = null;
//     const { current } = dom;

//     if (current) {
//       observer = new IntersectionObserver(handleScroll, {
//         threshold: 1,
//         rootMargin: rootMarginValue,
//       });
//       observer.observe(current);

//       // 초기 스크롤 위치 체크
//       const checkInitialVisibility = () => {
//         const rect = current.getBoundingClientRect();
//         const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

//         // IntersectionObserverEntry 객체를 생성
//         const entry: IntersectionObserverEntry = {
//           boundingClientRect: rect,
//           intersectionRect: isVisible ? rect : new DOMRect(),
//           intersectionRatio: isVisible ? 1 : 0,
//           isIntersecting: isVisible,
//           rootBounds: new DOMRect(0, 0, window.innerWidth, window.innerHeight),
//           target: current,
//           time: Date.now(),
//         };

//         handleScroll([entry]);
//       };

//       checkInitialVisibility(); // 컴포넌트가 마운트될 때 초기 체크

//       // 첫 마운트 시 handleScroll 호출
//       const initialEntry: IntersectionObserverEntry = {
//         boundingClientRect: current.getBoundingClientRect(),
//         intersectionRect: current.getBoundingClientRect(),
//         intersectionRatio: 1,
//         isIntersecting: true,
//         rootBounds: new DOMRect(0, 0, window.innerWidth, window.innerHeight),
//         target: current,
//         time: Date.now(),
//       };
//       handleScroll([initialEntry]); // 첫 마운트 시 호출

//       return () => {
//         if (observer) {
//           observer.disconnect();
//         }
//       };
//     }
//   }, [handleScroll, rootMarginValue]);

//   return {
//     ref: dom,
//     style: {
//       opacity: 1,
//       transform: 'translate3d(0, 0%, 0)',
//     },
//   };
// }