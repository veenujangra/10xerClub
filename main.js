import './style.scss'
import Page from './src/Page'
import Navigation from './src/navbar'
import Home from './src/home'

class App {
  constructor(options) {
    this.element = options.main

    this.createNavigation()

    this.createPage()
    this.addEventListeners()
  }

  createNavigation() {
    this.navigation = new Navigation({
      element: '.navbar',
      close: '.menu_close',
    })
  }

  async createPage() {
    this.page = new Page({
      element: this.element,
    })

    await document.fonts.ready
    document.documentElement.classList.add('loaded')

    this.home = new Home({
      sprintNav: '.sprint_check_wrapper',
      sprintList: '.sprint_list_item',
    })

    this.page.create()
    this.page.show()
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onResize() {
    if (this.page && this.page.onResize) {
      this.page.onResize()
    }
  }
}

new App({ main: '.main' })
