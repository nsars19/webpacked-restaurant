import homePage from './homepage'
import { contactPage, menuPage } from './pages'

function main() {
  const home = homePage()
  home.defaultView()

  const $ = elem => document.querySelector(elem)

  const clearContainer = container => {
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }
  }

  const clearActiveStatus = elem => elem.setAttribute('data-active', false)
  const addActiveStatus = elem => elem.setAttribute('data-active', true)

  const menuItems = {
    home:    $('.home'), 
    menu:    $('.menu'), 
    contact: $('.contact')
  }

  const clearMenuItemsActiveStatus = () => {
    for (let item in menuItems) {
      clearActiveStatus(menuItems[item])
    }
  }

  $('.home').addEventListener('click', () => {
    clearMenuItemsActiveStatus()
    clearContainer($('.main-container'))
    home.homeView()
    addActiveStatus(menuItems.home)
  })

  $('.contact').addEventListener('click', () => {
    clearMenuItemsActiveStatus()
    clearContainer($(".main-container"))
    contactPage()
    addActiveStatus(menuItems.contact)
  }) 

  $('.menu').addEventListener('click', () => {
    clearMenuItemsActiveStatus()
    clearContainer($('.main-container'))
    menuPage()
    addActiveStatus(menuItems.menu)
  })
}

main()