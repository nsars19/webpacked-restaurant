import { Element } from './elements';

const homePage = () => {
  const appendTo = (parent, child) => parent.appendChild(child)

  const content = document.getElementById("content")

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

  content.appendChild(header.elem)
  header.elem.appendChild(restaurantInfoContainer.elem)
  restaurantInfoContainer.elem.appendChild(h1Name.elem)
  restaurantInfoContainer.elem.appendChild(h3Tagline.elem)
})()

export default homePage 