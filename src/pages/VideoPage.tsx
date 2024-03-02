import {
  Container,
  VideoWrapper,
  VideoIframe,
  VideoTitle,
  VideoDescription,
} from "../styles";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getVideoDetails from "../services/getVideoDetails";
import HomePage from "./HomePage";

const VideoDetailsPage = () => {
  const { videoId } = useParams();
  const { data: videoDetails } = useQuery({
    queryKey: ["videoDetails", videoId],
    queryFn: () => getVideoDetails(videoId!),
    enabled: videoId !== "",
  });

  return (
    <>
      <Container>
        {videoDetails && (
          <>
            <VideoWrapper>
              <VideoIframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={videoDetails.title}
                allowFullScreen
              ></VideoIframe>
            </VideoWrapper>
            <VideoTitle>{videoDetails.title}</VideoTitle>
            <VideoDescription>{videoDetails.description}</VideoDescription>
          </>
        )}
      </Container>
      <HomePage />
    </>
  );
};

export default VideoDetailsPage;
