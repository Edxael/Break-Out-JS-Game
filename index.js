console.log("Game Code V: 1.0.0");

// -------------------------------------------------------------------------------------------------
// VARIABLE DECLARATIONS
const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext('2d')
let x = canvas.width/2
let y = canvas.height - 30
let dx = 2
let dy = -2
let ballRadius = 10
let paddleHeight = 10
let paddleWidth = 75
let paddleX = (canvas.width - paddleWidth) / 2

// Keyboard Control Variables
let rightPressed = false
let leftPressed = false

// Create event listener for arrow keys
document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)



// -------------------------------------------------------------------------------------------------
// FUNCTION DECLARATIONS
const drawBall = () => {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, Math.PI*2, false)
  ctx.fillStyle = "green"
  ctx.fill()
  ctx.closePath()
}


const drawPaddle = () => {
  ctx.beginPath()
  ctx.rect(paddleX, canvas.height - paddleHeight - 8, paddleWidth, paddleHeight)
  ctx.fillStyle = "aquamarine"
  ctx.fill()
  ctx.closePath()
}

const keyDownHandler = (e) => {
  if(e.keyCode == 39){ rightPressed = true }
  if(e.keyCode == 37){ leftPressed = true }
}
const keyUpHandler = (e) => {
  if(e.keyCode == 39){ rightPressed = false }
  if(e.keyCode == 37){ leftPressed = false }
}


const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall()
  drawPaddle()

  // Border Coallition Detection direction change.
  if((y + dy < ballRadius) || (y + dy > canvas.height - ballRadius)){ dy = -dy }
  if((x + dx < ballRadius) || (x + dx > canvas.width - ballRadius)){ dx = -dx }

  // Changing the location of the ball
  x += dx
  y += dy
}




// -------------------------------------------------------------------------------------------------
// CODE EXECUTION
setInterval(draw, 20)
