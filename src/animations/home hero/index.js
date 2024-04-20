import gsap from 'gsap'

export default class HomeHero {
  constructor(options) {
    this.element = options.element
    this.create()
  }

  create() {
    this.tl = gsap.timeline({ repeat: -1 })
    const text = this.element.querySelectorAll('div')

    this.tl
      .fromTo(
        text[0],
        {
          autoAlpha: 1,
          y: '0%',
        },
        {
          delay: 3,
          autoAlpha: 0,
          y: '-100%',
        }
      )
      // reset 0
      .set(text[0], {
        y: '100%',
      })
      // start 1
      .fromTo(
        text[1],
        {
          autoAlpha: 0,
          y: '0%',
        },
        {
          autoAlpha: 1,
          y: '-100%',
        },
        '>-0.3'
      )
      .set(text[2], {
        autoAlpha: 0,
        y: '-100%',
      })
      .to(text[1], {
        autoAlpha: 0,
        y: '-200%',
        delay: 3,
      })
      // reset 1
      .set(text[1], {
        y: '0%',
      })
      .to(
        text[2],
        {
          autoAlpha: 1,
          y: '-200%',
        },
        '>-0.3'
      )
      .to(text[2], {
        autoAlpha: 0,
        y: '-300%',
        delay: 3,
      })
      // reset 2
      .set(text[2], {
        y: '0%',
      })
      .to(
        text[0],
        {
          autoAlpha: 1,
          y: '0%',
        },
        '>-0.3'
      )
  }
}
