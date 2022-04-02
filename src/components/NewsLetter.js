import React from "react";
import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";

const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>
        Get timely updates from your favorites products.
      </Description>
      <InputContainer>
        <Input placeholder="Your email..." />
        <Button>
          <AiOutlineSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 60vh;
  background-color: #e0d3ed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1000000px;
`;

const Title = styled.div`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 10px;
`;
const Button = styled.button`
  flex: 2;
  border: none;
`;

export default NewsLetter;
