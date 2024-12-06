function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + "...";
  }
}

console.log("task 2", formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log("task 2", formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log("task 2", formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log("task 2", formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(
  "task 2",
  formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)
); // "Nunc sed turpis..."
console.log(
  "task 2",
  formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)
); // "Nunc sed turpis a felis in nunc fringilla"
