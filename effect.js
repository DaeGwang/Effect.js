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

  Effect.version = '0.2.2';

  Effect.extend = function(obj, prop) {

    if(Object.assign) return Object.assign(obj, prop);

    if(obj && prop && typeof prop == 'object'){
      for (var i in prop){
        obj[i] = prop[i];
      }
    }

    return obj;

  };

  Effect.isArray = function(arr){

    if(Array.isArray) return Array.isArray(arr);
    
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
    else{
      dom = document.querySelector(selector);
    }

    /*

    if(Object.prototype.toString.call(selector) === '[object String]'){
      if(selector.charAt(0) === '#'){
        selector = selector.slice(1);
        var el = document.getElementById(selector);
        dom = el;
      }
    }
    */

    return dom;

  }

  Effect.sumArrString = function(arr, value){

    var str = [];

    if(Effect.isArray(arr)){
      for(var index in arr){
        str.push(arr[index] + ' ' + value);
      }
    }

    return str.join(',');

  }


  Effect.Dom = function(selector, config){

    this.el = Effect.getDom(selector);
    this.init(config);

  };

  Effect.extend(Effect.Dom.prototype, {
    duration: '0',
    effect: {},
  });

  Effect.Dom.prototype.init = function(config){

    Effect.extend(this, config);
    this.setDuration();

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
      this.el.appendChild(img);
      this.img = img;
    }

    return this;

  };

  Effect.Dom.prototype.setStyle = function(prop, value){

    var dom = this.el;
    if(Effect.isArray(prop)){
      for(var arrProperty in prop){
        dom.style[prop[arrProperty]] = value;
      }
    }
    else{
      dom.style[prop] = value;
    }

  };

  Effect.Dom.prototype.setImgStyle = function(prop, value){  

    var dom = this.img || this.dom;
    dom.style[prop] = value;

  }

  Effect.Dom.prototype.setFilterStyle = function(value){

    this.setStyle(['filter', '-webkit-filter'], value);

  };

  Effect.Dom.prototype.setDuration = function(value){

    var sec = value || this.duration;
    var options = ['filter', 'opacity', 'transform'];
    var webkitOptions = ['filter', 'opacity', '-webkit-transform'];

    this.setStyle('transition', Effect.sumArrString(options, sec + 's'));
    this.setStyle('transition-duration', sec + 's');
    this.setStyle('-webkit-transition', Effect.sumArrString(webkitOptions, sec + 's'));

    return this;
    
  };


  //Transition Methods
  Effect.Dom.prototype.radius = function(value){

    if(this.effect.radius === undefined){
      this.effect.radius = value;
    }
    else{
      this.effect.radius += value;
    }

    this.setImgStyle('borderRadius', this.effect.radius + 'px');
    return this;

  };

  Effect.Dom.prototype.rotate = function(value){

    if(this.effect.rotate === undefined){
      this.effect.rotate = value;
    }
    else{
      this.effect.rotate = (this.effect.rotate + value) % 360;
    }

    this.setStyle('transform', 'rotate(' + this.effect.rotate + 'deg)');
    return this;  

  };

  Effect.Dom.prototype.scale = function(value){

    var newValue = 0;

    if(this.effect.scale === undefined){
      this.effect.scale = value;
    }
    else{
      newValue = this.effect.scale * value;
      this.effect.scale = newValue;
    }

    this.setStyle(['transform', '-webkit-transform'], 'scale(' + this.effect.scale + ')');
    return this;  

  };


  //Filter Methods
  Effect.Dom.prototype.opacity = function(value){

    var newValue = 0;
    
    if(this.effect.opacity === undefined){
      this.effect.opacity = value;
    }
    else{
      newValue = this.effect.opacity * value;
      this.effect.opacity = (newValue > 1 ? 1 : newValue);
    }

    this.setStyle('opacity', this.effect.opacity);
    return this;

  };

  Effect.Dom.prototype.blur = function(value){

    var newValue = 0;

    if(this.effect.blur === undefined){
      this.effect.blur = value;
    }
    else{
      newValue = this.effect.blur * value;
      this.effect.blur = newValue;
    }

    this.setFilterStyle('blur(' + this.effect.blur + 'px)');
    return this;  

  };

  Effect.Dom.prototype.grayscale = function(value){

    var newValue = 0;

    if(this.effect.grayscale === undefined){
      this.effect.grayscale = value;
    }
    else{
      newValue = this.effect.grayscale * value;
      this.effect.grayscale = (newValue > 1 ? 1 : newValue);
    }

    this.setFilterStyle('grayscale(' + this.effect.grayscale + ')');
    return this;  

  };

  Effect.Dom.prototype.sepia = function(value){

    var newValue = 0;
    
    if(this.effect.sepia === undefined){
      this.effect.sepia = value;
    }
    else{
      newValue = this.effect.sepia * value;
      this.effect.sepia = (newValue > 1 ? 1 : newValue);
    }

    this.setFilterStyle('sepia(' + this.effect.sepia + ')');
    return this;  

  };


  //CommonJS, AMD Support
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
