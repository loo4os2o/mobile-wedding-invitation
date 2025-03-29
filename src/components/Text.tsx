import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 1.5rem;
  margin: 10px;
  color: #e88ca6;
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  // font-family: HSSanTokki20-Regular, serif;
  font-family: "NoonnuBasicGothicRegular";
  font-size: 18px;
  line-height: 1;
  margin: 0;
  color: #e88ca6;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  line-height: 2.2rem;
  white-space: pre-line;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-size: 16px;
  font-weight: 200;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
`;

export const Caption2 = styled.p<{ textAlign?: string }>`
  font-family: "NEXON Lv1 Gothic OTF", serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 200%;
  color: #4f4f4f;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
`;
