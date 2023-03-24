import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Center = styled.div``;
const Right = styled.div``;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  border: 1px solid lightgrey;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

function Navbar() {
  return (
    <Container className="navbar">
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon />
          </SearchContainer>
        </Left>

        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
