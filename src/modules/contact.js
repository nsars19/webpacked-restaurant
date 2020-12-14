import { Element, appendTo, $ } from './elements'

export const contactPage = () => {
  const container = $(".main-container")
  const contactContainer = new Element({class: 'contacts'}, 'div')
  // Contact info
  // -- telephone 
  const phoneNumberContainer = new Element({class: 'phone-container'}, 'div')
  const phoneHeader = new Element({class: 'phone-header'}, 'h2')
  const phoneNumber = new Element({class: 'phone-number'}, 'div')

  phoneHeader.setText("phone")
  phoneNumber.setText("1-344-123-6789")

  // -- address
  const addressContainer = new Element({class: 'address-container'}, 'div')
  const addressHeader = new Element({class: 'address-header'}, 'h2')
  const address = new Element({class: 'address'}, 'div')

  addressHeader.setText("address")
  address.setText("285 Boulevard Rd")

  // -- hours
  const hoursContainer = new Element({class: 'hours-container'}, 'div')
  const hoursHeader = new Element({class: 'hours-header'}, 'h2')
  const hours = new Element({class: 'hours'}, 'div')

  hoursHeader.setText("hours")
  hours.setText("Tues - Thu\n 10a - 11p\n\nFri - Sun\n10a - 1a")

  let layout = [
    [container, contactContainer.elem],
    [contactContainer.elem, phoneNumberContainer.elem],
    [phoneNumberContainer.elem, phoneHeader.elem],
    [phoneNumberContainer.elem, phoneNumber.elem],
    [contactContainer.elem, addressContainer.elem],
    [addressContainer.elem, addressHeader.elem],
    [addressContainer.elem, address.elem],
    [contactContainer.elem, hoursContainer.elem],
    [hoursContainer.elem, hoursHeader.elem],
    [hoursContainer.elem, hours.elem],
  ]

  layout.forEach(elem => appendTo(elem[0], elem[1]))
}