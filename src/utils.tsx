export function colorLabel(id, name) {
  if (id === "daprcheese") {
    return (
      <>
        <span
          style={{
            color: "#12218C",
          }}
        >
          Dapr
        </span>{" "}
        Cheese
      </>
    );
  }

  if (id === "diagridpepperoni") {
    return (
      <>
        <span
          style={{
            color: "#0BDDA3",
          }}
        >
          Diagrid
        </span>{" "}
        Pepperoni
      </>
    );
  }
  return name;
}

export function generateMessage(type: string): string {
  switch (type) {
    case "order-placed":
      return "Your order was confirmed";
    case "order-in-preparation":
      return "Your order is in the kitchen";
    case "order-ready":
      return "Your order is ready for pickup";
    case "order-out-for-delivery":
      return "Your order was picked up";
    case "order-on-its-way":
      return "Your order is on its way";
    case "order-completed":
      return "Enjoy your pizza!";
    default:
      return "";
  }
}

export function generateProgress(type: string): number {
  switch (type) {
    case "order-placed":
      return 15;
    case "order-in-preparation":
      return 50;
    case "order-ready":
      return 60;
    case "order-out-for-delivery":
      return 90;
    case "order-completed":
      return 100;
    default:
      return 100;
  }
}
export function generateMiles(message: string): number {
  switch (message) {
    case "The order is on its way to your address.":
      return 2;
    case "The order is 1 mile away.":
      return 1;
    case "The order is 0.5 miles away.":
      return 0.5;
    default:
      return 0;
  }
}

export function generateDeliveryProgress(miles: number): number {
  switch (miles) {
    case 2:
      return 10;
    case 1:
      return 30;
    case 0.5:
      return 65;
    default:
      return 100;
  }
}
