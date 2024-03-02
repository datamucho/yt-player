import {
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
} from "../styles";

import { useNavigate, useParams } from "react-router-dom";
import { VideoDetailsType, videoType } from "../types";
import { useQuery } from "@tanstack/react-query";
import getVideos from "../services/getVideos";
import Loading from "../components/Loading";
import getVideoDetails from "../services/getVideoDetails";
import Search from "../components/Search";

const VideoDetailsPage = () => {
  const { videoId, searchTerm } = useParams();
  const navigate = useNavigate();
  const { data: videoDetails, isLoading: videoDetailsLoading } = useQuery({
    queryKey: ["videoDetails", videoId],
    queryFn: () => getVideoDetails(videoId!),
    enabled: videoId !== "",
  });
  // get videos from cache
  const { data: videos, isLoading } = useQuery({
    queryKey: [`videos${searchTerm}`],
    queryFn: () => getVideos(searchTerm || ""),
    enabled: searchTerm !== "",
  });

  const otherVideos = videos?.filter(
    (video: videoType) => video.id !== videoId
  );

  const handleSearch = (term: string) => {
    navigate(`/${term}`);
  };

  return (
    <>
      <Container>
        <Search handleSearch={handleSearch} />
        <Loading isLoading={videoDetailsLoading}>
          <VideoWrapper>
            <VideoIframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={videoDetails.title}
              allowFullScreen
            ></VideoIframe>
          </VideoWrapper>
          <VideoTitle>{videoDetails.title}</VideoTitle>
          <VideoDescription>{videoDetails.description}</VideoDescription>
        </Loading>
        <Loading isLoading={isLoading}>
          <OtherVideoWrapper>
            <h2>Other videos</h2>
            {otherVideos?.map((video: VideoDetailsType) => (
              <OtherVideo>
                <OtherVideoIframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                ></OtherVideoIframe>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 15,
                  }}
                >
                  <OtherVideoTitle>{video.title}</OtherVideoTitle>
                  <OtherVideoDescription>
                    {video.description}
                  </OtherVideoDescription>
                </div>
              </OtherVideo>
            ))}
          </OtherVideoWrapper>
        </Loading>
      </Container>
    </>
  );
};

export default VideoDetailsPage;
