// Generated by CoffeeScript 1.3.1
(function() {

  Aria.classDefinition({
    $classpath: 'games.common.input.MouseInput',
    $extends: 'games.common.input.DefaultInput',
    $constructor: function(code, event) {
      this.event = event;
      this.$DefaultInput.constructor.call(this, code);
      return this;
    },
    $prototype: {
      updateEvent: function(event) {
        this.event = event;
      },
      getX: function() {
        return this.event.clientX;
      },
      getY: function() {
        return this.event.clientY;
      }
    }
  });

}).call(this);