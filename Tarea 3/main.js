import Button from './Button.js'

let div = document.getElementById('div')
let def = document.getElementById('default')
let head = document.getElementById('header')

def.addEventListener('click', (e)=>{
   let Btn = new Button()
   Btn.addToBody(div)
})

let style = document.createElement('link')
style.href = 'style.css'
style.rel = 'stylesheet'

def.addEventListener('mouseover', () =>{
   def.style.cursor = "pointer"
   def.style.background = "dodgerblue"
   def.style.color = "white"
   def.style.scale = "1.25"
   def.style.transition = "0.5s"
})

def.addEventListener('mouseout', () =>{
   def.style = {style}
   def.style.transition = "0.5s"
})

head.addEventListener('mousemove', function(e){
   let x = e.clientX;
   def.style.left = x + "px";
   def.style.transform = "translate(-50%)"
})

head.addEventListener('mouseout', function(e){
   def.style.left = {style}
})
