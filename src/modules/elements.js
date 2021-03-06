export class Element {
  constructor(attrs, tag = 'div') {
    this.elem = document.createElement(tag)
    this.addAttributes(attrs)
  }

  addAttributes(attrs) {
    for (let attr in attrs) {
      this.elem.setAttribute(attr, attrs[attr])
    }
  }

  setText(text) {
    this.elem.innerText = text
  }
}

const appendTo = (parent, child) => parent.appendChild(child)
const $ = elem => document.querySelector(elem)

export { appendTo, $ }