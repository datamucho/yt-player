import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SearchButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: blue;
  color: white;
  border: none;
`;

const VideoList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
`;

const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  p {
    padding: 10px;
    margin: 0;
    background-color: #fff;
  }
`;

export { SearchContainer, SearchInput, SearchButton, VideoList, VideoItem };
