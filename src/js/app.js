import "../css/style.css";
import Popover from "./popover";

const button = document.querySelector(".button");

button.addEventListener("click", (evt) => {
  evt.preventDefault();

  const popover = new Popover();
  popover.showPopover(button);
});
