; (function () {
  function Snake(json) {
    this.game = json.game
    this.w = 20
    this.h = 20
    this.step = 20
    this.driction = 'x'
    this.speed = 1
    this.snakeList = [
      {
        x: 2,
        y: 3,
        color: 'skyblue'
      },
      {
        x: 3,
        y: 3,
        color: 'skyblue'
      },
      {
        x: 4,
        y: 3,
        color: 'red'
      }
    ]
    this.init()
  }

  Snake.prototype = {
    constructerr: Snake,

    init: function () {
      var ctx = this.game.ctx
      this.snakeList.forEach(function (item, index) {
        ctx.beginPath()
        ctx.fillStyle = item.color
        ctx.fillRect(item.x * this.step, item.y * this.step, this.w, this.w)
      }.bind(this))
      // this.keyControl()
    },

    setPosition: function () {
      this.keyControl()
      this.eatFood()
      this.snakeList.forEach(function (item, index) {
        if (index < this.snakeList.length - 1) {
          item.x = this.snakeList[index + 1].x
          item.y = this.snakeList[index + 1].y
        } else {
          item[this.driction] += this.speed
        }
      }.bind(this))
    },

    keyControl: function (keycode) {
      // console.log(keycode)
      var head = this.snakeList[this.snakeList.length - 1]
      switch (keycode) {
        case 37:
          this.driction = 'x'
          this.speed = -1
          break;
        case 38:
          this.driction = 'y'
          this.speed = -1
          break;
        case 39:
          this.driction = 'x'
          this.speed = 1
          break;
        case 40:
          this.driction = 'y'
          this.speed = 1
          break;
        default:
          break;
      }
    },

    eatFood: function () {
      var head = this.snakeList[this.snakeList.length - 1]
      
      if (head.x === this.game.food.x && head.y === this.game.food.y) {
        this.game.food.setPostion()
        this.snakeList.unshift({ 
          x : this.snakeList[0].x,
          y : this.snakeList[0].y,
          color : 'skyblue'
        })
      }
    }
  }

  window.Snake = Snake
})()