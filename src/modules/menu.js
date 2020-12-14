import { Element, appendTo, $ } from './elements'

export const menuPage = () => {
  const container = $('.main-container')
  const menuContainer = new Element({class: 'menu-container'})
  appendTo(container, menuContainer.elem)

  // Menu Sections
  // -- burritos
  const burrito = new Element({class: 'section burrito'})
  appendTo(menuContainer.elem, burrito.elem)

  // ------ santa fe
  const santaFe = new Element({class: 'burrito-item'})
  const santaHeader = new Element({class: 'item-header'}, 'h2')
  const santaDesc = new Element({class: 'item-desc'})
  santaHeader.setText("Santa Fe Burrito")
  santaDesc.setText("The Bean's original. Delicious Santa Fe seasoned steak, chicken, or vegetables, crunchy lettuce, cheddar cheese, sour cream, guacamole, and refried beans. Comes with choice of soft or crunchy taco.")
  
  // ------ carne asada
  const carne = new Element({class: 'burrito-item'})
  const carneHeader = new Element({class: 'item-header'}, 'h2')
  const CarneDesc = new Element({class: 'item-desc'})
  carneHeader.setText("Carne Asada Burrito")
  CarneDesc.setText("Carne Asada steak, crunchy lettuce, cheddar cheese, sour cream, guacamole, and refried beans. Comes with choice of soft or crunchy taco.")

  // ------ vegetarian
  const vegetarian = new Element({class: 'burrito-item'})
  const vegeHeader = new Element({class: 'item-header'}, 'h2')
  const vegeDesc = new Element({class: 'item-desc'})
  vegeHeader.setText("Vegetarian Burrito")
  vegeDesc.setText("Pan seared poblano & sweet peppers, sweet onions, black & pinto beans, topped with monterey jack cheese, guacamole, and sour cream. ")

  // -- tacos
  const taco = new Element({class: 'section taco'})
  appendTo(menuContainer.elem, taco.elem)

  // ------ chicken
  const chickenTaco = new Element({class: 'taco-item'})
  const chickenHeader = new Element({class: 'item-header'}, 'h2')
  const chickenDesc = new Element({class: 'item-desc'})
  chickenHeader.setText("Chicken Tacos")
  chickenDesc.setText("Three shredded chicken tacos topped with lettuce, refried beans, cheddar cheese, sour cream, and choice of salsa. Comes in a crunchy or soft shell.")

  // ------ ground beef
  const beefTaco = new Element({class: 'taco-item'})
  const beefHeader = new Element({class: 'item-header'}, 'h2')
  const beefDesc = new Element({class: 'item-desc'})
  beefHeader.setText("Beef Tacos")
  beefDesc.setText("Three ground beef tacos topped with lettuce, refried beans, cheddar cheese, sour cream, and choice of salsa. Comes in a crunchy or soft shell.")

  // ------ carnitas
  const carnitasTacos = new Element({class: 'taco-item'})
  const carnitasHeader = new Element({class: 'item-header'}, 'h2')
  const carnitasDesc = new Element({class: 'item-desc'})
  carnitasHeader.setText("Carnitas Tacos")
  carnitasDesc.setText("Three carnitas tacos topped with lettuce, refried beans, cheddar cheese, sour cream, and choice of salsa. Comes in a crunchy or soft shell.")

  let layout = [
    [burrito.elem, santaFe.elem],
    [santaFe.elem, santaHeader.elem],
    [santaFe.elem, santaDesc.elem],
    [burrito.elem, carne.elem],
    [carne.elem, carneHeader.elem],
    [carne.elem, CarneDesc.elem],
    [burrito.elem, vegetarian.elem],
    [vegetarian.elem, vegeHeader.elem],
    [vegetarian.elem, vegeDesc.elem],
    [taco.elem, chickenTaco.elem],
    [chickenTaco.elem, chickenHeader.elem],
    [chickenTaco.elem, chickenDesc.elem],
    [taco.elem, beefTaco.elem],
    [beefTaco.elem, beefHeader.elem],
    [beefTaco.elem, beefDesc.elem],
    [taco.elem, carnitasTacos.elem],
    [carnitasTacos.elem, carnitasHeader.elem],
    [carnitasTacos.elem, carnitasDesc.elem],
  ]

  layout.forEach(pair => appendTo(pair[0], pair[1]))
}