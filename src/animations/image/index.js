import Animation from '..'
import gsap from 'gsap'

export default class ImageAnimation extends Animation {
  constructor({ element }) {
    super({ element })
    this.element = element

    this.animationOptions = {
      delay: this.element.getAttribute('dde') || 0,
      stagger: this.element.getAttribute('data-stagger') || 0.2,
      ease: this.element.getAttribute('data-ease') || 'Power1.easeOut',
      duration: this.element.getAttribute('data-duration') || 1,
    }
  }

  animateIn() {
    if (this.element.classList.contains('visible')) return

    this.tl = gsap.timeline({
      onComplete: () => {
        this.element.classList.add('visible')
      },
    })

    this.tl.fromTo(
      this.element,
      {
        // autoAlpha: 0,
        height: 0,
      },
      {
        height: '100%',
        // autoAlpha: 1,
        ease: this.animationOptions.ease,
        duration: this.animationOptions.duration,
        delay: this.animationOptions.delay,
      }
    )
  }

  animateOut() {}

  onResize() {}
}
