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
    home:    {elem: $('.home'), loadView: home.homeView}, 
    menu:    {elem: $('.menu'), loadView: menuPage}, 
    contact: {elem: $('.contact'), loadView: contactPage}
  }

  const clearMenuItemsActiveStatus = () => {
    for (let item in menuItems) {
      clearActiveStatus(menuItems[item].elem)
    }
  }

  for (let item in menuItems) {
    menuItems[item].elem.addEventListener('click', () => {
      clearMenuItemsActiveStatus()
      clearContainer($('.main-container'))
      menuItems[item].loadView()
      addActiveStatus(menuItems[item].elem)
    })
  }
}

main()