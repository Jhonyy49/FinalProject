import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import fireDB from "../fireConfig";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setLoading(true);
      const result = await getDocs(collection(fireDB, "orders"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false);
      });
      console.log(ordersArray);
      setOrders(ordersArray);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <Layout loading={loading}>
      {orders.map((order) => (
        <table className="table mt-2 order">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {order.cartItems.map((item) => (
              <tr>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    height="80"
                    width="80"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </Layout>
  );
}

export default OrdersPage;
