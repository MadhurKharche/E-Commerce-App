import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  z-index: 3;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  background-color: #f5fbfd;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  display: flex;
  background-color: gray;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export default function Product({ item }) {
  return (
    <Container>
      <Circle>
        <Image src={item.img}></Image>
      </Circle>
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
}
