import Element from './element'

export default class Slice {
  constructor(config){
    config = Object.assign({
      parent: null,
      backgroundColor: 'red',
      value: 0,
      offset: 0,
      transition: 'all 1s ease-out',
      scale: null,
      showValue: null
    }, config)
    for(let key in config) this[key] = config[key]

    if(!this.parent) return delete this;

    this.build()
    this.refresh()
  }

  build(){
    this.segment = new Element({
      parent: this.parent,
      style: {
        position: 'absolute',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        transform: 'translate(0, -50%) rotate(90deg) rotate(0deg)',
        transformOrigin: '50% 100%',
        width: '100%',
        transition: this.transition
      }
    })

    this.inner = new Element({
      parent: this.segment,
      style: {
        position: 'absolute',
        background: this.backgroundColor,
        height: '100%',
        width: '100%',
        transform: 'translate(0, 100%) rotate(45deg)',
        transformOrigin: '50% 0',
        transition: this.transition
      }
    })
    this.over50 = new Element({
      parent: this.segment,
      style: {
        opacity: 0,
        position: 'absolute',
        background: this.backgroundColor,
        height: '100%',
        width: '100%',
        transition: this.transition
      }
    })

    this.text = new Element({
      parent: this.parent,
      style: {
        position: 'absolute',
        zIndex: 100
      },
      attributes: {
        innerHTML: this.value
      }
    })


  }

  refresh(){
    if(this.value / this.scale > 0.5) {
      this.over50.setStyles({ opacity: 1 })
      this.segment.setStyles({
        overflow: 'visible',
        transform : `translate(0, -50%) rotate(90deg) rotate(${Math.floor(this.offset / this.scale * 360)}deg)`,
        clipPath: `polygon(-100% -100%, 200% -100%, 200% 200%, -100% 200%)`
      })
    }
    else {
      this.segment.setStyles({
        overflow: 'hidden',
        transform : `translate(0, -50%) rotate(90deg) rotate(${Math.floor(this.offset / this.scale * 360)}deg)`
      })
      this.over50.setStyles({ opacity: 0 })
    }

    this.inner.setStyles({
      transform : `translate(0, 100%) rotate(${Math.floor(this.value / this.scale * 360)}deg)`
    })

    if(this.showValue){
      this.text.setStyles({
        left: `${ 50 + 3 * 50 / 4 * Math.cos( (this.offset + this.value / 2) / this.scale * 2 * Math.PI - 3 * Math.PI / 5 )}%`,
        top: `${ 50 + 3 * 50 / 4 * Math.sin( (this.offset + this.value / 2) / this.scale * 2 * Math.PI - 3 * Math.PI / 5 )}%`
      })
    }

  }

  setValue(value=0){
    this.value = value
    this.pie.refresh()
  }

  getSegmentCenterCoordinates(){
    let seg = this.getCenter(this.segment.element.getBoundingClientRect())
    let inn = this.getCenter(this.inner.element.getBoundingClientRect())
    let pos = {
      x: (seg.x + inn.x) / 2,
      y: (seg.y + inn.y) / 2
    }
    return pos
  }
  getCenter(pos){
    return {x: pos.x + pos.width / 2, y: pos.y + pos.height / 2}
  }
}
