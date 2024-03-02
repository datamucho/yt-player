import styled from "styled-components";
// import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: #cc0000; /* Darker shade for a more refined look */
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
`;

const Logo = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  cursor: pointer;
`;

const SearchBar = styled.input`
  flex: 1;
  margin: 0 20px;
  padding: 8px 16px;
  font-size: 1rem;
  border: 2px solid #f0f0f0;
  border-radius: 20px; /* Rounded borders for the search bar */
  outline: none;
  max-width: 600px; /* Prevents the search bar from becoming too wide */
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  color: white;
  margin-left: 20px;
  cursor: pointer;
  font-size: 1rem;
`;

export { Nav, Logo, SearchBar, NavItems, NavItem };
