import rcolor from "rcolor";

const birthdayMessage = "happy birthday bibu";
const birthdayHeading = document.querySelector(".birthday-heading");
const messageSplit = birthdayMessage.replace(/ +/g, "").split("");

const messagemapped = messageSplit.map(
  (letter) => `<span style="color:${rcolor()}">${letter}</span>`
);
messagemapped.splice(5, 0, "<br />");
messagemapped.splice(14, 0, "<br />");
messagemapped.forEach((tag) => (birthdayHeading.innerHTML += tag));

console.log(messagemapped);
