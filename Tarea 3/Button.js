export default class Button {
    constructor (){

        let style = document.createElement('link')
        style.href = 'style.css'
        style.rel = 'stylesheet'

        this.dv = document.createElement("div")
        this.btn = document.createElement("button")
        this.btn.textContent = "hide"
        this.btn.style.cursor = "pointer"
        this.btn.on = true

        this.btn.addEventListener('click', ()=>{
            if (this.btn.on==true) {
                this.btn.textContent = "show"
                this.hide()
            }
            else {
                this.btn.textContent = "hide"
                this.show()
            }
        })

        this.btn.addEventListener('mouseover', () =>{
            if(this.btn.on==true){
                this.btn.style.cursor = "pointer"
                this.btn.style.background = "dodgerblue"
                this.btn.style.color = "white"
                this.btn.style.scale = "1.25"
                this.btn.style.transition = "0.5s"
            }
            if(this.btn.on==false){
                this.btn.style.opacity = "1"
                this.btn.style.background = "transparent"
                this.btn.style.color="white"
            }
        })

        this.btn.addEventListener('mouseout', () =>{
            if(this.btn.on==true){
                this.btn.style = {style}
                this.btn.style.transition = "0.5s"
            }
            else{
                this.btn.style.opacity = "0"
                this.btn.style.transition = "0.5s"
            }
        })
        this.dv.appendChild(this.btn)
    }
    show(){
        this.btn.on = true;
        this.btn.style.transition = "0.5s"
    }
    hide(){
        this.btn.on = false;
        this.btn.style.opacity = "0"
        this.btn.style.transition = "0.5s"
        this.btn.style.scale = "1"
    }
    addToBody(div){
        div.appendChild(this.dv)
    }
}