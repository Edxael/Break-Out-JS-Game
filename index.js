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
let paddleHeight = 3
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
  ctx.rect(paddleX, canvas.height - paddleHeight - 4, paddleWidth, paddleHeight)
  ctx.fillStyle = "aquamarine"
  ctx.fill()
  ctx.closePath()
}

function keyDownHandler (e) {
  if(e.keyCode == 39){ rightPressed = true }
  if(e.keyCode == 37){ leftPressed = true }
}
function keyUpHandler (e) {
  if(e.keyCode == 39){ rightPressed = false }
  if(e.keyCode == 37){ leftPressed = false }
}


const draw = () => {
  // console.log(y);
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall()
  drawPaddle()

  // Border Coallition Detection direction change.
  // if((y + dy < ballRadius) || (y + dy > canvas.height - ballRadius)){ dy = -dy }
  if( y + dy < ballRadius ){ dy = -dy }
  else if (y + dy > canvas.height - ballRadius) {

    if(x > paddleX && x < paddleX + paddleWidth ){
      dy = -dy
    }else{
      alert("GAME OVER...")
      x = canvas.width/2
      y = canvas.height - 30
      dx = 2
      dy = -2
    }

  }

  if((x + dx < ballRadius) || (x + dx > canvas.width - ballRadius)){ dx = -dx }

  // Moving the Paddle when keys are pressed
  if(rightPressed && (paddleX <= canvas.width - paddleWidth)){ paddleX += 5 }
  if(leftPressed && (paddleX >= 0)){ paddleX -= 5 }


  // Changing the location of the ball
  x += dx
  y += dy
}




// -------------------------------------------------------------------------------------------------
// CODE EXECUTION
setInterval(draw, 10)
