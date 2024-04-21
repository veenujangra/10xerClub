import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

export default class Home {
  constructor(options) {
    this.sprintNavs = document.querySelectorAll(options.sprintNav)
    this.sprintList = document.querySelectorAll(options.sprintList)
    this.create()
  }

  create() {
    gsap.registerPlugin(ScrollTrigger)

    this.sprintList.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top center',
        // markers: true,
        onUpdate: (self) => {
          this.sprintNavs.forEach((nav) => {
            const links = nav.querySelectorAll('a')
            if (self.direction === 1) {
              links[index].classList.add('is--active')
            } else if (self.direction === -1) {
              links[index].classList.remove('is--active')
            }
          })
        },
      })
    })
  }
}
