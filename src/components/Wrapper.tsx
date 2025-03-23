/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import styled from '@emotion/styled';
import styled, { keyframes } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100%{
    opacity: 1;
    transform: translateX(0%);
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const Wrapper = styled.section`
  // padding: 60px 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #222;
  width: 100%;
  // height: 100vh;
  box-sizing: border-box;
  // border: 1px solid blue;

  &.frame-in {
    animation: ${frameInAnimation} 2s forwards;
  }
`;

// const Wrapper = styled.section`
//   // padding: 30px 30px;
//   padding: 60px 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: #222;
//   width: 100%;
//   max-width: 100%;
//   box-sizing: border-box;
// `;

export default Wrapper;
