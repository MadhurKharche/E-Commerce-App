import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: teal;
  color: white;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
`;

export default function Announcement() {
  return <Container>HURRY UP!! 30% OFF ON FASHION WEAR </Container>;
}
