/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface VideosContextType {
  videos: any[];
  setVideos: any;
  loading: boolean;
  setLoading: any;
  searchTerm: string;
  setSearchTerm: any;
}

export const VideosContext = createContext<VideosContextType>({
  videos: [],
  setVideos: null,
  loading: false,
  setLoading: null,
  searchTerm: "cat",
  setSearchTerm: null,
});

export const VideosContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <VideosContext.Provider
      value={{
        videos,
        setVideos,
        loading,
        setLoading,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
