import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
  background-color: #f0f0f0;
  color: #3c486b;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

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
  background: transparent;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const MenuItem = styled.div`
  margin-right: 25px;
`;

function Navbar() {
  return (
    <Container className="navbar">
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "black", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>Slipknot.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
