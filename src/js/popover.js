export default class Popover {
  constructor() {
    this.popover = document.createElement("div");
  }

  static get markUp() {
    return `
      <h2 class="title">Popover title</h2>
      <p class="text">And here's some amazing content. It's very engaging. Right?</p>
    `;
  }

  showPopover(element) {
    this.popover.classList.add("popover-active");
    this.popover.insertAdjacentHTML("afterbegin", Popover.markUp);
    document.body.appendChild(this.popover);

    const { top, left } = element.getBoundingClientRect();

    this.popover.style.top = top - this.popover.offsetHeight - 7 + "px";
    this.popover.style.left =
      left + element.offsetWidth / 2 - this.popover.offsetWidth / 2 + "px";
  }

  removePopover() {
    this.popover.remove();
  }
}
