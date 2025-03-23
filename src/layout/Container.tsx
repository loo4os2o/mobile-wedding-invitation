import styled from '@emotion/styled';

const Container = styled.div`
  /* 테두리의 초기 값 설정 */
  // border: 30px solid transparent;
  // border: 1px solid red;
  
  /* 이미지 경로 설정 */
  // border-image-source: url('/background.png'); 
  
  /* 이미지의 크기 설정 */
  // border-image-slice: 30% 49%; 
  
  /* 테두리 이미지의 너비 설정 */
  // border-image-width: 280px; 
  
  background-color: #ffffff;
  // width: 85vw;
  width: 100vw;

  margin: 0 auto;
  
  // @media screen and (min-width: 500px) {
  //     width: 500px;
  // }
  @media screen and (min-width: 420px) {
      width: 420px;
  }
`;
export default Container;
