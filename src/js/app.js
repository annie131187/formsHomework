import "../css/style.css";
import Popover from "./popover";

const button = document.querySelector(".button");
const popover = new Popover();

button.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (document.querySelector(".popover-active")) {
    popover.removePopover();
  } else {
    popover.showPopover(button);
  }
});
