import homePage from './homepage'
import { contactPage, menuPage } from './pages'

const home = homePage()
home.defaultView()

const $ = elem => document.querySelector(elem)

const clearContainer = container => {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}

$('.home').addEventListener('click', () => {
  clearContainer($('.main-container'))
  home.homeView()
})

$('.contact').addEventListener('click', () => {
  clearContainer($(".main-container"))
  contactPage()
}) 