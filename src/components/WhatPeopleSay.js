import React from "react";
import styled from "styled-components";

const WhatPeopleSay = () => {
  return (
    <Wrapper>
      <Title>We love what we do. Our clients tell us the same thing.</Title>
      <Item>
        <Comments>
          <h5 style={{ padding: "10px", width: "500px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
          </h5>
          <h5 style={{ padding: "10px", width: "500px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
          </h5>
        </Comments>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #d3d3d3;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 1864px;
  padding-left: 282px;
  padding-right: 282px;
`;

const Title = styled.h1`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Item = styled.div`
  padding: 50px;
`;
export default WhatPeopleSay;
