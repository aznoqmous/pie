import Element from './element'
import Slice from './slice'

export default class Pie {
  constructor(config){
    config = Object.assign({
        backgroundColor: '#eee',
        display: 'block',
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
        scale: 100, // control the scale (slice value/scale -> slice size)
        showValue: true,
        color: 'white',
        font: 'arial',
        transition: 'all 1s ease-out',
    }, config)
    for(let key in config) this[key] = config[key]

    this.init()
    this.build()
    console.log(this)
  }

  init(){
    this.slices = []
    if(this.pie) this.pie.clear()

  }
  build(){
    this.pie = new Element({
      type: 'figure',
      style: {
        borderRadius: '50%',
        position: 'relative',
        overflow: 'hidden',
        background: this.backgroundColor,
        display: this.display,
        height: this.height,
        width: this.width,
        margin: this.margin,
        padding: this.padding,
        color: this.color,
        fontFamily: this.font,
        transition: this.transition
      }
    })
  }

  addSlice(value=0, color=false){
    let offset = 0
    this.slices.map(slice=> offset += slice.value)
    let slice = new Slice({
      parent: this.pie,
      value: value,
      offset: offset,
      scale: this.scale,
      backgroundColor: (color) ? color : this.getColor(this.slices.length),
      pie: this,
      showValue: this.showValue
    })
    this.slices.push(slice)
    return slice
  }

  refresh(){
    let offset = 0
    this.slices.map(slice => {
      slice.offset = offset
      offset += slice.value
      slice.refresh()
    })
  }

  getColor(index){
    return `hsl(${index * 126515 % 255}, 75%, 50%)`
  }

}
