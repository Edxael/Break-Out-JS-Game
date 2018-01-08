console.log("Game Code V: 1.0.0");

const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext('2d')
let x = canvas.width/2
let y = canvas.height - 30


const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  draBall()

  if(y < 20){
    y = canvas.height - 30
  }else{
    y -= 15
  }
}

const draBall = () => {
  ctx.beginPath()
  ctx.arc(x, y, 10, 0, Math.PI*2, false)
  ctx.fillStyle = "green"
  ctx.fill()
  ctx.closePath()

}

setInterval(draw, 150)
