import React from "react";
import styled from "styled-components";
import { categoriesList } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  margin: 20px 0;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

export default function Categories() {
  return (
    <Container>
      {categoriesList.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}
