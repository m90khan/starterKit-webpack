import throttle from "lodash/throttle";
import debounce from "lodash/debounce";
class TourPackage {
  constructor(query) {
    this.revealPackages = query;
    this.hideInitial();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.windowHeight = window.innerHeight;
    this.events();
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener(
      "resize",
      debounce(() => {
        this.windowHeight = window.innerHeight;
      }, 333)
    );
  }
  calcCaller() {
    this.revealPackages.forEach((el) => {
      if (el.isVisible == false) {
        this.calculateScroll(el);
      }
    });
  }
  calculateScroll(el) {
    // console.log(el.getBoundingClientRect().y);
    // The HTMLElement.offsetTop read-only property returns the distance of the current
    //element relative to the top of the offsetParent node.
    if (window.scrollY + this.windowHeight > el.offsetTop) {
      let scrollPercent =
        (el.getBoundingClientRect().y / this.windowHeight) * 100;
      if (scrollPercent < 70) {
        let className = 0;
        this.GenerateHTML(el, className);
        el.classList.add("package__reveal--visible");

        el.isVisible = true;
        if (el.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle);
        }
      }
    }
  }
  hideInitial() {
    this.revealPackages.forEach((el) => {
      el.classList.add("package__reveal");
      el.isVisible = false;
    });
    this.revealPackages[this.revealPackages.length - 1].isLastItem = true;
  }
  GenerateHTML(el, className) {
    const arr = [];
    if (el.classList.contains("feature")) {
      console.log(el, className);
    }
  }
}

export default TourPackage;
