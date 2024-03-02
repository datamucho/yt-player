import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
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
  margin-top: 20px;
`;

const VideoDescription = styled.p`
  margin-top: 10px;
`;

// export { Container, VideoWrapper, VideoIframe, VideoTitle, VideoDescription };

const OtherVideo = styled.div`
  width: 100%;
  display: flex;
`;

const OtherVideoIframe = styled.iframe`
  height: 200px;
`;

const OtherVideoWrapper = styled.div`
  margin-left: 20px;
  height: 600px;
  flex: 1;
  background-color: lightgray;
  overflow-y: scroll;
`;

const OtherVideoTitle = styled.h2`
  margin-top: 4px;
  font-size: 16px;
`;

const OtherVideoDescription = styled.p`
  margin-top: 4px;
`;

export {
  Container,
  VideoWrapper,
  VideoIframe,
  VideoTitle,
  VideoDescription,
  OtherVideoWrapper,
  OtherVideo,
  OtherVideoIframe,
  OtherVideoTitle,
  OtherVideoDescription,
};
