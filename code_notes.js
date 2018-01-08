
// ==============================================================
// Example in how to draw shapes in the canvas.

const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.rect(20, 40, 50, 50)
ctx.fillStyle = "red"
ctx.fill()
ctx.closePath()


ctx.beginPath()
// ctx.arc(240, 160, 20, 0, 15, true)
ctx.arc(240, 160, 10, 0, Math.PI*2, false)
ctx.fillStyle = "green"
ctx.fill()
ctx.closePath()


ctx.beginPath()
ctx.rect(160, 10, 100, 40)
ctx.strokeStyle = "yellow"
ctx.stroke()
ctx.closePath()

// ------------------------------------------------------------------------------


// ==============================================================
//     MAKE THE BALL MOVE VERTICALLY PERPETUALLY...

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

// ------------------------------------------------------------------------------
