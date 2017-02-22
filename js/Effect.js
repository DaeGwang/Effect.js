/**
 * Effect.js
 * Javascript DOM Effect Library
 *
 * Author: Daegwang Jang
 */

(function(){

  "use strict";

  var Effect = function(selector, config){

    //jQuery Support
    if(selector.jquery !== undefined){
     selector = selector[0];
    }

    return new Effect.Dom(selector, config);

  };

  Effect.verson = '0.1.2';

  Effect.extend = function(obj, prop) {

    if(obj && prop && typeof prop == 'object'){
      for ( var i in prop ){
        obj[i] = prop[i];
      }
    }

    return obj;

  };

  Effect.isArray = function(arr){

    if(Object.prototype.toString.call(arr) === '[object Array]'){
      return true;  
    }
    else{
      return false;
    }

  }

  Effect.getDom = function(selector){

    var dom;

    if(selector.tagName !== undefined){
      dom = selector;
    }

    if(Object.prototype.toString.call(selector) === '[object String]'){
      if(selector.charAt(0) === '#'){
        selector = selector.slice(1);
        var el = document.getElementById(selector);
        dom = el;
      }
    }

    return dom;

  }


  Effect.Dom = function(selector, config){

    this.el = Effect.getDom(selector);
    this.init(config);

  };

  Effect.extend(Effect.Dom.prototype, {
    transition: '0'
  });

  Effect.Dom.prototype.init = function(config){

    Effect.extend(this, config);
    this.setTransition();

  };

  Effect.Dom.prototype.removeChild = function(){

    while(this.el.childElementCount > 0){
      this.el.childNodes[0].remove();
    }

  };

  Effect.Dom.prototype.setImg = function(value){

    if(this.el.getTagName === 'IMG'){
      this.el.src = value;
    }
    else{
      var img = document.createElement('img');
      img.src = value;
      this.removeChild();
      this.el.append(img);
      this.img = img;
    }

    return this;

  };

  Effect.Dom.prototype.setStyle = function(prop, value){

    var dom = this.el;
    if(this.img) dom = this.img;
    if(Effect.isArray(prop)){
      for(var arrProperty in prop){
        dom.style[prop[arrProperty]] = value;
      }
    }
    else{
      dom.style[prop] = value;
    }

  };

  Effect.Dom.prototype.setFilterStyle = function(value){

    this.setStyle(['filter', '-webkit-filter'], value);

  };

  Effect.Dom.prototype.setTransition = function(value){

    var sec = value || this.transition;
    this.setStyle('transition', 'transform ' + sec + 's');
    this.setStyle('-webkit-transition', '-webkit-transform ' + sec + 's');
    return this;
    
  };


  Effect.Dom.prototype.opacity = function(value){

    this.setStyle('opacity', value);
    return this;

  };

  Effect.Dom.prototype.radius = function(value){

    this.setStyle('borderRadius', value + 'px');
    return this;

  };

  Effect.Dom.prototype.rotate = function(value){

    this.setStyle('transform', 'rotate(' + value + 'deg)');
    return this;  

  };

  Effect.Dom.prototype.scale = function(value){

    this.setStyle(['transform', '-webkit-transform'], 'scale(' + value + ')');
    return this;  

  };

  Effect.Dom.prototype.blur = function(value){

    this.setFilterStyle('blur(' + value + 'px)');
    return this;  

  };

  Effect.Dom.prototype.grayscale = function(value){

    this.setFilterStyle('grayscale(' + value + ')');
    return this;  

  };

  Effect.Dom.prototype.sepia = function(value){

    this.setFilterStyle('sepia(' + value + ')');
    return this;  

  };


  if (typeof define == 'function' && define.amd){
    define(function() {
      return Effect;
    }); 
  } 

  if (typeof exports !== 'undefined'){
    exports.Effect = Effect;
  }

  if (typeof navigator !== 'undefined'){
    window.Effect = Effect; 
  } 

  if (typeof module !== 'undefined') {
    module.exports = Effect;
  }

})();