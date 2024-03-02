import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VideoItem, VideoList } from "../styles";
import { videoType } from "../types";
import Loading from "../components/Loading";
import getVideos from "../services/getVideos";
import { useQuery } from "@tanstack/react-query";
import Search from "../components/Search";

const words = ["dog", "cat", "bird", "fish", "rabbit"];
const randomWord = words[Math.floor(Math.random() * words.length)];

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>(randomWord);
  const { data: videos, isLoading } = useQuery({
    queryKey: ["videos", searchTerm, randomWord],
    queryFn: () => getVideos(searchTerm),
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleVideoSelect = (videoId: string) => {
    navigate(`/video/${videoId}/${searchTerm}`);
  };

  return (
    <>
      <Search handleSearch={handleSearch} />
      <Loading isLoading={!!isLoading}>
        <VideoList>
          {(videos || []).map((video: videoType) => (
            <VideoItem
              key={video.id}
              onClick={() => handleVideoSelect(video.id)}
            >
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.title}</p>
            </VideoItem>
          ))}
        </VideoList>
      </Loading>
    </>
  );
};

export default HomePage;
