
define(function(){
  function Food(json){
    this.game = json.game
    this.x = Math.round(Math.random()*29)
    this.y = Math.round(Math.random()*24)
    this.w = 20
    this.h = 20
    this.step = 20
    this.init()
  }

  Food.prototype = {
    constructer : Food,

    init : function(){
      // this.setPostion()
      // console.log(123)
      var ctx = this.game.ctx
      ctx.beginPath()
      ctx.fillStyle = 'skyblue'
      ctx.fillRect(this.x*this.step,this.y*this.step,this.w,this.h)
    },

    setPostion : function(){
      this.x = Math.round(Math.random()*29)
      this.y = Math.round(Math.random()*24)
    }
  }


  return Food
})