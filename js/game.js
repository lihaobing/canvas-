; (function (Food, Snake) {
  function Game() {
    this.canvas = document.getElementsByTagName('canvas')[0]
    this.ctx = this.canvas.getContext('2d')
    this.food = new Food({ game: this })
    this.snake = new Snake({ game: this })
    this.time = null
    this.start()
  }

  Game.prototype = {
    constructer: Game,

    mainLoop: function () {
      this.snakeList.push(

      )
    },

    start: function () {
      this.time = window.setInterval(function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.snake.setPosition()
        this.food.init()
        this.snake.init()
        this.control()
      }.bind(this), 200)
    },

    control: function () {
      document.onkeydown = (function (e) {
        this.snake.keyControl(e.keyCode)
        // console.log(e.keyCode)
      }.bind(this))
    }
  }

  new Game()
})(Food, Snake)