console.log("Game Code V: 1.0.0");

const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext('2d')

let x = canvas.width/2
let y = canvas.height - 30

console.log(y);

setInterval(() => {
  ctx.beginPath()
  ctx.arc(x, y, 10, 0, Math.PI*2, false)
  ctx.fillStyle = "Black"
  ctx.fill()
  ctx.closePath()

  if(y < 20){
    y = canvas.height - 30
  }else{
    y -= 15
  }

  console.log(y);


  ctx.beginPath()
  ctx.arc(x, y, 10, 0, Math.PI*2, false)
  ctx.fillStyle = "purple"
  ctx.fill()
  ctx.closePath()


}, 500)
