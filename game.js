import{update as updateSnake, draw as drawSnake, SPEED,getSnakeHead, snakeIntersection, onSnake} from "./snake.js"
import {update as updateTreat, draw as drawTreat} from "./treat.js"
import { outsideGrid, randomGridPosition} from "./grid.js"
let lastRenderTime = 0
let gameOver=false
const game=document.getElementById('game')


function main(currentTime){
    if(gameOver){
        if(confirm('You Lost The Game. Press OK to Restart' )){
            window.location.assign("https://adityathedev.github.io/SnakeGame/")
        }
            window.close()
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender=(currentTime - lastRenderTime)/1000
    if(secondsSinceLastRender<1/SPEED) return
    console.log("render")
    lastRenderTime=currentTime
    update()
    draw()
}
window.requestAnimationFrame(main)

function update(){
updateTreat()
checkDeath()
updateSnake()
}

function draw(){
    game.innerHTML= ''
    drawSnake(game)
    drawTreat(game)
}
function checkDeath(){
    gameOver= outsideGrid(getSnakeHead()) || snakeIntersection()
}
