import gsap from 'gsap'

export default class Navigation {
  constructor(options) {
    this.element = document.querySelector(options.element)
    this.menuWrapper = '.nav_menu_wrapper'
    this.menuButton = '.menu_button'

    this.create()
    this.addEventListeners()
  }

  create() {
    gsap.set(this.menuWrapper, {
      height: 0,
    })
  }

  addEventListeners() {
    this.element.addEventListener('click', this.onClick.bind(this))
  }

  onClick(event) {
    this.target = event.target.closest(this.menuButton) || 0
    if (this.target) {
      this.menuToggle()
      // document.body.classList.toggle('overflow-hidden')
      document.documentElement.classList.toggle('menu-open')
      this.target.classList.toggle('is-open')
    }
  }

  menuToggle() {
    this.tl = gsap.timeline()

    // Open
    if (!document.documentElement.classList.contains('menu-open')) {
      this.target.setAttribute('aria-extended', 'true')

      this.tl.fromTo(
        this.menuWrapper,
        {
          height: 0,
        },
        {
          height: '100vh',
          duration: 0.8,
          ease: 'Power2.easeOut',
        }
      )
    }
    // Close
    else {
      this.target.setAttribute('aria-extended', 'false')

      this.tl.to(this.menuWrapper, {
        height: 0,
        duration: 0.5,
        ease: 'Power2.easeIn',
      })
    }
  }
}
