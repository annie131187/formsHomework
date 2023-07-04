export default class Popover {
  constructor() {
    this.popover = document.createElement("div");
  }

  showPopover(element) {
    const popoverTitle = document.createElement("h2");
    const popoverText = document.createElement("p");
    this.popover.classList.add("popover-active");
    popoverTitle.classList.add("title");
    popoverText.classList.add("text");
    popoverTitle.textContent = "Popover title";
    popoverText.textContent =
      "And here's some amazing content. It's very engaging. Right?";
    document.body.appendChild(this.popover);
    this.popover.appendChild(popoverTitle);
    this.popover.appendChild(popoverText);

    const { top, left } = element.getBoundingClientRect();
    console.log(element.getBoundingClientRect());

    this.popover.style.top = top - this.popover.offsetHeight - 7 + "px";
    this.popover.style.left = left + "px";
  }

  // removePopover() {
  // }
}
