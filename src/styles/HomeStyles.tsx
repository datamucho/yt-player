import styled, { css } from "styled-components";

const buttonAndInputStyles = css`
  padding: 12px 15px;
  border-radius: 8px;
  border: 2px solid #ddd;
  font-size: 16px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SearchInput = styled.input`
  ${buttonAndInputStyles}
  margin-right: 12px;
  width: 320px;
  &:focus {
    border-color: #aaa;
    outline: none;
  }
`;

const SearchButton = styled.button`
  ${buttonAndInputStyles}
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  &:hover {
    background-color: #0056b3;
  }
`;

const VideoList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  padding: 25px;
  justify-items: center;
`;

const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  p {
    padding: 12px;
    margin: 0;
    background-color: #f8f9fa;
    border-top: 1px solid #eee;
  }
`;

export { SearchContainer, SearchInput, SearchButton, VideoList, VideoItem };
