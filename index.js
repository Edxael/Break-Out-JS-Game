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
let score = 0
let lives = 3

// Keyboard Control Variables
let rightPressed = false
let leftPressed = false

// Variable for the Bricks
let brickRowCount = 3
let brickCoumnCount = 5
let brickWidth = 75
let brickHeight = 20
let brickPadding = 10
let brickOffsetTop = 30
let brickOffsetLeft = 30
let bricks = []

for(let c = 0; c < brickCoumnCount; c++){
  bricks[c] = []
  for(let r = 0; r < brickRowCount; r++){
    bricks[c][r] = { x: 0, y: 0, status: 1 }
  }
}


// Create event listener for arrow keys
document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)



// ============================================================================================
// FUNCTION DECLARATIONS

const drawBricks = () => {
  for(let c = 0; c < brickCoumnCount; c++){
    for(let r = 0; r < brickRowCount; r++){

      // Check if the brick has been hit if yes do not draw it.
      if(bricks[c][r].status == 1){

        let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft
        let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop

        bricks[c][r].x = brickX
        bricks[c][r].y = brickY

        ctx.beginPath()
        ctx.rect(brickX, brickY, brickWidth, brickHeight)
        ctx.fillStyle = "rgb(152, 103, 213)"
        ctx.fill()
        ctx.closePath()

      }

    }
  }
}

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


const hitBrick = () => {
  for(let c = 0; c < brickCoumnCount; c++){
    for(let r = 0; r < brickRowCount; r++){
       let b = bricks[c][r]

       // Coallition Calculations
       if(b.status == 1){
         if((x > b.x) && (x < b.x + brickWidth) && (y > b.y) && (y < b.y + brickHeight)){
           dy = -dy
           b.status = 0
           score += 1
           if(score == brickRowCount * brickCoumnCount){
             alert("You WIN Congratulations.")
             document.location.reload()
           }
         }
       }
    }
  }
}


const drawScore = () => {
  ctx.font = "16px Arial"
  ctx.fillStyle = "white"
  ctx.fillText("Score: " + score, 8, 20)
}

const drawLives = () => {
  ctx.font = "16px Arial"
  ctx.fillStyle = "white"
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20)
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
  drawBricks()
  drawScore()
  drawLives()
  hitBrick()


  // Border Coallition Detection direction change.
  // if((y + dy < ballRadius) || (y + dy > canvas.height - ballRadius)){ dy = -dy }
  if( y + dy < ballRadius ){ dy = -dy }
  else if (y + dy > canvas.height - ballRadius) {

    if(x > paddleX && x < paddleX + paddleWidth ){
      dy = -dy
    }else{
      lives -= 1
      console.log(lives);
      if(lives <= 0){
        alert("GAME OVER... Want to Play AGAIN... ?")
        document.location.reload()

        // alert("GAME OVER...")
        // x = canvas.width/2
        // y = canvas.height - 30
        // dx = 2
        // dy = -2
      }else {
        x = canvas.width/2
        y = canvas.height - 30
        dx = 2
        dy = -2

        paddleX = (canvas.width - paddleWidth) / 2
      }


    }

  }

  if((x + dx < ballRadius) || (x + dx > canvas.width - ballRadius)){ dx = -dx }

  // Moving the Paddle when keys are pressed
  if(rightPressed && (paddleX <= canvas.width - paddleWidth)){ paddleX += 5 }
  if(leftPressed && (paddleX >= 0)){ paddleX -= 5 }


  // Changing the location of the ball
  x += dx
  y += dy

  // requestAnimationFrame(draw)  // <------ Pasing control of the refresing draw funtion to the browser for bertter performance
}




// ============================================================================================-
// CODE EXECUTION
const run1 = () => {
  setInterval(draw, 10)
}

// draw()
