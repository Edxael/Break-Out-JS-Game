
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
ctx.arc(240, 160, 10, 0, Math.PI*2, false)
// ctx.arc(240, 160, 20, 0, 15, true)
ctx.fillStyle = "green"
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.rect(160, 10, 100, 40)
ctx.strokeStyle = "yellow"
ctx.stroke()
ctx.closePath()

// ==============================================================
