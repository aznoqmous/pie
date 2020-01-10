export default class Element{
  constructor(config){
    this.config = this.getConfig(config)
    this.parent = this.config.parent;
    this.build()
    this.bind()
  }

  getConfig(config){
    return Object.assign({
      // here ur default config
      type: 'div',
      attributes: { /* arbitrary js attributes */ },
      events: { /* arbitrary js events */ },
      styless: { /* arbitrary js styles */ }
    }, config)
  }

  remove(){
    this.element.remove()
  }
  clear(){
    this.element.innerHTML = '';
  }

  build(){
    this.buildHTML()
    this.initAttributes()
    this.initStyles()
  }
  buildHTML(){
    if(!this.parent) this.parent = document.body
    else if(this.parent.element) this.parent = this.parent.element

    this.element = document.createElement(this.config.type)
    if(this.config.width) this.element.width = this.config.width
    if(this.config.height) this.element.height = this.config.height
    this.parent.appendChild(this.element)
  }

  bind(){
    if(!this.config.events) return 'no event';
    for(let event in this.config.events){
      this.bindEvent(event)
    }
  }
  bindEvent(event){
    // extend - and use
    if(!event) return false
    this.element.addEventListener(event, ()=>{this.config.events[event]()})
  }

  setStyles(styles){
    for(let attribute in styles){
      this.element.style[attribute] = styles[attribute]
    }
  }
  initStyles(){
    this.setStyles(this.config.style)
  }
  setAttributes(attributes){
    for(let attribute in attributes){
      this.element[attribute] = attributes[attribute];
      this.element.setAttribute(attribute, attributes[attribute])
    }
  }
  initAttributes(){
    this.setAttributes(this.config.attributes)
  }

  insert(element, index=0){
    if(!this.element.children || !this.element.children[index]) {
      this.append(element)
      return false
    }
    let referenceNode = this.element.children[index]
    if(element.element) element = element.element
    this.element.insertBefore(element, this.element.children[index])
  }
  append(element){
    if(element.element) element = element.element
    this.element.appendChild(element)
  }
  prepend(element){
    this.insert(element)
  }

}
