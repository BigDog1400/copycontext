const textToCopy = [];
const copyToClipboard = textToCopy => {
  console.log(textToCopy);
  const el = document.createElement("textarea");
  el.value = `${
    textToCopy.length <= 1
      ? textToCopy[0]
      : textToCopy
          .map((text, index) => {
            if (index !== textToCopy.length - 1) {
              return `${text}, `;
            } else {
              return `and ${text}.`;
            }
          })
          .join("")
  }`;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

document.addEventListener("click", MouseEvent => {
  if (MouseEvent.altKey) {
    MouseEvent.preventDefault();
    text = MouseEvent.target.innerText;
    if (text !== undefined && text.length > 0) {
      textToCopy.push(text);
      copyToClipboard(textToCopy);
    }
  }
});
