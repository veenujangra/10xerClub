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
          y: '-50%',
        }
      )
      // reset 0
      .set(text[0], {
        y: '50%',
        autoAlpha: 0,
      })

    for (let i = 1; i < text.length; i++) {
      this.tl
        .fromTo(
          text[i],
          {
            autoAlpha: 0,
            y: '50%',
          },
          {
            autoAlpha: 1,
            y: '0%',
          },
          '>-0.2'
        )
        .to(text[i], {
          autoAlpha: 0,
          delay: 3,
          y: '-50%',
        })
    }
    this.tl.to(
      text[0],
      {
        autoAlpha: 1,
        y: '0%',
      },
      '>-0.2'
    )
  }
}
