import React from "react";
import styled from "styled-components";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: teal;
  color: white;
  justify-content: space-between;
`;

const FakeLeftItem = styled.div`
  flex: 1;
  visibility: hidden;
`;

const AnnouncementText = styled.div`
  flex: 1;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;
`;

const Cancel = styled.div`
  flex: 1;
  right: 10px;
  cursor: pointer;
  text-align: end;
`;

export default function Announcement({ render }) {
  return (
    <Container>
      <FakeLeftItem>Baklol</FakeLeftItem>
      <AnnouncementText>HURRY UP!! 30% OFF ON FASHION WEAR</AnnouncementText>
      <Cancel onClick={render}>
        <CancelOutlinedIcon style={{ fontSize: 20 }} />
      </Cancel>
    </Container>
  );
}
