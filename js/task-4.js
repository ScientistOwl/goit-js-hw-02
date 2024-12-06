function getShippingCost(country) {
  let price;
  switch (country) {
    case "China":
      price = 100;
      break;
    case "Chile":
      price = 250;
      break;
    case "Australia":
      price = 170;
      break;
    case "Jamaica":
      price = 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }
  return `Shipping to ${country} will cost ${price} credits`;
}

console.log("task 4", getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log("task 4", getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log("task 4", getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log("task 4", getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log("task 4", getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log("task 4", getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
