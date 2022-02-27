const GRID_SIZE = 21
export function randomGridPosition(){
    return{
        x:Math.floor(Math.random() * GRID_SIZE)+1, //floor of((0 to 0.999)*21) + 1 to get number between 0 to 21
        y:Math.floor(Math.random() * GRID_SIZE)+1


    }
}
export function outsideGrid(pos){
  if(pos.x < 1 || pos.x > GRID_SIZE || pos.y < 1 || pos.y > GRID_SIZE){
      return true
  }
}