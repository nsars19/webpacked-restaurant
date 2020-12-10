class Element {
  constructor(attrs, tag = 'div') {
    this.elem = document.createElement(tag)
    this.attrs = attrs
    this.addAttributes()
  }

  addAttributes() {
    for (let attr in this.attrs) {
      this.elem.setAttribute(attr, this.attrs[attr])
    }
  }
}

export { Element }
