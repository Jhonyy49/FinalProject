import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Storm Technologie</Logo>
        <Description>
          Storm Technologie is an enchanting and easy to use e-Commerce WP theme
          that allows you to sell your products in a dynamic way.
        </Description>
        <SocialContainer>
          <SocialIcon></SocialIcon>
          <SocialIcon></SocialIcon>
          <SocialIcon></SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>UseFul Link</Title>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/cart">About Us</Link>
          </ListItem>
          <ListItem>
            <Link to="/orders">Your Orders</Link>
          </ListItem>
          <ListItem>
            <Link to="/cart">Your Cart</Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactContainer>
          <ContactItem>
            <Link to="/" style={{ textDecoration: "none" }}>
              <BsFacebook /> <Social>Facebook</Social>
            </Link>
          </ContactItem>
          <ContactItem>
            <Link to="/" style={{ textDecoration: "none", color: "#C13584" }}>
              <AiFillInstagram /> <Social>Instagram</Social>
            </Link>
          </ContactItem>
          <ContactItem>
            <Link to="/" style={{ textDecoration: "none", color: "#1DA1F2" }}>
              <AiFillTwitterCircle /> <Social>Twitter</Social>
            </Link>
          </ContactItem>
        </ContactContainer>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: #e2ebec;
`;

const Logo = styled.h3``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  padding-top: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Social = styled.h6`
  padding-left: 10px;
  padding-top: 2px;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export default Footer;
