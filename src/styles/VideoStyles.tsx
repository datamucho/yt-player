import styled, { css } from "styled-components";

const sharedMarginTop = css`
  margin-top: 24px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 30px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-color: #000;
  overflow: hidden;
  border-radius: 8px;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const VideoTitle = styled.h2`
  ${sharedMarginTop}
  font-size: 22px;
  color: #333;
`;

const VideoDescription = styled.p`
  ${sharedMarginTop}
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

export { Container, VideoWrapper, VideoIframe, VideoTitle, VideoDescription };
