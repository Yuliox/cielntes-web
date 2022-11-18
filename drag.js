//open and close
const open = document.getElementById('open');
const ventana = document.getElementById('wrapper');
const close = document.getElementById('close');
var on;
open.addEventListener('click', () => {
    ventana.classList.add('show');
    on = true;
});
close.addEventListener('click', () => {
    ventana.classList.remove('show');
    on = false;
});

//agrandar
const large = document.getElementById('sizelarge');
const small = document.getElementById('sizesmall');
const content = document.getElementById('content');
small.replaceWith(large);
large.addEventListener('click', () => {
    content.classList.add('full');
    wrapper.style.left = `50%`;
    wrapper.style.top = `50%`;
    wrapper.style.width = `100%`;
    wrapper.style.height = `100%`;
    large.replaceWith(small);
});
small.addEventListener('click', () => {
    wrapper.style.width = `450px`;
    wrapper.style.height = `300px`;
    small.replaceWith(large);
});

//drag and drop
const wrapper = document.querySelector(".wrapper"),
header = wrapper.querySelector("header");
function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(wrapper);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    wrapper.style.left = `${leftVal + movementX}px`;
    wrapper.style.top = `${topVal + movementY}px`;
    ventana.classList.add('drag');
    ventana.classList.remove('show');
}
header.addEventListener("mousedown", ()=>{
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", ()=>{
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag);
    ventana.classList.remove('drag');
    if(on==true){
        ventana.classList.add('show');
    }
});