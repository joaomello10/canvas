let up = 38
let down = 40 
let left = 37
let right = 39  
let moveLeft = false
let moveRight = false
let moveUp = false
let moveDown = false

let canvas = document.querySelector('canvas')
let context = canvas.getContext("2d")

let player = {
    x: 10,
    y: 10,
}

const render = () => {
    context.clearRect(0,0,canvas.width,canvas.height)
    context.fillRect(player.x,player.y,50,50)
}

const move = () => {
    if(moveLeft){
        player.x -= 5
    }
    if(moveRight){
        player.x += 5
    }
    if(moveUp){
        player.y -= 5
    }
    if(moveDown){
        player.y += 5
    }
}

const keyDownHandler = (e) => {
    const key = e.keyCode 
    if(key === left && key !== right){
        moveLeft = true
    }
    if(key == right && key !== left){
        moveRight = true
    }
    if(key === up && key !== down){
        moveUp = true
    }
    if(key === down && key !== up){
        moveDown = true
    }
}

const keyUpHandler = (e) => {
    const key = e.keyCode 
    if(key === left && key !== right){
        moveLeft = false
    }
    if(key == right && key !== left){
        moveRight = false
    }
    if(key === up && key !== down){
        moveUp = false
    }
    if(key === down && key !== up){
        moveDown = false
    }
}

const update = () => {
    requestAnimationFrame(update, canvas)
    render()
    move()
}

window.addEventListener('keydown',keyDownHandler)
window.addEventListener('keyup',keyUpHandler)
render()
update()

