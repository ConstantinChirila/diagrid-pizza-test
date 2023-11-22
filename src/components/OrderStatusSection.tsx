import { PIZZA_TOPPINGS } from "@/constants";
import {
  colorLabel,
  generateDeliveryProgress,
  generateMessage,
  generateMiles,
  generateProgress,
} from "@/utils";
import { Fragment, useState } from "react";
import { useSubscription } from "react-stomp-hooks";
import { ProgressBar } from "./ProgressBar";

export function OrderStatusSection({ orderDetails, reset }) {
  const [message, setMessage] = useState("Order awaiting confirmation");
  const [progress, setProgress] = useState(0);
  const [showDelivery, setShowDelivery] = useState(false);
  const [oderComplete, setOrderComplete] = useState(false);
  const [miles, setMiles] = useState(0);

  useSubscription("/topic/events", (message) => {
    if (message?.body) {
      const body = JSON.parse(message.body);
      setMessage(generateMessage(body.type));
      if (body.type === "order-on-its-way") {
        setShowDelivery(true);
        const miles = generateMiles(body.message);
        setMiles(miles);
        setProgress(generateDeliveryProgress(miles));
        return;
      }
      if (body.type === "order-completed") {
        setProgress(100);
        setOrderComplete(true);
        setMiles(0);
        return;
      }

      setProgress(generateProgress(body.type));
    }
  });

  return (
    <div className="pl-6 pt-20">
      <h1 className="text-4xl font-bold drop-shadow pb-6">Your Order</h1>
      <p className="text-2xl pb-2">{orderDetails.name}</p>
      <p className="text-2xl pb-2">{orderDetails.email}</p>
      <p className="text-2xl">{orderDetails.address}</p>
      <div
        className="max-w-lg px-6 py-4 rounded-2xl text-2xl leading-10 mt-6 shadow-xl"
        style={{
          background: "rgba(125, 0, 100, 0.1)",
        }}
      >
        {orderDetails.toppings.map((topping, index) => {
          const name = colorLabel(
            topping,
            PIZZA_TOPPINGS.find((t) => t.id === topping).name
          );
          return (
            <Fragment key={topping}>
              {name}
              {index === orderDetails.toppings.length - 1 ? "" : ","} &nbsp;
            </Fragment>
          );
        })}
      </div>
      <h1 className="text-5xl font-bold drop-shadow pb-14 text-center pt-28 ">
        {message}...
      </h1>{" "}
      {!showDelivery && (
        <>
          <div className="flex justify-between gap-2">
            <img
              src="/pizza-stand.jpg"
              alt=""
              style={{ marginLeft: "-20px" }}
            />
            <img src="/pizza-oven.jpg" alt="" />
            <img src="/delivery-van.jpg" alt="" />
          </div>
          <ProgressBar percentage={progress} />
        </>
      )}
      {showDelivery && (
        <div className="relative">
          <div className="relative h-[253px]">
            <img
              src="/delivery-van.jpg"
              alt=""
              className="absolute top-0"
              style={{
                left: `${progress < 81 ? progress - 15 : 75}%`,
                transition: "all 1s ease-in-out",
              }}
            />

            <img
              src="/pizza-success-small.jpg"
              alt=""
              className="absolute top-0"
              style={{
                left: "50%",
                opacity: oderComplete ? 1 : 0,
                transform: "translateX(-50%)",
                transition: "all 0.5s ease-in-out",
                transitionDelay: "0.7s",
              }}
            />
          </div>
          <ProgressBar percentage={progress} />
          <div
            className="absolute bg-white rounded-full px-4 py-2 text-xl text-slate-900"
            style={{
              bottom: "-60px",
              left: `${oderComplete ? 82 : progress - 9}%`,
              transition: "all 1s ease-in-out",
            }}
          >
            {oderComplete ? "Delivered" : `${miles} miles away`}
          </div>
        </div>
      )}
      {oderComplete && (
        <button
          className="text-2xl text-black uppercase py-4 px-8 min-w-[30rem] my-24 mx-auto block tracking-widest"
          onClick={reset}
        >
          Make a new order
        </button>
      )}
    </div>
  );
}
