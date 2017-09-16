# Drawing sinuses on canvas

Your task is to draw a perfect sinus on a canvas.

The canvas is given: it is a `#canvas` object defined in the index.html file.
All you need to do is to fill the `drawSin()` function defined in `e3.js` file.

Here is how the final result should look alike:

![sin](https://raw.githubusercontent.com/szn/gry-i-zabawy-js/master/e3/sin.png "Sinus example")

To make it even simpler there are two variables defined (`maxx` and `maxy`)
that reflects your canvas size.

There is one important limitation. The only functions and operator that you are
allowed to use are:

  * `ctx.moveTo(x, y)`
  * `ctx.lineTo(x, y)`
  * `ctx.rect(x, y, 1, 1)` // to draw a point
  * `ctx.stroke()`
  * `Math.sin(x)`
  * `Math.PI`

Have fun.
