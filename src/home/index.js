export default class Home {
  constructor(options) {
    this.sprintNavs = document.querySelectorAll(options.sprintNav)

    this.create()
  }

  create() {
    this.sprintNavs.forEach((springNav) => {
      const links = [...springNav.querySelectorAll('a')]
      links.forEach((link) => {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation, index) => {
            if (mutation.attributeName === 'class') {
              console.log(mutation.target)
              // const currentClassState = mutation.target

              if (currentClassState) {
                this.addActiveClass(links, index)
              }
            }
          })
        })

        observer.observe(link, { attributes: true })
      })
    })
  }

  addActiveClass(arr, index) {
    arr.forEach((item) => {
      item.classList.remove('is--active')
    })

    for (let i = 0; i < index; i++) {
      arr.classList.add('is--active')
    }
  }
}
