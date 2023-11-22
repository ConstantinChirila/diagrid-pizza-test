import { Layout } from "@/components/Layout";
import { OrderForm } from "@/components/OrderForm";
import { OrderStatusSection } from "@/components/OrderStatusSection";
import { useState } from "react";

export function Home() {
  const [orderSent, setOrderSent] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});

  const handleSubmit = (values) => {
    setOrderSent(true);
    setOrderDetails(values);
    fetch("http://localhost:8080/order", {
      method: "POST",
      body: JSON.stringify({
        customer: {
          name: values.name,
          email: values.email,
          address: values.address,
        },
        items: [
          {
            type: "pepperoni",
          },
        ],
        // items: values.toppings.map((topping) => ({
        //   type: topping,
        //   amount: 1,
        // })),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const handleReset = () => {
    setOrderSent(false);
    setOrderDetails({});
  };

  return (
    <Layout>
      <div
        className={
          orderSent
            ? "bg-[url('/header-order-status.jpg')]  bg-right-top bg-no-repeat py-4 "
            : "bg-[url('/header-initial.jpg')]  bg-right-top bg-no-repeat py-4"
        }
      >
        <img src="/logo.jpg" alt="Catalyst Pizza" />
        {orderSent ? (
          <OrderStatusSection orderDetails={orderDetails} reset={handleReset} />
        ) : (
          <OrderForm onSubmit={handleSubmit} />
        )}
      </div>
    </Layout>
  );
}
