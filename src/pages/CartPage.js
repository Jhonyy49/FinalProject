import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { FaTrash } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import fireDB from "../fireConfig";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + cartItem.price;
    });
    setTotalAmount(temp);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };

  const placeOrder = async () => {
    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
    };
    console.log(addressInfo);

    const orederInfo = {
      cartItems,
      addressInfo,
      email: JSON.parse(localStorage.getItem("currentUser")).user.email,
      userid: JSON.parse(localStorage.getItem("currentUser")).user.uid,
    };

    try {
      setLoading(true);
      const result = await addDoc(collection(fireDB, "orders"), orederInfo);
      setLoading(false);
      toast.success("Order placed successfully");
      handleClose();
      console.log(result);
    } catch (error) {
      toast.error("Order failed");
      setLoading(false);
    }
  };
  return (
    <Layout loading={loading}>
      <Wrapper>
        <Title>YOUR BASKET</Title>
        <Top>
          <TopButton>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              CONTINUE SHOPPING
            </Link>
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cartItems.map((item) => (
              <Product>
                <Image
                  src={item.image}
                  alt={item.name}
                  height="80"
                  width="80"
                />
                <Details>
                  <ProductName>{item.name}</ProductName>

                  <PriceDetail>
                    <ProductAmountContainer>
                      <ProductPrice>{item.price} Dt</ProductPrice>
                    </ProductAmountContainer>
                    <FaTrash
                      onClick={() => deleteFromCart(item)}
                      style={{ cursor: "pointer" }}
                    />
                  </PriceDetail>
                </Details>
                <Hr />
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemText>Total amount </SummaryItemText>
              <SummaryItemPrice>{totalAmount} Dt</SummaryItemPrice>
            </SummaryItem>
            <ButtonCheckout onClick={handleShow}>CHECKOUT NOW</ButtonCheckout>
          </Summary>
        </Bottom>
      </Wrapper>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your adress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login-form">
            <h2>Register</h2>
            <hr />
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <textarea
              type="text"
              className="form-control"
              placeholder="address"
              value={address}
              rows={3}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <input
              type="number"
              className="form-control"
              placeholder="pincode"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
              }}
            />
            <input
              type="number"
              className="form-control"
              placeholder="phone number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <hr />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={placeOrder}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

const ButtonCheckout = styled.button`
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

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  border: solid 1px gray;
  border-radius: 30px;
`;

const Image = styled.img`
  width: 240px;
  height: 200px;
  padding: 10px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  font-size: 25px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 20px;
`;

export default CartPage;
