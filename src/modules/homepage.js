import { Element } from './elements';

const homePage = () => {
  const appendTo = (parent, child) => parent.appendChild(child)

  const content = document.getElementById("content")

  // Header & header children
  const header = new Element({
    class: 'header d-grid'
  }, 'header')

  const restaurantInfoContainer = new Element({
    class: 'info d-grid pi-c'
  }, 'div')

  const h1Name = new Element({
    class: 'info-name'
  }, 'h1')
  h1Name.setText("Bean's Burrito Grille")

  const h3Tagline = new Element({
    class: 'info-tagline'
  }, 'h3')
  h3Tagline.setText("Our burritos are as big as babies!")

  // Body Container
  const mainContainer = new Element({class: 'main-container' }, 'div')

  // Menu & Menu Items
  const mainMenu = new Element({class: 'main-menu'}, 'nav')
  const menuHome = new Element({class: 'home', "data-active": true}, 'span')
  const menuMenu = new Element({class: 'menu', "data-active": false}, 'span')
  const menuContact = new Element({class: 'contact', "data-active": false}, 'span')

  menuHome.setText("Home")
  menuMenu.setText("Menu")
  menuContact.setText("Contact")

  // Body Container Items
  const mainAbout = new Element({class: 'about'}, 'h1')
  const mainBlurb = new Element({class: 'blurb'}, 'div')

  mainAbout.setText("About")
  mainBlurb.setText("A staple in the region since 1984, Bean's burritos is the place to get your fill of south-of-the-border, north-of-the-border. Nothing quite says 'olé' like a Bean's burrito!\n\nBean's burritos was opened in 1984 by Bobby 'Beans' Sacamacci. He spent much of his life looking for the best burritos he could find, and was left, well, unfulfilled. He figured he could do better than the competition, and we're inclined to agree!")

  const layout = [
    [content, header.elem], 
    [header.elem, restaurantInfoContainer.elem],
    [restaurantInfoContainer.elem, h1Name.elem],
    [restaurantInfoContainer.elem, h3Tagline.elem],
    [content, mainContainer.elem],
    [mainContainer.elem, mainMenu.elem],
    [mainMenu.elem, menuHome.elem],
    [mainMenu.elem, menuMenu.elem],
    [mainMenu.elem, menuContact.elem],
    [mainContainer.elem, mainAbout.elem],
    [mainContainer.elem, mainBlurb.elem],
  ]
  
  layout.forEach(pair => appendTo(pair[0], pair[1]))
}

export default homePage 