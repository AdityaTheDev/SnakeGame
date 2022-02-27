import  {onSnake, expandSnake} from './snake.js'
import { randomGridPosition} from "./grid.js"
let treat=getRandomTreatPosition()
const EXPANSION_RATE=2 //adding two segments

export function update(){
 if(onSnake(treat)){
     expandSnake(EXPANSION_RATE)
        treat=getRandomTreatPosition()
 }
}
 export function draw(gameBoard){
      const treatElement=document.createElement('div')
      treatElement.style.gridRowStart=treat.y
      treatElement.style.gridColumnStart=treat.x
      treatElement.classList.add('food')
      gameBoard.appendChild(treatElement)

 }
 function getRandomTreatPosition(){
     let newTreatPosition
     while ( newTreatPosition == null || onSnake(newTreatPosition))
      { 
           newTreatPosition=randomGridPosition()
     }
     return newTreatPosition
  }
