import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Brand = styled.h1``;

const Desc = styled.h3`
  font-weight: 300;
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #${(props) => props.color};
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;

  &:hover {
    font-weight: bold;
    color: purple;
    cursor: pointer;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Icon = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Brand>Slipknot.</Brand>
        <Desc>
          One stop solution for all your fashion needs! Get exclusive offers on
          new arrivals.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Track Orders</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>CONTACT</Title>
        <ContactItem>
          <Icon>
            <RoomIcon />
          </Icon>
          Pune, India
        </ContactItem>
        <ContactItem>
          <Icon>
            <PhoneIcon />
          </Icon>
          +91 9689780401
        </ContactItem>
        <ContactItem>
          <Icon>
            <MailOutlineIcon />
          </Icon>
          madhurkharche@skipknot.com
        </ContactItem>
        <ContactItem></ContactItem>
      </Right>
    </Container>
  );
}
