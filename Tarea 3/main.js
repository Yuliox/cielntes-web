import Button from './Button.js'

let div = document.getElementById('div')
let def = document.getElementById('default')

def.addEventListener('click', (e)=>{
   let Btn = new Button()
   Btn.addToBody(div)
})