export const LalpayButton = (clietId, payerId, refNumber, elementId) => {
  let btn = document.createElement("button");
  const parentElement = document.getElementById(elementId).firstChild;
  btn.innerHTML = "LalPay";
  document.insertBefore(parentElement, btn);
};

export default LalpayButton;
