import React from "react";
import styled from "styled-components";

const Image = styled.img`
  opacity: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  flex: 1;
  position: relative;
  height: 70vh;
  margin: 5px;
  &:hover ${Image} {
    opacity: 0.8;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #f9e2af;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}
