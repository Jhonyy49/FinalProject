import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { collection, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import CarouselDisplay from "../components/CarouselDisplay";
import styled from "styled-components";
import FreeShipping from "../components/FreeShipping";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const HomePage = () => {
  const [products, setProdutcs] = useState([]);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [filterType, setFilterType] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setLoading(true);
      const users = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };

        productsArray.push(obj);
        setLoading(false);
      });

      setProdutcs(productsArray);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div>
      <Layout loading={loading}>
        <CarouselDisplay />
        <Trending>Trending Products</Trending>
        <div className="container" style={{ paddingTop: "30px" }}>
          <div className="d-flex">
            <input
              type="text"
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
              className="form-control"
              placeholder="Seach..."
            />
            <select
              name=""
              id=""
              className="form-control"
              value={filterType}
              onChange={(e) => {
                setFilterType(e.target.value);
              }}
            >
              <option value="">All</option>
              <option value="laptop">Laptops</option>
              <option value="macbook">Macbooks</option>
              <option value="iphone">Iphones</option>
            </select>
          </div>
          <Container>
            {products
              .filter((obj) => obj.name.toLowerCase().includes(searchKey))
              .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .map((product) => {
                return (
                  <Content>
                    <div className="m-2 p-1">
                      <ProductWrapper>
                        <Image
                          src={product.image}
                          alt={product.id}
                          style={{ height: "150px" }}
                        />
                      </ProductWrapper>
                      <Category>{product.category}</Category>
                      <ProductTitle>{product.name}</ProductTitle>
                      <ProductPrice>{product.price} DT</ProductPrice>

                      <Button
                        className="mx-2"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart{" "}
                      </Button>
                      <Button
                        onClick={() => {
                          navigate(`/productinfo/${product.id}`);
                        }}
                      >
                        Quick View
                      </Button>
                    </div>
                  </Content>
                );
              })}
            <FreeShipping />
            <NewsLetter />
            <Footer />
          </Container>
        </div>
      </Layout>
    </div>
  );
};

const Trending = styled.h1`
  text-transform: uppercase;
  padding-top: 100px;
`;

const Image = styled.img`
  margin-top: 20px;
  transition: all 1s ease;
  &:hover {
    background-color: white;
    transform: scale(1.2);
  }
`;

const ProductWrapper = styled.div`
  height: 200px;
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
    background-color: #e2ebec;
    border: solid #e2ebec 1px;
    color: black;
  }
`;

const Category = styled.p`
  text-transform: capitalize;
  color: #36454f;
  padding-top: 10px;
`;

const ProductTitle = styled.p``;

const ProductPrice = styled.h5``;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 350px;
  min-width: 280px;
  align-items: center;
  gap: 30px 20px;
`;

const Content = styled.div`
  border: solid #b2beb5 0.2px;
  max-width: 500px;
`;
export default HomePage;
