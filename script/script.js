class Hover {
    constructor(option) {
        this.el = document.querySelector(option.el)
        this.el.addEventListener('mouseover', () => this.move())

    }
    move() {
        this.el.style.marginTop = this.random(0, innerHeight - this.el.clientHeight) + 'px'
          this.el.style.marginLeft = this.random(0, innerWidth - this.el.clientWidth) + 'px'
    }
    random(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) - min)
    }
}


class HoverBtn extends Hover{
    constructor(obj){
        super(obj)
    }
}

const el = new Hover({
    el: '.title'

})

const btn = new HoverBtn({
    el: '.btn'

})