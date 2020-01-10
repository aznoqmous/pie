import Pie from './pie.js'

document.addEventListener('DOMContentLoaded', ()=>{

  let pie = new Pie({
    width: '100px',
    height: '100px'
  })
  pie.addSlice(10)
  window.slice = pie.addSlice(25)
  pie.addSlice(10)

})
