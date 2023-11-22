import { useState } from "react";
import { CustomCheckbox } from "./CustomCheckbox";
import { PIZZA_TOPPINGS } from "@/constants";
import { colorLabel } from "@/utils";

export function OrderForm({ onSubmit }) {
  const [inputValues, setInputValues] = useState({});
  const [toppings, setToppings] = useState({});

  const handleToppings = (name: string, value: boolean) => {
    setToppings({ ...toppings, [name]: value });
  };

  const handleValues = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = () => {
    const toppingsArray = Object.keys(toppings).filter((key) => toppings[key]);
    onSubmit({ ...inputValues, toppings: toppingsArray });
  };

  return (
    <div className="pl-6 pt-20">
      <h1 className="text-4xl font-bold drop-shadow pb-6">Create your order</h1>
      <div className="grid grid-cols-2 gap-2" style={{ maxWidth: "38rem" }}>
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            value={inputValues["name"] ?? ""}
            onChange={handleValues}
            type="text"
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="text"
            value={inputValues["email"] ?? ""}
            onChange={handleValues}
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            type="text"
            value={inputValues["address"] ?? ""}
            onChange={handleValues}
          />
        </div>
        <div>
          <Label htmlFor="credit">Credit card number</Label>
          <Input
            id="credit"
            name="credit"
            type="text"
            value={inputValues["credit"] ?? ""}
            onChange={handleValues}
          />
        </div>
      </div>
      <br />
      <Label>Select your toppings</Label>
      <div className="grid grid-cols-3 gap-2">
        {PIZZA_TOPPINGS.map(({ id, name }) => (
          <CustomCheckbox
            key={id}
            value={toppings[id]}
            onChange={handleToppings}
            name={id}
          >
            {colorLabel(id, name)}
          </CustomCheckbox>
        ))}
      </div>
      <button
        className=" text-2xl text-black uppercase py-4 px-8 min-w-[40rem] my-24 mx-auto block tracking-widest"
        onClick={handleSubmit}
      >
        Lets DEPLOY YOUR PIZZA!
      </button>
    </div>
  );
}

function Label(props) {
  return (
    <label
      className="text-base font-bold drop-shadow-sm uppercase tracking-wider"
      {...props}
    />
  );
}

function Input(props) {
  return (
    <input
      className="w-full block my-2 border-6 border-color  text-inputText text-xl py-3 px-4 mb-6 transition ease-in-out duration-500
       focus:border-fuchsia-300 focus:drop-shadow-xl "
      style={{
        width: "17rem",
        borderBottomLeftRadius: "80rem",
        borderTopRightRadius: "100rem",
        borderBottomRightRadius: "100rem",
        outline: 0,
      }}
      {...props}
    />
  );
}
