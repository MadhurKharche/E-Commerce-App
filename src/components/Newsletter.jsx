import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px" })}
`;

const Subheading = styled.div`
  font-size: 24px;
  font-weight: 200;
  letter-spacing: 1px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  ${mobile({ textAlign: "center", fontSize: "16px" })}
`;

const InputContainer = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  justify-content: space-between;
  border: 1px solid gray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  flex: 8;
  padding-left: 20px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
`;

export default function Newsletter() {
  return (
    <Container>
      <Heading>NEWSLETTER</Heading>
      <Subheading>GET TIMELY UPDATES FROM YOUR FAVOURITE PRODUCTS</Subheading>
      <InputContainer>
        <Input placeholder="YOUR EMAIL"></Input>
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
}
