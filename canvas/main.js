
'use strict'

////////////////////////////////////////////////////////////////////////////////
//
const canvas = document.querySelector( 'canvas' )
const pen = canvas.getContext( '2d' )

////////////////////////////////////////////////////////////////////////////////
//
const start =()=>
{
  //============================================================================
  // EXAMPLE 0 . introduction
  //
  pen.fillStyle = 'rgb(256,128,0)'
  pen.fillRect( 0, 0, 300, 300 )

  pen.fillStyle = 'rgba(0,128,256,0.5)'
  pen.fillRect( 100, 100, 300, 300 )

  //============================================================================
  // EXAMPLE 1 . boxes
  //
  // X, Y, WIDTH, HEIGHT
  //
  pen.fillRect( 0, 0, 100, 100 )
  pen.clearRect( 10, 10, 80, 80 )
  pen.strokeRect( 20, 20, 60, 60 )

  //============================================================================
  // EXAMPLE 2 . little guy
  //
  let x = 120
  let y = 0

  pen.strokeStyle = 'rgb(0,255,0)'
  pen.fillStyle = 'rgb(255,0,0)'

  pen.beginPath()
  pen.moveTo( x, y )
  pen.lineTo( x + 20, y + 0 )
  pen.lineTo( x + 20, y + 20 )
  pen.lineTo( x + 0, y + 20 )
  pen.closePath()
  pen.stroke()
  pen.fill()

  //============================================================================
  // EXAMPLE 3 . smiley
  //
  // X, Y, RADIUS, BEGINNING, END, DIRECTION
  //
  x = 170
  y = 320

  pen.strokeStyle = 'rgb(0,255,255)'

  pen.beginPath()
  pen.arc(    x,      y,      50, 0, Math.PI * 2, true  ) // head
  pen.moveTo( x - 15, y - 20                            )
  pen.arc(    x - 20, y - 20, 5,  0, Math.PI * 2, true  ) // left eye
  pen.moveTo( x + 25, y - 20                            )
  pen.arc(    x + 20, y - 20, 5,  0, Math.PI * 2, true  ) // right eye
  pen.moveTo( x + 30, y                                 )
  pen.arc(    x,      y,      30, 0, Math.PI,     false ) // mouth
  pen.stroke()
}
const fail =()=>
{
  alert( 'Your browser doesn\'t support CANVAS technology' )
}

////////////////////////////////////////////////////////////////////////////////
//
canvas.getContext ? start() : fail()
