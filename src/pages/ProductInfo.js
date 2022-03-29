import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getDoc, doc } from "firebase/firestore";
import fireDB from "../fireConfig";
import { useParams } from "react-router";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const ProductInfo = () => {
  const [product, setProduct] = useState();

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  });

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  async function getData() {
    try {
      const productTemp = await getDoc(
        doc(fireDB, "products", params.productid)
      );
      setProduct(productTemp.data());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      {product && (
        <Wrapper>
          <ImgContainer>
            <Image src={product.image} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.name}</Title>
            <Desc>{product.description}</Desc>
            <Price>$ {product.price}</Price>

            <AddContainer>
              <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}
    </Layout>
  );
};

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  margin-top: 100px;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  padding-top: 50px;
  width: 50%;

  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  padding-left: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: #6cc3bd;
  border: solid #6cc3bd 1px;
  padding: 10px;
  width: 150px;
  border-radius: 50px;
  transition: all 1s ease;

  &:hover {
    background-color: #71797e;
    color: white;
  }
`;

export default ProductInfo;
