function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  return (
    normalizedMessage.includes("spam") || normalizedMessage.includes("sale")
  );
}

console.log("task 3", checkForSpam("Latest technology news")); // false
console.log("task 3", checkForSpam("JavaScript weekly newsletter")); // false
console.log("task 3", checkForSpam("Get best sale offers now!")); // true
console.log("task 3", checkForSpam("Amazing SalE, only tonight!")); // true
console.log("task 3", checkForSpam("Trust me, this is not a spam message")); // true
console.log(
  "task 3",
  checkForSpam("Get rid of sPaM emails. Our book in on sale!")
); // true
console.log("task 3", checkForSpam("[SPAM] How to earn fast money?")); // true
