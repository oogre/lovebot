window.sketch = new Processing.Sketch();
// define 3D context
sketch.use3DContext = true;
sketch.options.isTransparent = true;
sketch.attachFunction = function(processing) {
  processing.setup = function() {
    processing.background(0, 0);
    processing.size( $(document).width(), $(document).height());
    //$("#heartAttack").show();
  };

  processing.draw = function() {
    processing.background(0, 0);
    processing.fill(0);
    processing.rect(processing.mouseX, processing.mouseY, 100, 100)
  }
};