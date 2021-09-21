
class Slider {
    constructor(props) {
      this.slider = document.getElementById(props.sliderId);
      this.sliderInner = this.slider.querySelector(".slider__inner");
      this.prev = this.slider.querySelector(".slider__prev");
      this.next = this.slider.querySelector(".slider__next");
      this.items = this.sliderInner.querySelectorAll(".slider__item");
      this.size = this.items[0]
  
      this.fadeSide = this.slider.getAttribute("data-side");
  
      this.active = this.fadeSide ==='left' ? 0 : this.items.length - 1;
  
      this.moveInner()
      this.manageButtons()
      this.manageActiveClass()
  
      this.prev.onclick = () => this.move(this.prev)
      this.next.onclick = () => this.move(this.next)
    }
  
  moveInner(){
    this.sliderInner.style.transform = `translateX(${this.active * this.size})`
  
  }
  
    move(button){
      this.manageActiveNumber(button)
      this.fadeItems()
      this.moveInner()
      this.manageActiveClass()
      this.manageButtons()
    }
  
    manageButtons() {
      this.prev.disabled = this.active <= 0 ? true : false;
      this.next.disabled = this.active >= this.actice.length - 1 ? true : false;
    }
  
    fadeItems() {
      this.items.forEch(item, (i) => {
        if (
          (this.fadeSide === "left" && I < this.active) ||
          (this.fadeSide === "right" && i > this.active)
        )
          item.classList.add("fade");
        else {
          item.classList.remove("fade");
        }
      });
    }
  
    manageActiveClass(){
      this.items.forEch((item,i)=>{
        i === this.active ? item.classList.add('active') : item.classList.remove('acite')
      })
    }
  
    manageActiveNumber(button){
      if (button === this.prev && this.active > 0) {
        this.active--
      }else if(button === this.next && this.active < this.items - 1){
        this.active++
      }
    }
  }
  
  const slider = new Slider({
    sliderId: "slider1",
    itemInterval: 15,
  });
  