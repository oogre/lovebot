window.sketch = new Processing.Sketch();
// define 3D context
sketch.use3DContext = true;
sketch.options.isTransparent = true;
sketch.attachFunction = function(processing) {
  var heart;
  var hearts = [];

  var Heart = function(image){
    var _image = image;
    var _pos   = [Math.random()*processing.width, Math.random()*processing.height];
    var red    = 128 + Math.floor(Math.random() * 128);
    var green  = 128 + Math.floor(Math.random() * 128);
    var blue   = 128 + Math.floor(Math.random() * 128);
    var alpha  = 128 + Math.floor(Math.random() * 128);
    var _size = Math.random();

    return {
      update : function(){
        var step = Math.random() * 10;
        _pos[1] -= step;
        _pos[0] += 5-step;
        return _pos[1] > -_size * image.height && _pos[1]< processing.height && 
              _pos[0] > -_size * image.width && _pos[0]< processing.width;
      },
      draw : function(){
        processing.tint(red, green, blue, alpha);
        processing.image(_image, _pos[0], _pos[1], _size * image.width, _size * image.height);
      }
    }
  };


  processing.setup = function() {
    processing.background(0, 0);
    processing.size( $(document).width(), $(document).height());
    //$("#heartAttack").show();
  };

  processing.draw = function() {
    if(processing.frameCount%15 == 0){
      hearts.push(Heart(processing.loadImage("Coeur.png")));
    }
    processing.background(0, 0);
    processing.fill(0);
    for(var i = hearts.length-1 ; i >=0 ; i --){
      hearts[i].draw();
      if(!hearts[i].update()){
        
        hearts.splice(i, 1);
      }
    }
  }  
};