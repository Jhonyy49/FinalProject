import React from "react";
import styled from "styled-components";

const FreeShipping = () => {
  return (
    <Wrapper>
      <Item>
        <h3>Free Shipping </h3>
        <Paragraph>Free shipping on all Local Area order above 200</Paragraph>
      </Item>
      <Item>
        <h3>30 Days Return </h3>
        <Paragraph>Product any fault within 30 days for an exchange</Paragraph>
      </Item>
      <Item>
        <h3>24/7 Support </h3>
        <Paragraph>
          Our friendly support team is available to help 24/7
        </Paragraph>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  padding: 1em;
  margin: 1em;
  background-color: #e2ebec;
  align-items: center;
  justify-content: center;
`;

const Paragraph = styled.p`
  color: gray;
`;
export default FreeShipping;
