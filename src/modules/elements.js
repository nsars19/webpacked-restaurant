class Element {
  constructor(attrs, tag = 'div') {
    this.elem = document.createElement(tag)
    this.addAttributes(attrs)
  }

  addAttributes(attrs) {
    for (let attr in attrs) {
      this.elem.setAttribute(attr, attrs[attr])
    }
  }
}

export { Element }
