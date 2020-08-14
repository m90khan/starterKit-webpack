import throttle from "lodash/throttle";

class stickyHeader {
  constructor() {
    this.header = document.querySelector(".section-header");
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }
  events() {
    window.addEventListener("scroll", this.scrollThrottle);
  }

  calcCaller() {
    if (window.scrollY > 50) {
      this.header.classList.add(".section-header--sticky");
    } else {
      this.header.classList.remove(".section-header--sticky");
    }
  }
}

export default stickyHeader;
