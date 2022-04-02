import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
const CarouselDisplay = () => {
  return (
    <div>
      <Carousel
        fade
        style={{
          paddingTop: "30px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/8066714/pexels-photo-8066714.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
            style={{ height: "950px" }}
          />
          <Carousel.Caption style={{ color: "black", paddingTop: "30px" }}>
            <Title>iPhones</Title>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Second slide"
            style={{ height: "950px" }}
          />

          <Carousel.Caption style={{ color: "black", paddingTop: "30px" }}>
            <Title>MacBooks</Title>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/331684/pexels-photo-331684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
            style={{ height: "950px" }}
          />

          <Carousel.Caption style={{ color: "black", paddingTop: "30px" }}>
            <Title>Laptops</Title>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

const Title = styled.h2`
  padding-top: 30px;
`;

export default CarouselDisplay;
