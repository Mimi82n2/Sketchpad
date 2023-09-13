let dimensions = 16;
let mousedown = false;
const body = document.querySelector('body');
body.addEventListener('mousedown', () => {mousedown = true});
body.addEventListener('mouseup', () => {mousedown = false});

const canvas = document.querySelector('.canvas');

function createCanvas(){
    for (let r = 0; r < dimensions; r++){
        let curRow = document.createElement('div');
        curRow.classList.add("row");
    
        for (let c = 0; c < dimensions; c++){
            let curPixel = document.createElement('div');
            curPixel.classList.add("pixel");
            curRow.appendChild(curPixel);
    
            const changeColor = (e) => {
                e.preventDefault();
                if (e.type === 'mousedown'){
                    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                }
                if (mousedown){
                    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                }   
            }
            curPixel.addEventListener("mouseover", changeColor)
            curPixel.addEventListener("mousedown", changeColor)
    
    
        }
        canvas.appendChild(curRow);
    }
}

createCanvas();
let button = document.querySelector('button');

button.addEventListener('click', () => {
    dimensions = prompt("Enter new dimensions: ");
    while (canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
    createCanvas();
})